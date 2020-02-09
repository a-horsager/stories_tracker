import sqlite3

def db_connect(db_path):
    try:
        con = sqlite3.connect(db_path)
        print('Successful database connection.')
        return con
    except:
        print('Unable to connect to the database.')