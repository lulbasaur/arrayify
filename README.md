# arrayify
Simple Node JS server

To run:
>> node index.js

Alternatively with nodemon:
>> nodemon index.js

Valid request examples:

http://localhost:8080/arrayify?array=foo,bar,node,javascript

http://localhost:8080/arrayify?array=fOo,br,node,javascript

Invalid request:
http://localhost:8080/arrayify?array=fo,br,node,javascript


