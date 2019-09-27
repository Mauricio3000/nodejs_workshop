const port = 8080;
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")


//--- Express setup
const app = express();
app.use(cors())
app.use(express.static('client'))

//--- Needed to handle POST method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//--- Our first end point
app.get('/rick', (req, res) => {
	res.status(200);
	res.send("https://screenrant.com/wp-content/uploads/2017/07/Rick-and-Morty.jpg");
});

//--- Our first end point
app.get('/rs', (req, res) => {
	res.status(200);
	res.send("https://static2.srcdn.com/wordpress/wp-content/uploads/2017/03/Ren-and-Stimpy.jpg");
});

app.post('/text', (req, res) => {
	console.log(req.body);
	res.end("Done.");
});

app.listen({ port: port }, () => {
    console.log("Server ready at http://localhost:" + port)
})