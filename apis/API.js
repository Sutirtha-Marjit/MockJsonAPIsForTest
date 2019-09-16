const fs = require('fs');
const RejectionErrorObj = require('./RejectionError');
const WaterAPI = require('./water/api.water');
const accessToken = ''
const ActivateAPI = (app, apibaseURL) => {

  const commonResponseHeaderAttachment = (res) => {
    const headers = {
      developer: 'sutirtha.social.marjit@gmail.com',
      forUse: 'Development and testing',
      technology: 'JAVASCRIPT'
    };

    for (let h in headers) {
      res.header(h, headers[h]);
    }
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Authorization');
    return res;
  };

  const headerValidator = (headerValue) => {
      let valid = false;
      if(headerValue){
        console.log('Authorization found');
        const data = require('../token/token');
        if(data.indexOf(headerValue)>-1){
          valid = true;
        }
      }
      if(!valid){
        console.log('Authorization failed');
      }
      
      return valid;
  };

  const middleWareGeneral = (req, res, next) => {
    res = commonResponseHeaderAttachment(res);
    if (req.url.indexOf('/api/token/list') > -1 || req.url.indexOf('/api/details/list')> -1) {
      console.log('Default url paased');
      next();
    } else {
      const header = req.header('Authorization');    
      const isHeaderValid = headerValidator(header);
      console.log(`Request of [${req.url}] is ${isHeaderValid}`);
      if (isHeaderValid) {
        next();
      } else {
        const e = Object.assign({}, RejectionErrorObj);
        e.error.type = 'TOKEN_MISSING';
        e.meta.url = req.url;
        res.json(e);
      }
    }


  };
  
  app.get(`${apibaseURL}/api/token/list`,(req,res)=>{
    const data = require('../token/token');
    res.json(data);
  });

  app.get(`${apibaseURL}/api/details/list`,(req,res)=>{
    const data = require('./URI');
    let msg='<table class="table table-dark">';
    Object.keys(data).forEach((category)=>{
      msg += `<tr>
      <td colspan="2"><span class="text-primary">${category}</span></td>
      </tr> `;
      Object.keys(data[category]).forEach((apiRow)=>{
        msg += `<tr>
        <td>${apiRow}</td>
      <td><code>${data[category][apiRow]}</code></td>
      </tr> `;
      });
    });
    msg +='</table>';
    res.header("Content-Type", "text/html");
    res.send(msg);
  });

  if (app) {
    app.use(middleWareGeneral);
    WaterAPI(app,apibaseURL);
  }
};

module.exports = ActivateAPI;