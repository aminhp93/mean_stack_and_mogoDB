var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/api/message', function(request, response){
	console.log('amin');
	console.log(request.body);
	response.status(200);
});



var server = app.listen(5000, function(){
	console.log('listening on port ', server.address().port);
})