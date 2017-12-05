from os import environ
from flask import Flask, send_from_directory, request, jsonify, abort
from flask_pymongo import PyMongo
from pymongo import ReturnDocument
from uuid import uuid1

from punchapy import MongoJSONEncoder

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'punch'
app.config['MONGO_URI'] = "mongodb://{}/punch".format(environ.get('MONGO_HOST') or "localhost:27017")
app.json_encoder = MongoJSONEncoder

mongo = PyMongo(app)


@app.route('/')
def root():
    return send_from_directory('static', 'index.html')


@app.route('/punch', methods=['GET'])
def punch_list():
    return jsonify([d for d in mongo.db.punch.find(projection={"_id": False})])


@app.route('/punch/<pid>', methods=['GET'])
def punch_get(pid):
    return jsonify(mongo.db.punch.find_one_or_404({'pid': pid}, projection={"_id": False}))


@app.route('/punch/<pid>', methods=['DELETE'])
def punch_remove(pid):
    result = mongo.db.punch.delete_one({'pid': pid})
    return jsonify({'deleted': result.acknowledged and result.deleted_count > 0})


@app.route('/punch', methods=['POST'])
def punch_save():
    return punch_update(str(uuid1()))


@app.route('/punch/<pid>', methods=['PUT'])
def punch_update(pid):
    punch_in = request.json
    if pid and punch_in:
        return jsonify(mongo.db.punch.find_one_and_update(
            {'pid': pid},
            {"$set": punch_in},
            upsert=True,
            projection={"_id": False},
            return_document=ReturnDocument.AFTER))
    abort(400)


if __name__ == '__main__':
    app.run('0.0.0.0', int(environ.get('SERVER_PORT') or '8080'))
