from paste.fixture import TestApp
from nose.tools import *

import json

from main import app


class TestWeb():
    def test_punch(self):
        middleware = []
        testapp = TestApp(app.wsgifunc(*middleware))
        x = app.request('/punch/blah', method='POST', data=json.dumps({'punch_time': '1234'}))
        assert_equal(json.loads(x['data']), {'user_id': 'blah', 'punch_time': '1234'})
