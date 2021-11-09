# W3D1 Web Servers 101
# Lecture Notes
_________________
## Topics
- Intro to Web Servers
 -NOdeJS server
- Intro to Express
- GET requests
- Request <---> Response
- Intro to server-side view templates with EJS (Sending files)

## Networking with TCP
- A wants to connect to B
- A finds credentials to B
- B has a server listening
- A connects to B
- B can get messages and act upon them
- A can disconnect from B

## HTTP 
Server  <-----------------> Client

A socket is just a connection between server and client

HTTP is a subset of TCP which makes sense since you need to establish a TCP connection with server and client. Then HTTP is used a set of rules to transfer data between the two.

You cannot send multiple requests and responses at the same time using HTTP.

## EJS (Embedded Javascript Templates)
1. npm install ejs (no need to require ejs)
2. set 'view engine' to ejs
3. create a folder called 'views' 

res.render() takes two parameters:
1. filename that will be sent to the client on request
2. object {} that is shared/pased between server.js and filename.ejs

The second parameter has to be an object (i.e not array) and for each .render() only one object can be passed in. 

# Course Notes
_________________
## Template Engine
Templates are files that define the presentation of a web app's data seperatly from the server logic. In order to use template files, a template engine is also needed. This engine converts the variables in a template file into HTML.

Partials are codes that are reused such as header, footer files.

Adding EJS partials to views,
```javascript
<%- include('RELATIVE PATH TO PARTIAL) %>
```
