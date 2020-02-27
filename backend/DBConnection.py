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
    def get_projects(self):
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

    def get_markets(self):
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

    def get_submissions(self):
        cur = self._con.cursor()
        results = []

        query = """
            SELECT p.title, m.name, s.project, s.market, s.sub_date, s.resp_date, s.status, s.notes
            FROM submissions s
            LEFT JOIN projects p ON s.project=p.proj_id
            LEFT JOIN markets m ON s.market=m.mkt_id;
        """

        cur.execute(query)
        query_res = cur.fetchall()

        for submission in query_res:
            results.append({
                'title': submission[0],
                'market': submission[1],
                'proj_id': submission[2],
                'mkt_id': submission[3],
                'sub_date': submission[4],
                'resp_date': submission[5],
                'status': submission[6],
                'notes': submission[7],
            })
        
        cur.close()
        return results

