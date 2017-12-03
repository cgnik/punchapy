from os import environ
from flask import Flask, send_from_directory, request, jsonify
from flask_pymongo import PyMongo
import json

SERVER_PORT = environ.get('SERVER_PORT') or '8080'
MONGO_HOST = environ.get('MONGO_HOST') or "localhost:27017"

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'punch'
app.config['MONGO_URI'] = "mongodb://{}/{}".format(MONGO_HOST, app.config['MONGO_DBNAME'])

mongo = PyMongo(app)


@app.route('/')
def root():
    return send_from_directory('static', 'index.html')


@app.route('/punch', methods=['GET'])
def punch_list():
    return jsonify([{"timestamp": p["timestamp"], "_id": str(p["_id"])} for p in mongo.db.punch.find()])


@app.route('/punch/<pid>', methods=['GET'])
def punch_get(pid):
    derp= mongo.db.punch.find({'_id': pid})
    return jsonify([{"id" : d['_id']} for d in derp])


@app.route('/punch', methods=['POST'])
def punch_save():
    return jsonify(mongo.db.punch.insert(request.json))


if __name__ == '__main__':
    app.run('0.0.0.0', int(SERVER_PORT))
