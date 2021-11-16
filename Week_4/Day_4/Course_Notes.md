# W3D4 Security with Sessions
# Lecture Notes
_________________
## Topics



# Course Notes
_________________
## Storing Passwords Securely
Never store passwords as plain-text (i.e string) in a database.

Passwords shouldn't be encrypted, they should be hashed. This is because encryption is a reversible process unlike hashing.

For example, to check a user's login password, we just hash their password and match the hashed output with the one stored in the database.

## REST
REST is a popular set of conventions and practices for structuring routes in web applications.