function GetInfo(){
    var newName= document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML ="--"+newName.value+"--"


fetch("https://api.openweathermap.org/data/2.5/forecast?'+newName.value+'&appid=b6a94a9219b1b205ef4593b3bf698d61")
.then(response => response.json())
.then(data =>{
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML ="Min:" +Number(data.list[i].main.temp_min -272.8).toFixed(1)+"°";
    }
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Max").innerHTML ="Max:" +Number(data.list[i].main.temp_max -273.29).toFixed(1)+"°";
    }
    for(i=0; i<5; i++){
        document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/"+data.list[i].weather[0].icons+".png";
    }
    })

.catch(() => alert("Something is Wrong, Oh, NO!"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue ="London";
    GetInfo();
}

var d =new Date();
var weekday =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function CheckDay(day){
    if(day +d.getDay() >6){
        return day +d.getDay()-7;
    }
    else{
        return day +d.getDay();
    }
}

for(i=0;i<5;i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}