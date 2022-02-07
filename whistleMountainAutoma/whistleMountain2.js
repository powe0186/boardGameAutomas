// Create variables to hold elements on the screen.

//button
const button = document.getElementById("button");

// Card Pics.
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const message = document.getElementById("message");

// Create Arrays to hold cards in card1, card2, and card3.
var inPlay1 = [];
var inPlay2 = [];
var inPlay3 = [];

// Keep track of game state
var gameStarted = false;
var readyForRoll = true;
var currentDieRoll;

//Function that will shuffle original Deck
function shuffleDeck(deck) {
    //Randomly removes cards from outlawCard deck using Fisher-Yates shuffle.
    let m = deck.length;
    let lastCard;
    let randomCardNumber;

    while (m) {
        //Pick a random card.
        randomCardNumber = Math.floor(Math.random() * m--);

        //swap the random card with the current card (starting with last an moving toward first)
        lastCard = deck[m];
        deck[m] = deck[randomCardNumber];
        deck[randomCardNumber] = lastCard;
    }
    return deck;
}

// Function that deals the first three cards to the card board
function deal3Cards() {
    //Deals the first 3 outlaw cards to the three spots (12, 34, and 56).
    inPlay1.push(outlawCardDeck.shift());
    inPlay2.push(outlawCardDeck.shift());
    inPlay3.push(outlawCardDeck.shift());
    card1.src = inPlay1[0].file;
    card2.src = inPlay2[0].file;
    card3.src = inPlay3[0].file;
}

function buttonClicked() {
    // Decides if the initial cards have been dealt - if not, deals cards
    // and sets gameStarted to True
    if (gameStarted) {
        if (readyForRoll) { 
            //Rolls a die and highlights a card 
            currentDieRoll = rollDie();
            button.innerHTML = "<p>Click to deal new card.</p>";
            readyForRoll = false;
        } else {
            //Deals a new card.
            button.innerHTML = '<p>Click to Roll Die</p>';
            card1.style.border = 'none';
            card2.style.border = 'none';
            card3.style.border = 'none';
            //Deals a new card in the correct spot.
            if (currentDieRoll < 3) {
                inPlay1.unshift(outlawCardDeck.shift());
                card1.src = inPlay1[0].file;
            } else if (currentDieRoll < 5) {
                inPlay2.unshift(outlawCardDeck.shift());
                card2.src = inPlay2[0].file;
            } else {
                inPlay3.unshift(outlawCardDeck.shift());
                card3.src = inPlay3[0].file;
            }
            readyForRoll = true;
            message.innerHTML = `${outlawCardDeck.length} cards left in the deck.`;
            if (outlawCardDeck.length === 0) {
                gameStarted = false;
                message.style.color = "red";
                message.innerHTML = "Game Over";
                button.innerHTML = "<p>Click for a NEW GAME</p>";
                resetDeck(outlawCardDeck, inPlay1, inPlay2, inPlay3);
                inPlay1 = [];
                inPlay2 = [];
                inPlay3 = [];
            }
        }
    } else {
        gameStarted = true;
        shuffleDeck(outlawCardDeck);
        deal3Cards();
        button.innerHTML = '<p>Click to Roll Die</p>';
        message.innerText = `${outlawCardDeck.length} cards left in the deck.`;
        message.style.display = "block";
        message.style.color = "black"
    }
}

// Rolls the die
function rollDie() {
    // Rolls a 6 sided die.
    const dieRoll = Math.floor(Math.random() * 6 + 1);
    console.log(outlawCardDeck.length);
    var cardSelected;
    if (dieRoll < 3) {
        cardSelected = document.getElementById(`card1`);
    } else if (dieRoll < 5) {
        cardSelected = document.getElementById(`card2`);
    } else {
        cardSelected = document.getElementById(`card3`);
    }
    cardSelected.style.border = 'solid 0.5em #fde073';
    
    // Show die Roll on picture of die.
    document.getElementById('die-pic').src = `images/Die${dieRoll}.PNG`;
    return dieRoll;
}


function resetDeck(mainDeck, deck1, deck2, deck3) {
    //put all cards back in the outlaw deck.
    mainDeck.push(...deck1, ...deck2, ...deck3)
}

//add event listener to the button
button.addEventListener("click", buttonClicked);