console.log('Connected');


//Global Vars
const backspace=	8
const tab	=9
const enter	=13
const shift=	16
const ctrl	=17
const alt=	18
const cmL= 91;
const cmR= 93;
const esc =	27
const space=	32
const lf =	37
const up= 	38
const rt =	39
const dw =	40
const insert=	45
const del=	46
const capL = 20;
const coma = 188
const dot = 190
const fslash = 191
const semic = 186
const qt = 222
const lb = 219
const rb = 221
const bslash = 220






const n0=	48
const n1=	49
const n2=	50
const n3=	51
const n4=	52
const n5=	53
const n6=	54
const n7=	55
const n8 =	56;
const n9 =	57;
const a=	65
const b	=66;
const c =	67;
const d=	68
const Ke=	69
const f =	70
const g=	71
const h=	72
const i=	73
const j=	74
const k=	75
const l=	76
const m=	77
const n=	78
const o=	79
const p=	80
const q=	81
const r=	82
const s=	83
const t=	84
const u=	85
const v=	86
const w=	87
const y=	89
const x=	88
const z=	90
const min =  189;
const igl =  187;
const bq = 192

//sound library
const keyData = {
    q: {
        sound: new Howl({
          urls: ['sounds/bubbles.mp3']
        }),
        color: '#1abc9c'
    },
    w: {
        sound: new Howl({
          urls: ['sounds/clay.mp3']
        }),
        color: '#2ecc71'
    },
    e: {
        sound: new Howl({
          urls: ['sounds/confetti.mp3']
        }),
        color: '#3498db'
    },
    r: {
        sound: new Howl({
          urls: ['sounds/corona.mp3']
        }),
        color: '#9b59b6'
    },
        t: {
        sound: new Howl({
          urls: ['sounds/dotted-spiral.mp3']
        }),
        color: '#34495e'
    },
    y: {
        sound: new Howl({
          urls: ['sounds/flash-1.mp3']
        }),
        color: '#16a085'
    },
    u: {
        sound: new Howl({
          urls: ['sounds/flash-2.mp3']
        }),
        color: '#27ae60'
    },
    i: {
        sound: new Howl({
          urls: ['sounds/flash-3.mp3']
        }),
        color: '#2980b9'
    },
    o: {
        sound: new Howl({
            urls: ['sounds/glimmer.mp3']
        }),
        color: '#8e44ad'
    },
    p: {
        sound: new Howl({
          urls: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    },
    a: {
        sound: new Howl({
          urls: ['sounds/pinwheel.mp3']
        }),
        color: '#f1c40f'
    },
    s: {
        sound: new Howl({
          urls: ['sounds/piston-1.mp3']
        }),
        color: '#e67e22'
    },
        d: {
        sound: new Howl({
          urls: ['sounds/piston-2.mp3']
        }),
        color: '#e74c3c'
    },
    f: {
        sound: new Howl({
          urls: ['sounds/prism-1.mp3']
        }),
        color: '#95a5a6'
    },
    g: {
        sound: new Howl({
          urls: ['sounds/prism-2.mp3']
        }),
        color: '#f39c12'
    },
    h: {
        sound: new Howl({
          urls: ['sounds/prism-3.mp3']
        }),
        color: '#d35400'
    },
    j: {
        sound: new Howl({
          urls: ['sounds/splits.mp3']
        }),
        color: '#1abc9c'
    },
    k: {
        sound: new Howl({
          urls: ['sounds/squiggle.mp3']
        }),
        color: '#2ecc71'
    },
    l: {
        sound: new Howl({
          urls: ['sounds/strike.mp3']
        }),
        color: '#3498db'
    },
    z: {
        sound: new Howl({
          urls: ['sounds/suspension.mp3']
        }),
        color: '#9b59b6'
    },
    x: {
        sound: new Howl({
          urls: ['sounds/timer.mp3']
        }),
        color: '#34495e'
    },
    c: {
        sound: new Howl({
          urls: ['sounds/ufo.mp3']
        }),
        color: '#16a085'
    },
    v: {
        sound: new Howl({
          urls: ['sounds/veil.mp3']
        }),
        color: '#27ae60'
    },
    b: {
        sound: new Howl({
          urls: ['sounds/wipe.mp3']
        }),
        color: '#2980b9'
    },
    n: {
        sound: new Howl({
            urls: ['sounds/zig-zag.mp3']
        }),
        color: '#8e44ad'
    },
    m: {
        sound: new Howl({
          urls: ['sounds/moon.mp3']
        }),
        color: '#2c3e50'
    }
}





function KbdEvents(){
//on key down
    window.addEventListener('keydown', function(e){

        if(keyData[e.key]){
            keyData[e.key].sound.play();
        }

        console.log(e)
        if(e.keyCode ===  a){
            document.querySelector('.a').classList.add('Event');
        } else if(e.keyCode ===  b){
            document.querySelector('.b').classList.add('Event');
        } else if(e.keyCode ===  c){
            document.querySelector('.c').classList.add('Event');
        } else if(e.keyCode ===  d){
            document.querySelector('.d').classList.add('Event');
        } else if(e.keyCode ===  Ke){
            document.querySelector('.e').classList.add('Event');
        } else if(e.keyCode ===  f){
            document.querySelector('.f').classList.add('Event');
        } else if(e.keyCode ===  g){
            document.querySelector('.g').classList.add('Event');
        } else if(e.keyCode ===  h){
            document.querySelector('.h').classList.add('Event');
        } else if(e.keyCode ===  i){
            document.querySelector('.i').classList.add('Event');
        } else if(e.keyCode ===  j){
            document.querySelector('.j').classList.add('Event');
        } else if(e.keyCode ===  k){
            document.querySelector('.k').classList.add('Event');
        } else if(e.keyCode ===  l){
            document.querySelector('.l').classList.add('Event');
        } else if(e.keyCode ===  m){
            document.querySelector('.m').classList.add('Event');
        } else if(e.keyCode ===  n){
            document.querySelector('.n').classList.add('Event');
        }else if(e.keyCode ===  o){
            document.querySelector('.o').classList.add('Event');
        }else if(e.keyCode ===  p){
            document.querySelector('.p').classList.add('Event');
        }else if(e.keyCode ===  q){
            document.querySelector('.q').classList.add('Event');
        }else if(e.keyCode ===  r){
            document.querySelector('.r').classList.add('Event');
        }else if(e.keyCode ===  s){
            document.querySelector('.s').classList.add('Event');
        }else if(e.keyCode ===  t){
            document.querySelector('.t').classList.add('Event');
        }else if(e.keyCode ===  u){
            document.querySelector('.u').classList.add('Event');
        }else if(e.keyCode ===  v){
            document.querySelector('.v').classList.add('Event');
        }else if(e.keyCode ===  w){
            document.querySelector('.w').classList.add('Event');
        }else if(e.keyCode ===  x){
            document.querySelector('.x').classList.add('Event');
        }else if(e.keyCode ===  y){
            document.querySelector('.y').classList.add('Event');
        }else if(e.keyCode ===  z){
            document.querySelector('.z').classList.add('Event');
        }else if(e.keyCode ===  n1){
            document.querySelector('.n1').classList.add('Event');
        }else if(e.keyCode ===  n2){
            document.querySelector('.n2').classList.add('Event');
        }else if(e.keyCode ===  n3){
            document.querySelector('.n3').classList.add('Event');
        }else if(e.keyCode ===  n4){
            document.querySelector('.n4').classList.add('Event');
        }else if(e.keyCode ===  n5){
            document.querySelector('.n5').classList.add('Event');
        }else if(e.keyCode ===  n6){
            document.querySelector('.n6').classList.add('Event');
        }else if(e.keyCode ===  n7){
            document.querySelector('.n7').classList.add('Event');
        }else if(e.keyCode ===  n8){
            document.querySelector('.n8').classList.add('Event');
        }else if(e.keyCode ===  n9){
            document.querySelector('.n9').classList.add('Event');
        }else if(e.keyCode ===  n0){
            document.querySelector('.n0').classList.add('Event');
        }else if(e.keyCode ===  backspace){
            document.querySelector('.del').classList.add('Event');
        }else if(e.keyCode ===  tab){
            document.querySelector('.tab').classList.add('Event');
        }else if(e.keyCode ===  enter){

            document.querySelector('.enter').classList.add('Event');
        }else if(e.keyCode ===  shift){
            document.querySelector('.shift-l').classList.add('Event');
        }else if(e.keyCode ===  shift){
            document.querySelector('.shift-r').classList.add('Event');
        }else if(e.keyCode ===  ctrl){
            document.querySelector('.ctr-l').classList.add('Event');
        }else if(e.keyCode ===  alt){
            document.querySelector('.alt').classList.add('Event');
        }else if(e.keyCode ===  esc){
            document.querySelector('.esc').classList.add('Event');
        }else if(e.keyCode ===  space){
            document.querySelector('.space').classList.add('Event');
        }else  if(e.keyCode ===  lf){
            document.querySelector('.lf').classList.add('Event');
        }else  if(e.keyCode ===  up){
            document.querySelector('.up').classList.add('Event');
        }else  if(e.keyCode ===  rt){
            document.querySelector('.rt').classList.add('Event');
        }else  if(e.keyCode ===  dw){
            document.querySelector('.dw').classList.add('Event');
        }else  if(e.keyCode ===  capL){
            document.querySelector('.capL').classList.add('Event');
        }else  if(e.keyCode ===  coma){
            document.querySelector('.coma').classList.add('Event');
        }else  if(e.keyCode ===  dot){
            document.querySelector('.dot').classList.add('Event');
        }else  if(e.keyCode ===  fslash){
            document.querySelector('.fslash').classList.add('Event');
        }else  if(e.keyCode ===  rb){
            document.querySelector('.rb').classList.add('Event');
        }else  if(e.keyCode ===  lb){
            document.querySelector('.lb').classList.add('Event');
        }else  if(e.keyCode ===  bslash){
            document.querySelector('.bslash').classList.add('Event');
        }else  if(e.keyCode ===  bq){
            document.querySelector('.bq').classList.add('Event');
        }else  if(e.keyCode ===  igl){
            document.querySelector('.igl').classList.add('Event');
        }else  if(e.keyCode ===  min){
            document.querySelector('.min').classList.add('Event');
        }else  if(e.keyCode ===  qt){
            document.querySelector('.qt').classList.add('Event');
        }else  if(e.keyCode ===  semic){
            document.querySelector('.semic').classList.add('Event');
        }else  if(e.keyCode ===  cmL){
            document.querySelector('.cmL').classList.add('Event');
        }else  if(e.keyCode ===  cmR){
            document.querySelector('.cmR').classList.add('Event');
        }

    });

// on key up
window.addEventListener('keyup', function(e){

        if(e.keyCode ===  a){
    document.querySelector('.a').classList. remove('Event');
} else if(e.keyCode ===  b){
    document.querySelector('.b').classList. remove('Event');
} else if(e.keyCode ===  c){
    document.querySelector('.c').classList. remove('Event');
} else if(e.keyCode ===  d){
    document.querySelector('.d').classList. remove('Event');
} else if(e.keyCode ===  Ke){
    document.querySelector('.e').classList. remove('Event');
} else if(e.keyCode ===  f){
    document.querySelector('.f').classList. remove('Event');
} else if(e.keyCode ===  g){
    document.querySelector('.g').classList. remove('Event');
} else if(e.keyCode ===  h){
    document.querySelector('.h').classList. remove('Event');
} else if(e.keyCode ===  i){
    document.querySelector('.i').classList. remove('Event');
} else if(e.keyCode ===  j){
    document.querySelector('.j').classList. remove('Event');
} else if(e.keyCode ===  k){
    document.querySelector('.k').classList. remove('Event');
} else if(e.keyCode ===  l){
    document.querySelector('.l').classList. remove('Event');
} else if(e.keyCode ===  m){
    document.querySelector('.m').classList. remove('Event');
} else if(e.keyCode ===  n){
    document.querySelector('.n').classList. remove('Event');
}else if(e.keyCode ===  o){
    document.querySelector('.o').classList. remove('Event');
}else if(e.keyCode ===  p){
    document.querySelector('.p').classList. remove('Event');
}else if(e.keyCode ===  q){
    document.querySelector('.q').classList. remove('Event');
}else if(e.keyCode ===  r){
    document.querySelector('.r').classList. remove('Event');
}else if(e.keyCode ===  s){
    document.querySelector('.s').classList. remove('Event');
}else if(e.keyCode ===  t){
    document.querySelector('.t').classList. remove('Event');
}else if(e.keyCode ===  u){
    document.querySelector('.u').classList. remove('Event');
}else if(e.keyCode ===  v){
    document.querySelector('.v').classList. remove('Event');
}else if(e.keyCode ===  w){
    document.querySelector('.w').classList. remove('Event');
}else if(e.keyCode ===  x){
    document.querySelector('.x').classList. remove('Event');
}else if(e.keyCode ===  y){
    document.querySelector('.y').classList. remove('Event');
}else if(e.keyCode ===  z){
    document.querySelector('.z').classList. remove('Event');
}else if(e.keyCode ===  n1){
    document.querySelector('.n1').classList. remove('Event');
}else if(e.keyCode ===  n2){
    document.querySelector('.n2').classList. remove('Event');
}else if(e.keyCode ===  n3){
    document.querySelector('.n3').classList. remove('Event');
}else if(e.keyCode ===  n4){
    document.querySelector('.n4').classList. remove('Event');
}else if(e.keyCode ===  n5){
    document.querySelector('.n5').classList. remove('Event');
}else if(e.keyCode ===  n6){
    document.querySelector('.n6').classList. remove('Event');
}else if(e.keyCode ===  n7){
    document.querySelector('.n7').classList. remove('Event');
}else if(e.keyCode ===  n8){
    document.querySelector('.n8').classList. remove('Event');
}else if(e.keyCode ===  n9){
    document.querySelector('.n9').classList. remove('Event');
}else if(e.keyCode ===  n0){
    document.querySelector('.n0').classList. remove('Event');
}else if(e.keyCode ===  backspace){
    document.querySelector('.del').classList. remove('Event');
}else if(e.keyCode ===  tab){
    document.querySelector('.tab').classList. remove('Event');
}else if(e.keyCode ===  enter){
    document.querySelector('.enter').classList. remove('Event');
}else if(e.keyCode ===  shift){
    document.querySelector('.shift-l').classList. remove('Event');
}else if(e.keyCode ===  shift){
    document.querySelector('.shift-r').classList. remove('Event');
}else if(e.keyCode ===  ctrl){
    document.querySelector('.ctr-l').classList. remove('Event');
}else if(e.keyCode ===  alt){
    document.querySelector('.alt').classList. remove('Event');
}else if(e.keyCode ===  esc){
    document.querySelector('.esc').classList. remove('Event');
}else if(e.keyCode ===  space){
    document.querySelector('.space').classList. remove('Event');
}else  if(e.keyCode ===  lf){
    document.querySelector('.lf').classList. remove('Event');
}else  if(e.keyCode ===  up){
    document.querySelector('.up').classList. remove('Event');
}else  if(e.keyCode ===  rt){
    document.querySelector('.rt').classList. remove('Event');
}else  if(e.keyCode ===  dw){
    document.querySelector('.dw').classList. remove('Event');
}else  if(e.keyCode ===  capL){
    document.querySelector('.capL').classList. remove('Event');
}else  if(e.keyCode ===  coma){
    document.querySelector('.coma').classList. remove('Event');
}else  if(e.keyCode ===  dot){
    document.querySelector('.dot').classList. remove('Event');
}else  if(e.keyCode ===  fslash){
    document.querySelector('.fslash').classList. remove('Event');
}else  if(e.keyCode ===  rb){
    document.querySelector('.rb').classList. remove('Event');
}else  if(e.keyCode ===  lb){
    document.querySelector('.lb').classList. remove('Event');
}else  if(e.keyCode ===  bslash){
    document.querySelector('.bslash').classList. remove('Event');
}else  if(e.keyCode ===  bq){
    document.querySelector('.bq').classList. remove('Event');
}else  if(e.keyCode ===  igl){
    document.querySelector('.igl').classList. remove('Event');
}else  if(e.keyCode ===  min){
    document.querySelector('.min').classList. remove('Event');
}else  if(e.keyCode ===  qt){
    document.querySelector('.qt').classList. remove('Event');
}else  if(e.keyCode ===  semic){
    document.querySelector('.semic').classList. remove('Event');
}else  if(e.keyCode ===  cmL){
    document.querySelector('.cmL').classList. remove('Event');
}else  if(e.keyCode ===  cmR){
    document.querySelector('.cmR').classList. remove('Event');
}
 });

}


KbdEvents();

