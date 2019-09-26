const port = 8080;
const express = require("express")
const cors = require("cors")

//--- Express setup
const app = express();
app.use(cors())
app.use(express.static('client'))

app.listen({ port: port }, () => {
    console.log("Server ready at http://localhost:" + port)
})