
const fs = require('fs');
const addWeightHeight=(jsonData,he,we)=>{
    jsonData.height=he;
    jsonData.Weight=we;

}
const updateName=(jsonData,UpName)=>{
    jsonData.name=UpName;
}
const activities = (jsonData)=>{
    const catFriendsArray=Array.from(jsonData.catFriends);
    const activitiesList=[];
    const catFriendsNames=[];
    const allActivities=[];
    let totalWeight=0;
    for(let i=0 ; i< catFriendsArray.length;i++){
        activitiesList.push(...catFriendsArray[i].activities);
        catFriendsNames.push(catFriendsArray[i].name);
        totalWeight+=catFriendsArray[i].weight;
    }
    allActivities.push([...jsonData.activities,...activitiesList]);
    return {activitiesList, catFriendsNames, totalWeight,allActivities};
}
const addActivitey=(jsonData)=>{
    const catFriendsArray=Array.from(jsonData.catFriends);
    const items=['play','swimming'];
    for(let i=0 ; i< catFriendsArray.length;i++){
        //.log(catFriendsArray.length)
        catFriendsArray[i].activities.push(...items);
    }
}
const updateFurcolor=(jsonData)=>{
    Array.from(jsonData.catFriends)[0].furcolor='red';
}

//////// read file

fs.readFile('./problem1.json',(err,data)=>{
        if(err){
            console.log(err);
        }
        let jsonData=JSON.parse(data);
        addWeightHeight(jsonData,30,20);
        updateName(jsonData,'Fluffyy');
        const {activitiesList,catFriendsNames,totalWeight,allActivities}=activities(jsonData);
        console.log(activitiesList);
        console.log(catFriendsNames);
        console.log(totalWeight);
        console.log(allActivities);
        updateFurcolor(jsonData);
        addActivitey(jsonData);
        console.log(jsonData);
        console.log(jsonData.catFriends[0])
    });








