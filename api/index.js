const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")

dotenv.config();

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connection successful"))
    .catch((err) => {
        console.log(err)
    })


app.use(cors())
app.use(express.json())
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/product", productRoute)


app.listen(5000, () => {
    console.log("Backend server is running")
})

