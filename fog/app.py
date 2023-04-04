'''
This run the built react app in a flask project
'''
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')


@app.errorhandler(404)
def not_found(e):
    '''
    Error handling
    '''
    return app.send_static_file('index.html')


@app.route('/')
def index():
    ''' 
    App entry point
    '''
    return app.send_static_file('index.html')
