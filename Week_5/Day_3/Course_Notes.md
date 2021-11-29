# W5D3 SQL from our Apps
# Lecture Notes
_________________
## Topics
- Review Databases overall
- SQL and Node (Build an App)
- Add to a Express server, postgres

psql is a global service. You can access the stored databases anywhere!

A client is a single connection/worker that is able to run queries for your database

A pool is a collection of connections/workers that is able to run queries for your database

**DATA DEFINITION LANGUAGE (DDL)** is the language used to define the database schema. Some example DDL's are: CREATE, ALTER, and DROP.

**DATA MANIPULATION LANGUAGE (DML)** is the language used to manipulate our data.

**REMEBER** We need to also specify the data types when creating the columns in a table

## Steps on how to connect to Postgres DB
1. make pool, give parameters to pool
2. optional -> make connect()
3. make queries and send them to views as array of objects
# Course Notes
_________________
