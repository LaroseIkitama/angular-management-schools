/* //Install express server
const express=require('express');
const path=require('path');

const app=express();


//Serve only the static files from the dist directory

app.use(express.static('./dist/angular-management-of-schools'));

app.get('/*',(req,res)=> res.sendFile('index.html',{root:'dist/angular-management-of-schools/'}));

//Start the app by listening  on the default heroku port
app.listen(process.env.PORT || 8080);
 */

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/angular-management-of-schools'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/angular-management-of-schools/index.html'));});
app.listen(process.env.PORT || 8080);