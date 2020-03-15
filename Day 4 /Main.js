console.log('Connected')
const dataUrl = `https://deckofcardsapi.com/api/deck`;
let image =[]
let name = []
let value =[]

//Loading data from the server
async function getCard(){
    // api url to get data and saving on a variable
    let response = await axios.get(`${dataUrl}/new/shuffle`);
    const deck = response.data;
    console.log(deck)

    // make request

    try{
        let id = deck.deck_id; //
        let card_url = `${dataUrl}/${id}/draw`;
        // console.log(card_url)
        let newCard = await axios.get(card_url);
        //  console.log(newCard)
        let card = newCard.data.cards[0];
console.log(card)
          if(!newCard.data.success){
               throw new Error('NO CARD LEFT, PLEASE RESET THE DECK')
            }




           //     //storing the data from th request on a variable to update the state
               name = card.suit;
               value =card.value;
                image = card.image;
                console.log(value, name, image);


     //transform and rotate the cards from css
     let angle = Math.random() * 90 -45;
     let x = Math.random() * 40-20;
     let y = Math.random() * 40-20;

     this._transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;



                const body = document.querySelector('.App');

                body.insertAdjacentHTML("beforeend",
                // `<h1>Card Dealer</h1>
                //  <img src=${image} alt=${name}/>
                //        <p> ${this.name} </p>

                //        </div>`,


           `  <div className='Card'>
                       <img style = ${{transform: this._transform}} src=${image} alt=${name}/>
                       <p>${value} of ${name}</p>
               </div>`
                       )



                    } catch (err){
                        alert(err);
                    }

                }

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    getCard();
})


// retuning a card



