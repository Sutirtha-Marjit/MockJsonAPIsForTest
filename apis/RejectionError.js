const getCommonDataModel = require('./CommonDataModel');

let RejectionErrorObj = getCommonDataModel();

RejectionErrorObj = Object.assign(RejectionErrorObj,{
    status: false,
    error: {
        name: 'Request unauthorized',
        description: "Your request is unauthorized",
        type: null
    }
});



module.exports = RejectionErrorObj;