console.log('Connected');

//Global Vars
const a = 65;
const s = 83;
const d = 68;
const f = 70;
const h = 72;
const j = 74;
const k = 75;
const l = 76;



function Sounds(){
//on key down
    window.addEventListener('keydown', function(e){

        console.log('keyDown')
        if(e.keyCode === a){
            document.querySelector('.a').classList.add('Event');
        } else if(e.keyCode === s){
            document.querySelector('.s').classList.add('Event');
        } else if(e.keyCode === d){
            document.querySelector('.d').classList.add('Event');
        } else if(e.keyCode === f){
            document.querySelector('.f').classList.add('Event');
        } else if(e.keyCode === h){
            document.querySelector('.h').classList.add('Event');
        } else if(e.keyCode === j){
            document.querySelector('.j').classList.add('Event');
        } else if(e.keyCode === k){
            document.querySelector('.k').classList.add('Event');
        } else if(e.keyCode === l){
            document.querySelector('.l').classList.add('Event');
        }
    });

// on key up
window.addEventListener('keyup', function(e){

    if(e.keyCode === a){
        document.querySelector('.a').classList.remove('Event');
    } else if(e.keyCode === s){
        document.querySelector('.s').classList.remove('Event');
    } else if(e.keyCode === d){
        document.querySelector('.d').classList.remove('Event');
    } else if(e.keyCode === f){
        document.querySelector('.f').classList.remove('Event');
    } else if(e.keyCode === h){
        document.querySelector('.h').classList.remove('Event');
    } else if(e.keyCode === j){
        document.querySelector('.j').classList.remove('Event');
    } else if(e.keyCode === k){
        document.querySelector('.k').classList.remove('Event');
    } else if(e.keyCode === l){
        document.querySelector('.l').classList.remove('Event');
    }
});


}

Sounds();


