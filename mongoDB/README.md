# mongosh

mongosh is a shell
where we write mongo commands and js is also inbuit

# how to start 
first open your terminal
and write 'mongosh'
now u r in the world of mongo.
<br>
to create a db in mongodb ->"use <database_name> "// if database name is there then this will select that db
* show dbs: it will show all the database in your mongodb
* test is temporary db

# BSON DATA(Binary JSON)

in mongoDB the data is stored in the BSON format  because there is some issues in json format which is not in bson 

# BSON vs JSON

Bson is more efficient than JSON as compare to speed , space and all thing
json is human readable and machine also but the bson is only machine readable.Data support is also more in BSON

# mongo and sql
sql -> mongo
data -> document
table -> collection

# mongoDB commands

 * use college: for making a database
 * show collections: display your collection
 * db.<collection_name>.insertOne({name:"Adam"marks:79}): insertion (isme koi fix schema set nhi hota jo apne mann me aaye waisa set krdo)
 * db.<collection_name>.insertMany(<array_of_collection>)
 * db.student.find(): show all the documents data which is present in the collection(student)
 * db.student.find({<condition(key:value)>}): return a array of those document which comes under condition
 * db.student.findOne({<condition(key:value)>}): return a specific document
 
# opertor in mongoDb

* $gt: greater than// db.<Collection_name>.find({marks: {$gt: 75}})
* $gte: Matches values that are greater than or equal to a specified value.
* $eq: Matches values that are equal to a specified value.
* $in: Matches any of the values specified in an array.// db.<Collection_name>.find({name: {$in:<Array>}})
* $lt: Matches values that are less than a specified value.
* $lte: Matches values that are less than or equal to a specified value.
* $ne: Matches all values that are not equal to a specified value.
* $nin: Matches none of the values specified in an array.

-------------------------------------------------------------------------------------

# logical operator
* Name   Description
* $and :Joins query clauses with a logical AND returns all documents that match the conditions of both clauses.
* $not :Inverts the effect of a query expression and returns documents that do not match the query expression.
* $nor :Joins query clauses with a logical NOR returns all documents that fail to match both clauses.
* $or :Joins query clauses with a logical OR returns all documents that match the conditions of either clause.//            db.<Collection_name>.find({$or:[{marks:{$gt:75}},{age:{$gte:18}}]})

# update 
 * db.student.updateOne(<query or condition>,{$set:<update>})
*  db.student.updateMany(<query or condition>,{$set:<update>})

 * operators -> $set , $addFields , $project , $unset, $replaceRoot, $replaceWith (generally we use set operator because if the filter or query is not match thenn it will create it).
  
# replace 
* db.<Collection_name>.replaceOne({name:'adam'},{name:'Prince',College:'SVNIT',subject:'DBMS',marks:88})

# nesting
 db.student.insertOne({name:'Aniket',subj:'DiscreteMathematics',performance:{marks:78,grade:'C'}})
 <br>
 db.student.find({"performance.marks":{$gt:74}})

# deleting
* db.student.deleteOne({<condition>})
* db.student.deleteMany({<condition>})
* db.dropDatabase()

