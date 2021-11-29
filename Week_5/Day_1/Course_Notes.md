# W5D1 SQL Intro
# Lecture Notes
_________________
# Topics
- WHy databases?
- RDBMS
- Relational databases
- SQL

Databases are a form of persistent data storage. So you don't lose all your data when you shut down your computer.

DBMS are software that provide efficient management of data

Relational databases are one of the most popular type of databases. The data is broken down into tables with relationships between them. SQL is used to query relational databases

```javascript
SELECT * FROM table LIMIT 2; //Selects all columns from table but limit rows shown to 2

SELECT id, question FROM objectives LIMIT 5; //Selects only columns of id and question from the objectives table but limit rows shown to 5
```

# Course Notes
_________________
## DATABASES
Create a migrations folder in your project to store files for creating the schemas or tables.

Create a seeds folder to store a bunch of fake INSERTS to pre-populate your databases for testing and stuff.

Joins allows us to retrieve data from multiple tables at once.

An inner join will only give us data (rows) back where there is a match between the tables. So if a foreign key is null, the row will not be included in the result of an inner join.

An outer join will join the tables similarly to an inner join but will return all results for one of the tables even when the join condition (ON) is not met.
