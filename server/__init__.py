import json
from bson import ObjectId

from . import main


class MongoJSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId): return str(o)
        return json.JSONEncoder.default(self, o)
