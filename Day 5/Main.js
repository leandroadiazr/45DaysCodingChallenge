//selecting the Dom
const Hsec = document.querySelector('.secs');
const Hhour = document.querySelector('.hour');
const Hmins = document.querySelector('.mins');



//seconds function

function setDate(){
        const now =new Date();
        //Getting the Seconds
                const secs = now.getSeconds();
                const secToDeg = ((secs / 60) * 360) + 90; //need to add 90degs that was removed when style was applied
                Hsec.style.transform = `rotate(${secToDeg}deg)`;


                        //getting the Mins
                        const mins =now.getMinutes()
                        const minsToDeg = ((mins / 60) * 360) + 90;
                        Hmins.style.transform = `rotate(${minsToDeg}deg)`;

                                //getting the Hours
                                const hours = now.getHours()
                                const hoursToDeg = ((hours / 60) * 360) + 90;
                                Hhour.style.transform = `rotate(${hoursToDeg}deg)`;
}
setInterval(setDate, 1000);





