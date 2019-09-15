const fs = require('fs');
const RandomData = require('../apis/RandomData');
const maxToken=5;
const generateTokens = ()=>{

    const tokenArr = [];
    for(let i=0;i<5;i++){
        let t=0;
        const s = RandomData.getRanDomNumberWithRange(0,10);
        if(s>5){
            t = `${new Date().getTime()}APITOKEN${Math.ceil(Math.random()*1500)}SUTIRTHA${Math.ceil(Math.random()*1500000)}XCRTA${Math.ceil(Math.random()*700000)}`;
        }else{
            t = `${Math.ceil(Math.random()*150)}APITOKEN${Math.ceil(Math.random()*1500)}SUTIRTHA${Math.ceil(Math.random()*1500000)}XCRTA${Math.ceil(Math.random()*700000)}`;
        }
        
        tokenArr.push(t.trim());
    }

    return tokenArr;

};

const generateTokenFile = (filePath)=>{
  if(filePath){
    fs.access(filePath,(error)=>{
        if(error){
            console.log('No such file ');
            const tokenString = JSON.stringify(generateTokens());
            const writeStream = fs.createWriteStream(filePath,{encoding:'utf8'});
            writeStream.write(tokenString,(error)=>{
                if(error){
                    console.log('error in writing file');
                }else{
                    console.log('written');
                }
            })
        }else{
            console.log('Yes file is there');
        }
    })
    
}
};

module.exports = generateTokenFile;

