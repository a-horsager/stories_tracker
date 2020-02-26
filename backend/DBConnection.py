import sqlite3

class DBConnection(object):
    def __init__(self, db_path):
        print(db_path)
        try:
            self._con = sqlite3.connect(db_path)
            print('Successful database connection.')
        except:
            print('Unable to connect to the database.')

class StoriesDB(DBConnection):
    def get_all_projects(self):
        cur = self._con.cursor()
        results = []

        query = 'SELECT * FROM projects;'
        cur.execute(query)
        query_res = cur.fetchall()

        for project in query_res:
            results.append({
                'proj_id': project[0],
                'title': project[1],
                'status': project[2],
                'word_count': project[3],
                'notes': project[4],
            })

        cur.close()
        
        return results

    def get_all_markets(self):
        cur = self._con.cursor()
        results = []

        query = 'SELECT * FROM markets;'
        cur.execute(query)
        query_res = cur.fetchall()

        for market in query_res:
            results.append({
                'mkt_id': market[0],
                'name': market[1],
                'type': market[2],
                'min_words': market[3],
                'max_words': market[4],
                'cents_per_word': market[5],
                'status': market[6],
                'website': market[7],
                'sub_format': market[8],
                'notes': market[9],
            })

        cur.close()
        
        return results
