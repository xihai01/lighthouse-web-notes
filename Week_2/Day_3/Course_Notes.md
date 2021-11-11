# W2D3 Networking with TCP and HTTP
# Lecture Notes
_________________
## Topics
- What is networking?
- TCP introduction 
- HTTP fundamentals
  - Its request and response nature
  - how it leverages TCP
  - most important parts of a request
  - common status codes such as 200, 302, 404, 500
- build server/build client

## What is networking?
- connecting
- communicating
- exchanging information

## Networking with People
- introduce yourself
- talk
- establish a good relationship
- listen
- be approachable
- give contact info
- say a proper goodbye and leave the convo

## Mediums of Comm.
- Air ( in person )
- text
- voice
- symbols
- sign language
- screen share
- video

## Computer Networking
### Mediums
- Wifi
- cables
- bluetooth
- radio signals

### Rules of Networking
--- TCP Transmission Control Protocol
- Computer A wants to connect to Computer B
- As Computer A, I want to know where Computer B is
- As Computer A , I want to show my credientials to B
- As Computer A, I can send messages to Computer B
- As Computer A, I want to recieve messages from Computer B ( I can listen to messages)
- As computer A, certain messages from B will make me do specific operations
- As computer A, I want to be able to disconnect...

--- HTTP Hyper Text Transmission Protocol
- A wants to connect to B
- A knows the credentials to connect to B
- A sends a REQUEST (a single message)
- B sends a RESPONSE (a single message back)
- Computers disconnect

### IP (Global and Local)
IP - are addresses

Local IP is an address that is used on YOUR OWN network. Its a way the router knows who you are and will send you info accordingly

Global IP - your actual address of your household

(VPN) will mask your IP address using a private computer somewhere in the world to send and recieve requests to your computer
### (routers)

### (PORTS)
If local IP are your building

PORTS are your unit numbers

# Course Notes
_________________
## HTTP Introduction
HTTP is a protocol used to read and write 'resources' or data in a simple text-based manner. Any data the browser can handle such as HTML, CSS, JS and even PDF's.

HTTP is a request-response based protocol meaning the client has to make a request to a HTTP server first before the server can send back a response. No request = No response.