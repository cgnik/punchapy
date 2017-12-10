import os
from nose.tools import with_setup

from punchapy import main


def setup_func():
    global app
    app = main.app.test_client()


def teardown_func():
    pass


def get_file_data(file):
    with open(os.path.dirname(os.path.realpath(__file__)) + '/static/' + file) as f:
        with main.app.app_context():
            fdata = f.read()
    return fdata


@with_setup(setup_func, teardown_func)
def test_root():
    result = app.get('/').data.decode('utf-8')
    expected = get_file_data('index.html')
    assert result == expected
