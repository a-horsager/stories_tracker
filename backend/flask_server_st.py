from flask import Flask, jsonify
from db_utils import db_connect
import os

DEFAULT_PATH = os.path.join(os.path.dirname(__file__), 'test.db')

app = Flask(__name__)

@app.route('/')
def get_projects():
    con = db_connect(db_path=DEFAULT_PATH)
    cur = con.cursor()
    projects = {}

    query = """
                SELECT * FROM projects;
        """

    cur.execute(query)
    
    query_res = cur.fetchall()

    for project in query_res:
        projects[project[0]] = {
            'title': project[1],
            'status': project[2],
            'word_count': project[3],
            'notes': project[4],
        }
        
    return jsonify(projects)

if __name__ == '__main__':
    info = get_projects()
    print(info)