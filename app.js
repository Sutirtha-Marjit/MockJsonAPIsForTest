process.apibaseURL = '/mockapibase/api/jsondata';
const express = require('express');
const generateTokenFile = require('./token/GenerateToken');
const app = new express();
const ActivateAPI = require('./apis/API');


generateTokenFile('./token/token.json');

app.set('port',process.env.PORT || 9000);
app.use(express.static('webapp'));
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

