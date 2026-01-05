//  crud operations

use("crudDb")
db.createCollection("courses")
console.log(db);

//  creations (C)
// db.coursses.insertOne({
//     name: "web dev free cours",
//     price: 0,
//     projects: 12,
//     assignments: 33
// })

// db.coursses.insertMany([{
//   "name": "web dev free course",
//   "price": 0,
//   "projects": 12,
//   "assignments": 33
// },
// {
//   "name": "frontend beginner bootcamp",
//   "price": 0,
//   "projects": 8,
//   "assignments": 20
// },
// {
//   "name": "javascript essentials",
//   "price": 0,
//   "projects": 6,
//   "assignments": 18
// },
// {
//   "name": "html css mastery",
//   "price": 0,
//   "projects": 10,
//   "assignments": 25
// },
// {
//   "name": "react basics free",
//   "price": 0,
//   "projects": 5,
//   "assignments": 15
// },
// {
//   "name": "full stack intro",
//   "price": 0,
//   "projects": 7,
//   "assignments": 22
// }])
  
// read


// let a =db.courses.find({price: 0})
// console.log(a.count());


// update
 
//  db.coursses.updateOne({price: 0}, {$set:{price: 100}})

//  db.coursses.updateMany({price: 100}, {$set:{price: 200}})

//      delete

db.coursses.deleteMany({price: 200})