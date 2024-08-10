# mongoose

it is a library which is used to connect mongoDB and our backend(nodejs javascript runtime environment)

its an object data modeling (ODM) library

# dataType
* String
* Number
* Date
* Buffer
* Boolean
* Mixed
* ObjectId
* Array
* Decimal128
* Map
* UUID

# mongoos inbuilt function

check this link -> [about model function](https://mongoosejs.com/docs/api/model.html)

you can get some find function like find(),findByIdAndDelete(),findByIdAndRemove(),findOne(),deleteOne()

find function cannot return a promise it returns a query


* model.create();
* model.find();
* model.findOne();
* .find();
* .insertMany();
* .update({<condition>},{<updation>});
* .findOneAndUpdate({<condition>},{<updation>},{<option(new:true)>});
* Model.findByIdAndUpdate(id, update, options);
* model.findByIdAndDelete(id);
* model.findOneAndDelete(<Condition>);


# SchemaValidation
const bookSchema = new mongoose.schema({
    name:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
        required:false,
        maxLength:35
    },
    price:{
        type:Number,
        min:1,
    },
    catogory:{
        type:String.
        required:true,
        enum:[<write an option which is present here(eg:fiction,nonFiction)],

    }
});
* these rules Are work in the time of insertion it's not work on the time of updation
* if you want to work these rules in updation also then use option runValidators:true


