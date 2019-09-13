const express = require('express');
const app = new express();

app.get('/',(request,response)=>{
    response.json({
        text:'welcome to api store'
    });
});

app.listen(process.env.port,()=>{
    console.log(`App started`);
})