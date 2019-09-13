const express = require('express');
const port = process.env.port || 7500;
const app = new express();

app.get('/',(request,response)=>{
    response.json({
        text:'welcome to api store'
    });
});

app.listen(port,()=>{
    console.log(`working at ${port}`);
})