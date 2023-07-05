import pymysql;
from os import path;
from datetime import datetime;

databasesql = '''
CREATE DATABASE IF NOT EXISTS marino;
'''
usesql = '''
use marino;
'''
drop = '''
drop table if exists entry;
'''
tablesql = ''' 
CREATE TABLE IF NOT EXISTS entry (
    location VARCHAR(32) NOT NULL,
    occupancy INT NOT NULL,
    datetime_from_web DATETIME NOT NULL,
    PRIMARY KEY(location, occupancy, datetime_from_web)
);
'''

def insert_all(cursor):
    file_path = path.relpath("BackEnd/marino_data.csv")
    file = open(file_path, 'r')
    insertsql = "INSERT INTO entry (location, occupancy, datetime_from_web) VALUES (%s, %s, %s) ON DUPLICATE KEY UPDATE location = location;"
    i = 0

    for line in file:
        oneLineInfo = line.strip().split(',')
        sqldate =  datetime.strptime(oneLineInfo[2] + " " + oneLineInfo[3], '%m/%d/%Y %I:%M %p').strftime('%Y-%m-%d %H:%M:%S')
        vals = (oneLineInfo[0], int(oneLineInfo[1]), sqldate)
        cursor.execute(insertsql, vals)
        if i % 10 == 0:
            print("Operating on line: " + str(i))
        i = i + 1


def executeSQL(connection, sql):
    marino_data = ()
    try:
        cur = connection.cursor()
        stmt_select = sql

        cur.execute(stmt_select)

        rows = cur.fetchall()
        for row in rows:
            print(row)
        cur.close()

    except pymysql.Error as e:
        print('Error: %d : %s' % (e.args[0], e.args[1]))



def main():
    print("Enter username and password for the database\n")
    username_ = input("Username: ")
    password_ = input("Password: ")

    try:
        connection = pymysql.connect(
        host='',
        port=3306,
        user=username_,
        password=password_,
    )
    except pymysql.err.OperationalError as e:
      print('Error: %d : %s' % (e.args[0], e.args[1]))
    
    cursor = connection.cursor()

    #cursor.execute(databasesql)
    cursor.execute(usesql)
    #cursor.execute(drop)
    #cursor.execute(tablesql)


    insert_all(cursor)
    executeSQL(connection, "SELECT * FROM entry;")
    #connection.commit()
    connection.close

main()