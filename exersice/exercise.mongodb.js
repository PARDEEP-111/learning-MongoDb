import mongoose from "mongoose"
let conn = await mongoose.connect("mongodb://localhost:27017/data")
let names = ["rohan", "harry", "nena"]
let city = ["chandigarh", "delhi", "goa"]
async function generateUser() {

    const userschema = new mongoose.Schema({
        name: String,
        city: String,
        salary: Number
    })
    const User = mongoose.model("User", userschema);

    for (let index = 0; index < 10; index++) {
        const user = {
            name: names[Math.floor(Math.random() * names.length)],
            city: city[Math.floor(Math.random() * city.length)],
            salary: Math.floor(Math.random() * (200000 - 20000 + 1) + 20000)
        }
        await User.create(user)
    }
    console.log("Users inserted")
    process.exit()
}

generateUser()