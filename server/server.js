const port = 8080;
const express = require("express")
const cors = require("cors")

//--- Express setup
const app = express();
app.use(cors())
app.use(express.static('client'))

//--- Our first end point
app.get('/rick', (req, res) => {
	res.status(200);
	res.send("https://screenrant.com/wp-content/uploads/2017/07/Rick-and-Morty.jpg");
});

app.listen({ port: port }, () => {
    console.log("Server ready at http://localhost:" + port)
})