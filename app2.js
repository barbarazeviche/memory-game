//this makes it asynchronous
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            //name is relative path
            name: "fries",
            img:"images/fries.png"
        },
        {
            name:"fries",
            img:"images/fries.png"
        },
        {
            name:"cheeseburger",
            img:"images/cheeseburger.png"
        },
        {
            name:"cheeseburger",
            img:"images/cheeseburger.png"
        },
        {
            name:"hotdog",
            img:"images/hotdog.png"
        },
        {
            name:"hotdog",
            img:"images/hotdog.png"
        },
        {
            name:"ice-cream",
            img:"images/ice-cream.png"
        },
        {
            name:"ice-cream",
            img:"images/ice-cream.png"
        },
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
        {
            name:"pizza",
            img:"images/pizza.png"
        },
        {
            name:"pizza",
            img:"images/pizza.png"
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())
    // selecting all class grid
    const grid = document.querySelector(".grid");
    //Score display (html span element)
    const resultDisplay = document.querySelector("#result");
    //empty array
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board. For each element, we create an image element
    function createBoard() {
        for(let i=0; i < cardArray.length; i++){
            const card = document.createElement("img")
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }    
    }

    //check for matches
    function checkForMatch(){
        let cards = document.querySelectorAll("img")
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0]=== cardsChosen[1]){
           alert('You found a match') 
            cards[optionOneId].setAttribute("src", "images/white.png")
            cards[optionTwoId].setAttribute("src", "images/white.png")
            cardsWon.push(cardsChosenId)
        }
        else{
            cards[optionOneId].setAttribute("src", "images/blank.png")
            cards[optionTwoId].setAttribute("src", "images/blank.png")
            alert("Sorry, try again")
        }
        //in any case, we still want both our arrays to clear at the end 
        cardsChosen = []
        cardsChosenId = []
        //now we want to show score,exactly the same ammount of the number of cards as the ammount of cards we have passed in our array, one point for each match(2 cards)
        resultDisplay.textContent = cardsWon.length;
        //we know we've won once the number of cards won equals to half of the number of cardArray
        if(cardsWon.length === cardArray/2){
            resultDisplay.textContent = "Congratulations, You won"
        }

    }
    //flip your card
    function flipCard () {
        //we go and get the attribute set just above in function createBoard()
        let cardId = this.getAttribute("data-id") 
        //once this card is pushed, if cardId is 4, it will match the 5th card in the array, then we get its name.
        cardsChosen.push(cardArray[cardId].name)
        //we will push the id number into a separate array
        cardsChosenId.push(cardId)
        //this allows us to setAttribute
        this.setAttribute("src", cardArray[cardId].img)
        if(cardsChosen.length ===2)
        {
            //this will give us some buffertime
            setTimeout(checkForMatch, 500)
        }
    } 

    createBoard()
})