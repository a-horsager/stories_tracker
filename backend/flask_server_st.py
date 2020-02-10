from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from DBConnection import StoriesDB
import os

DEFAULT_DB_PATH = os.path.join(os.path.dirname(__file__), 'test.db')

app = Flask(__name__)

@app.route('/getprojects', methods=['POST'])
@cross_origin()
def get_projects():
    db = StoriesDB(db_path=DEFAULT_DB_PATH)
    return jsonify(db.get_full_table(table_name='projects'))

if __name__ == '__main__':
    res = get_projects()
    print(res)