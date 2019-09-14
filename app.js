const express = require('express');
const app = new express();
const ActivateAPI = require('./apis/API');
const apibaseURL = 'mockapibase/api/jsondata/';
app.set('port',process.env.PORT || 5000);
app.use(express.static('webapp'));
app.get('/welcome',(request,response)=>{
    response.json({
        text:'welcome to api store'
    });
});

app.listen(app.get('port'),()=>{
  console.log(`App is running at ${app.get('port')}`);
  ActivateAPI(app,apibaseURL);
});

