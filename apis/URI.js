
module.exports = {
    "Medical":{
        physicianList:`${process.apibaseURL}/physicians/list`,
        hospitalList:`${process.apibaseURL}/hospitals/list`,        
    },
    "Water":{
        list:`${process.apibaseURL}/water/list`,
        brands:`${process.apibaseURL}/water/brands`,
        availableUnits:`${process.apibaseURL}/water/available/units`
    }
};