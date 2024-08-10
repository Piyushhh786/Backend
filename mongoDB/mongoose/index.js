const mongoose = require("mongoose");
main().then(() => {
    console.log("connection Successfull");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

// const User = mongoose.model("User", userSchema);//* for making collection whose schema is userSchema
// const Employee = mongoose.model("Employee", userSchema);
// let user1 = new User({ name: 'Adam', email: 'adam@gmail.com', age: 19 });
// user1.save().then((res) => {
//     console.log(res);
// }).catch((err) => { console.log(err); });
// let user2 = new User({ name: 'Piyush', age: 20, email: 'Piyush@gmail.com' });
// user2.save().then((res) => {
//     console.log(res);
// }).catch((err) => { console.log(err); });
// let user3 = new User({ name: 'ush', age: 20, email: 'Piyush@gmail.com' });
// //cnfrmation of saving if you give some wrong information which gives you error then it will also showing so we use promising
// //for saving
// user3.save().then((res) => {
//     console.log(res);
// }).catch((err) => { console.log(err); });

// // inserting many 
// User.insertMany([
//     { name: 'Ayush', age: 21, email: 'ayush@yahoo.in' },
//     { name: 'Aniket', age: 20, email: 'kallu@gandmaroMeri.com' },
//     { name: 'Gourav', age: 21, email: 'gover@gmail.com' }
// ]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// User.create({ name: "Anna", email: "anna@gmail.com", age: 20 }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });
// User.deleteMany({ age: { $gte: 0 } }).then((res) => {
//     console.log(res);
// }
// ).catch((err) => {
//     console.log(err);
// });
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String,
        required: false,
        maxLength: 35
    },
    price: {
        type: Number,
        min: 1,
    },
    catogory: {
        type: String,
        required: true,
        enum: ["Non Fiction", "Fiction"]

    }
});
const Book = mongoose.model("Book", bookSchema);
const book1 = new Book({ name: "Chintan Pratishthan", author: "HC Verma", catogory: "Non Fiction", price: 399 });
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
Book.insertMany([
    { name: "11 rules of life", author: "Chetan Bhagat", price: 349, catogory: "Non Fiction" },
    { name: "Harry Potter", author: "J. K. Rowling", price: 299, catogory: "Fiction" }
]).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
//*deleteById
Book.findByIdAndDelete("66b71db0404730e1068422ef").then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});




