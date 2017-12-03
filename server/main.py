from os import environ
from flask import Flask, send_from_directory, request, jsonify
from flask_pymongo import PyMongo

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
    return jsonify([{"_id": str(p["_id"]), "timestamp": p["timestamp"]} for p in mongo.db.punch.find()])


@app.route('/punch/<pid>', methods=['GET'])
def punch_get(pid):
    derp = mongo.db.punch.find({'_id': pid})
    return jsonify([{"id": str(d['_id']), "timestamp": d["timestamp"]} for d in derp])


@app.route('/punch', methods=['POST'])
def punch_save():
    return jsonify(mongo.db.punch.insert(request.json))


if __name__ == '__main__':
    app.run('0.0.0.0', int(environ.get('SERVER_PORT') or '8080'))
