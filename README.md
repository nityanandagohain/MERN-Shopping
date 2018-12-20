## Start the mongodb server
 
create a folder named mongo-data (any) in home

`mongod --dbpath '/home/nitya/mongo-data'`

`mongo`
`use crud`
url is "mongodb://localhost:27017/crud"

If already running
`sudo killall -15 mongod`


## react app in client/