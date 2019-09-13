const express = require('express');
const port = 7500 || process.env.port;
const app = new express();

app.get('/',(request,response)=>{
    response.json({
        text:'welcome to api store'
    });
});

app.listen(port,()=>{
    console.log(`working at ${port}`);
})