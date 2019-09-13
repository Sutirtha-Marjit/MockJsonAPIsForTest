const express = require('express');
const app = new express();
app.set('port',process.env.port || 5000);

app.get('/',(request,response)=>{
    response.json({
        text:'welcome to api store'
    });
}).listen(app.get('port'),()=>{
  console.log(`App is running at ${app.get('port')}`);
});

