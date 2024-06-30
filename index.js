const returnFirstTwoDrivers = (
    function returnFirstTwoDrivers (driversArray){ 
        let drivers=[...driversArray.slice(0,2)]
         return drivers
   })
   
   function returnLastTwoDrivers(driversArray){
      let drivers=[...driversArray.slice(2,4)]
      return drivers
   }

 let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

 function createFareMultiplier(integer){
      function fareMultiplier(multiplier){
        return multiplier*integer
         }
           return fareMultiplier   
 }

 function fareDoubler(){
let fare=10
 return fare*2
 }

 function fareTripler(){
    let fare =12
    return fare*3
 }

 function selectDifferentDrivers(drivers,selectingDriversFunction){
    return selectingDriversFunction(drivers)
 }