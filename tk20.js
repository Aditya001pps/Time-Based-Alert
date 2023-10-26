function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = (dateTime.getMinutes()<10?"0":"") + dateTime.getMinutes();
    var sec = (dateTime.getSeconds()<10?"0":"") + dateTime.getSeconds() ;
    var session = document.getElementById('session');

    if(hrs>12){
        hrs = hrs-12;
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs<10){
        hrs = "0" + hrs;
    }
    // if(min<10){
    //     min = "0" + min;
    // }

    // if () {
        // alert(Put);
    // }

    // if(min==42){
    //     alert("Call");
    // }
    document.getElementById('hours').innerHTML =hrs;
    document.getElementById('minutes').innerHTML =min;
    document.getElementById('seconds').innerHTML = sec;
   console.log(`${hrs}:${min}:${sec}`)
    // if(min==56){
    //     alert("Hello User");
    // }
     
    // if(min==58){
        
    //     alert("Hello User");
    // }
    if(min==23){
        alert("hey");
    }

    else if(min==27 && sec==1){
        alert("heyS");
    }

     else if(min==53 && sec==1){
        alert("heySs");
    }
    else if(min==53 && sec==40){
        alert("heyS");
    }

     else if(min==32 && sec==1){
        alert("heySs");
    }
    
}
setInterval(displayTime,10);
 