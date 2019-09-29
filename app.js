process.apibaseURL = '/mockapibase/api/jsondata';
const express = require('express');
const generateTokenFile = require('./token/GenerateToken');
const app = new express();
const ActivateAPI = require('./apis/API');
const localport = 8082;


generateTokenFile('./token/token.json');

app.set('port',process.env.PORT || localport);
app.use(express.static('webapp/build'));
app.get('/welcome',(request,response)=>{
    response.json({
        text:'welcome to api store'
    });
});

app.listen(app.get('port'),()=>{
  console.log(`App is running at ${app.get('port')}`);
  console.log('Activating the api');
  ActivateAPI(app,process.apibaseURL);
});

