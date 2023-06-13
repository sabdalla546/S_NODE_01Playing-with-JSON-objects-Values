const fs = require('fs');
const changeDate=(data)=>{
    let accidentsList=Array.from(data.accidents);
    console.log(accidentsList)
    for(let i=0 ; i<accidentsList.length;i++){
        accidentsList[i].date=moment(accidentsList[i].date, "MM/DD/YYYY").format("YYYY-MM-DD");
    }
   
}
const moment = require('moment');
const data = JSON.parse(fs.readFileSync('./problem2.json',{'encoding':'utf-8'}));
changeDate(data);
console.log(data);
fs.writeFileSync('output2.json',JSON.stringify(data),{'encoding':'utf-8'});

