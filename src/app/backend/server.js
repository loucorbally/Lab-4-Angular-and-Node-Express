//server side listening for get requests

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware. 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
});

app.post('/name', function(req, res){
    res.send("Hello you sent " +
    req.body.firstname + " " +
    req.body.lastname);
})

app.get('/', function (req, res) {
   res.send('Hello from Express');
})

app.get('/api/posts', function(req, res){

    const posts = 
    [
        { 
            "id": "fadf12421l", 
            "title": "First server-side post", 
            "content": "This is coming from the server" 
        }, 
        { 
            "id": "ksajflaj132", 
            "title": "Second server-side post", 
            "content": "This is coming from the server!" 
        }
    ];

    res.status(200).json({posts:posts})
})

app.get('/test', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/name', function(req, res){
res.send("Hello my name is " 
+ req.query.firstname + " "
+ req.query.lastname);
})





app.get('/hello/:name', function (req, res) {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/something', function(req, res){
    res.send('Hello from something');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port);
})
