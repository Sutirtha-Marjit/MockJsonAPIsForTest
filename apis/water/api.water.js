const URI = require('../URI');
const getCommonDataModel = require('../CommonDataModel');
const RandomData = require('../RandomData');
const waterTypes = [
    'Heavenly',
    'SoftyLife',
    'AquaGreen',
    'GreenSpring',
    'Bharatiya Jal',
    'Neer',
    'Ambu',
    'Jaladhar',
    'OxyzenPlus',
    'C16Water',
    'Indian Water',
    'Foreign RO',
    'Tsunami',
    'KomoFresh',
    'GrrenLife',
    'ABS-Water',
    'BrickRedLife',
    'Conglo',
    'JalRakshak',
    'Bharatiya Rail Water',
    'Australian Spring',
    'Touch And Touch',
    'Life',
    'Cosmipolitan',
    'Aquafina',
    'Bisleri',
    'New Life',
    'New American Water',
    'Dakshin Bharatiya Water',
    'Drops',
    'Jeevan',
    'JaladharPlus',
    'Bari',
    'GreatCold',
    'ComboLife',
    'EasternFresh',
    'EcoLifeWater',
    'Bengal Jal',
    'Himalaya Hills',
    'AnnoPlus',
    'Cosmogen',
    'Maharashtra Jal Seva',
    'WestBengal Water Supply',
    'ROGen',
    'ComsWaterPlus',
    'SoJit',
    'OxyFresh',
    'Man',
    'ZedPlus',
    'AssertLife',
    'Positive',
    'ScienceBottle',
    'CopperMinerals',
    'IndianMinerals',
    'ExceptionalHealth',
    'WPlus'
];
const ltrs = [0.5,1,2,5,20,40];
const brandPhoto = [
    'https://tinyurl.com/y66q3fcy',
    'https://tinyurl.com/y5ryrnjv',
    'https://tinyurl.com/y3vnusvj',
    'https://tinyurl.com/y2kwggrk',
    'https://tinyurl.com/y6c27og2',
    'https://tinyurl.com/yxp8wt52',
    'https://tinyurl.com/yxl4cs7t',
    'https://tinyurl.com/y6ta6tj2',
    'https://tinyurl.com/yxp4fbdy',
    'https://tinyurl.com/yxry7ws6'
]

const WaterAPI = (app,apibaseURL)=>{

    app.get(URI.Water.availableUnits,(req,res)=>{
        const dataModel = getCommonDataModel();
        dataModel.data = {units:ltrs};
        res.json(dataModel);
    });

    app.get(URI.Water.brands,(req,res)=>{
        const dataModel = getCommonDataModel();
        dataModel.data = {brands:waterTypes};
        res.json(dataModel);
    });

    app.get(URI.Water.list,(req,res)=>{
        const dataModel = getCommonDataModel();
        dataModel.data = {water:[]};
        
       

        
        
        waterTypes.forEach((brandName)=>{

            const data = {
                brand:brandName,
                photo:brandPhoto[RandomData.getRanDomNumberWithRange(0,brandPhoto.length-1)],
                availableBottles:ltrs,
                price:(function(){
                    const priceList=[];
                    ltrs.forEach((ltr,index)=>{
                        const basePrice = RandomData.getRanDomNumberWithRange(10,60);
                        priceList.push({
                            bottleUnit:'liters',
                            bottleSize:ltr,
                            price:basePrice*(index+1)
                        });

                        
                    })
                    return priceList;
                })()
            };
            dataModel.data.water.push(data);

        })


        
        
        res.json(dataModel);
    })

};

module.exports = WaterAPI;