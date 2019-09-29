const URI = require('../URI');
const getCommonDataModel = require('../CommonDataModel');
const RandomData = require('../RandomData');

const MedicalAPI = (app,apibaseURL)=>{

    app.get(URI.Medical.physicianList,(req,res)=>{
        const dataModel = getCommonDataModel();
        
        res.json(dataModel);
    });

};


const getPhysicianObject = () => {

    return {
        designation: '',
        name: '',
        address: '',
        qualifications: [],
        experience: [],
        ratingInPercentage: 5,
        sex: 'Male',
        hospitals: [],
        timingAthospitals: [],
        personalChanbers: [],
        photo: ''
    };
    
};
