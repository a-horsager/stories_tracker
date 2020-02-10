import sqlite3

class DBConnection(object):
    def __init__(self, db_path):
        print(db_path)
        try:
            self.con = sqlite3.connect(db_path)
            print('Successful database connection.')
        except:
            print('Unable to connect to the database.')

class StoriesDB(DBConnection):
    def get_full_table(self, table_name):
        cur = self.con.cursor()
        projects = []

        query = 'SELECT * FROM ' + table_name + ';'

        cur.execute(query)
    
        query_res = cur.fetchall()

        for project in query_res:
            projects.append({
                'id': project[0],
                'title': project[1],
                'status': project[2],
                'word_count': project[3],
                'notes': project[4],
            })
        
        return projects
