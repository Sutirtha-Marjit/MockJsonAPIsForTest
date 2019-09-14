const RandomData = {

    getRanDomNumber:()=>{
        return Math.floor(Math.random()*4000000);
    },

    getRanDomNumberWithRange:(min=1,max=1000)=>{
        return (Math.floor(Math.random() * max) + min);
    }

};

module.exports = RandomData;