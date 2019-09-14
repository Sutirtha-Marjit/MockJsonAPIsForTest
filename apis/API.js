const RejectionErrorObj = require('./RejectionError');
const WaterAPI = require('./water/api.water');
const ActivateAPI = (app,apibaseURL)=>{
    
  const commonResponseHeaderAttachment = (res)=>{
    const headers = {
      developer:'sutirtha.social.marjit@gmail.com',
      forUse:'Development and testing',
    };

    for(let h in headers){
      res.header(h,headers[h]);
    }
    res.header('Access-Control-Allow-Origin','*');
    return res;
  };

    const headerValidator = (headers)=>{
      return false;
    };

    const middleWareGeneral = (req,res,next)=>{
        const header = req.header('token');
        res = commonResponseHeaderAttachment(res);
        if(headerValidator(header)){
          next();
        }else{
          const e = Object.assign({},RejectionErrorObj);
          e.error.type='TOKEN_MISSING';
          res.json(e);
        }
        
    };
    
    
    if(app){
      app.use(middleWareGeneral);  
      WaterAPI(app,apibaseURL);
    }
};

module.exports = ActivateAPI;