import white from './images/white.png'
import blank from './images/blank.png'
import postgresql from "./images/postgresql.png"
import express from './images/express.png'
import sequelize from './images/sequelize.png'
import react from './images/react.png'
import sql from './images/sql.png'
import redux from './images/redux.png'
import v8 from './images/v8.png'
import ts from './images/ts.png'
import style from './Memory2.module.css'
import { Box, HStack } from '@chakra-ui/react'

const Memory2 = () =>{
  // document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'postgresql',
        img: postgresql
      },
      {
        name: 'express',
        img: express
      },
      {
        name: 'sequelize',
        img: sequelize
      },
      {
        name: 'react',
        img: react
      },
      {
        name: 'sql',
        img: sql
      },
      {
        name: 'redux',
        img: redux
      },
      {
        name: 'v8',
        img: v8
      },
      {
        name: 'typescript',
        img: ts
      },
      {
        name: 'postgresql',
        img: postgresql
      },
      {
        name: 'express',
        img: express
      },
      {
        name: 'sequelize',
        img: sequelize
      },
      {
        name: 'react',
        img: react
      },
      {
        name: 'sql',
        img: sql
      },
      {
        name: 'redux',
        img: redux
      },
      {
        name: 'v8',
        img: v8
      },
      {
        name: 'typescript',
        img: ts
      },
    ]
      
    cardArray.sort(() => 0.5 - Math.random())
  
    const resultDisplay = ()=>{return (document.querySelector('#result'))}
    const tryDisplay = ()=>{return (document.querySelector('#try'))}
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let tryArray = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', blank)
        card.setAttribute('data-id', i)
        card.setAttribute('id', "cards")
        card.addEventListener('click', flipCard)
        document.querySelector('#grid').appendChild(card)
      }
      const cards = document.querySelectorAll('#cards')
      if( cards.length !== 16){
      window.location.reload();
      }
    }


    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('#cards')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if( cards.length=== 12){
        
      }

      if(optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', blank)
        cards[optionTwoId].setAttribute('src', blank)
        // alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        // alert('You found a match')
        cards[optionOneId].setAttribute('src', white)
        cards[optionTwoId].setAttribute('src', white)
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        tryArray.push(tryArray)
      } else {
        cards[optionOneId].setAttribute('src', blank)
        cards[optionTwoId].setAttribute('src', blank)
        tryArray.push(tryArray)

        // alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay().textContent = cardsWon.length
      tryDisplay().textContent = tryArray.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
    window.setTimeout(createBoard, 600)   
    
  // })

  const restart= (event)=>{
    window.location.reload()
  };
      
  return(
    <div className={style.main}>
      <div className={style.buttons}>
        {/* <button className={style.button} onClick={restart}>Start New Game</button> */}
        <button className={style.button} onClick={restart}>restart</button>
      </div>

      <Box className={style.points}>
        <HStack textAlign="center" borderRight="1px solid black" w="85%" justify="space-between">
          <h3>Score: <span id="result">0</span></h3>
        </HStack>
        <HStack w="15%" justify="center" textAlign="center">  
          <h3>Try: <span id="try">0</span></h3>
        </HStack>
      </Box>
      
      <Box 
      id="grid"
      w={["357px", "527px"]}>
      
      </Box>

    </div>        
  )

}

export default Memory2