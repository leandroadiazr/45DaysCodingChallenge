console.log('Connected')



setInterval(getHour, 1000);
function getHour(){
    const time = new Date();
    let hour = time.getHours();
    let mins = time.getMinutes();
    let secs =time.getSeconds();
    const am ='AM'
    const pm ='PM'

//conditional
    if(hour > 12){
        hour = hour - 12;
        document.querySelector('#st').innerHTML = pm;
    };

    if (hour == 0){
        hour = 12;
        document.querySelector('#st').innerHTML = am;
    }
    //display hours
    document.querySelector('#hour').innerHTML = `${hour} : `;
    //display am / pm


//display mins
    if(mins < 10){
        document.querySelector('#mins').innerHTML = `0 ${mins} :`;

        }    else{
            document.querySelector('#mins').innerHTML = `${mins} : `;

        }


            if(secs < 10){
        document.querySelector('#secs').innerHTML = `0 ${secs}`;

        }    else{
            document.querySelector('#secs').innerHTML = `${secs} `;

        }



}