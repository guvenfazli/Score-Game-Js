let stats = {
  Icardi: 0,
  Zaha: 0,
  Ziyech: 0,
  Sanchez: 0,
  'Away Score': 0,
  Saves: 0
}

function randomScoreGoal() {
  const randomNumber = Math.random();
  let randomPlayer = randomNumber;

  if(randomPlayer > 0 && randomPlayer < 1/4) {
    stats.Icardi += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/icardi.webp" alt="">`
  } else if(randomPlayer > 1/4 && randomPlayer < 2/4) {
    stats.Zaha += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/zaha.jpeg" alt="">`
  } else if(randomPlayer > 2/4 && randomPlayer < 3/4) {
    stats.Ziyech += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/ziyech.webp" alt="">`
  } else if(randomPlayer > 3/4 && randomPlayer < 1) {
    stats.Sanchez += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/sanchez.jpg" alt="">`
  }

  document.querySelector('.js-stats')
    .innerHTML = `Icardi: ${stats.Icardi} Zaha: ${stats.Zaha} Ziyech: ${stats.Ziyech} Sanchez: ${stats.Sanchez}`

  
}

function randomSaveGoal(){
  const randomNumber = Math.random();
  const buttonElement = document.querySelector('.js-button-5')
  let saveGoal = randomNumber;


  if(saveGoal < 0.5) {
    stats['Away Score'] += 1
    buttonElement.classList.remove('save-goal')
    buttonElement.classList.add('own-goal')
    document.querySelector('.js-text-save')
      .innerHTML = `Muslera could not get this one.`

    document.querySelector('.js-text-save-pic')
      .innerHTML = `<img src="images/muslera-gol.png" alt="">`
  } else if(saveGoal > 0.5) {
    stats.Saves += 1
    buttonElement.classList.remove('own-goal')
    buttonElement.classList.add('save-goal')
    document.querySelector('.js-text-save')
      .innerHTML = `An amazing save from Muslera!`
    
    document.querySelector('.js-text-save-pic')
      .innerHTML = `<img src="images/muslera-save.jpg" alt="">`
  }

  console.log(stats)
}

function playerGoal(player, selector){
  if(player === 'Icardi') {
    
    stats.Icardi += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/${player}.webp" alt="">`
  } else if(player === 'Zaha') {
    
    stats.Zaha += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/${player}.jpeg" alt="">`
  } else if(player === 'Ziyech') {
    
    stats.Ziyech += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/${player}.webp" alt="">`
  } else if(player === 'Sanchez') {
    
    stats.Sanchez += 1
    document.querySelector('.js-text-goal-player')
      .innerHTML = `<img src="images/${player}.jpg" alt="">`
  } 

  const buttonElement = document.querySelector(selector)
  

  if(!buttonElement.classList.contains('goal')){
    buttonElement.classList.add('goal')
    buttonElement.innerHTML = `Goal!`
    document.querySelector('.js-text-goal')
      .innerHTML = `An amazing goal! The scorer is ${player}!`
  } else {
    buttonElement.classList.remove('goal')
    buttonElement.innerHTML = player
    document.querySelector('.js-text-goal')
      .innerHTML = ``
    
    document.querySelector('.js-text-goal-player')
      .innerHTML = ``
  }



 

  document.querySelector('.js-stats')
    .innerHTML = `Icardi: ${stats.Icardi} Zaha: ${stats.Zaha} Ziyech: ${stats.Ziyech} Sanchez: ${stats.Sanchez}`

  console.log(stats)


}

function previousGoal(){
  const previousButton = document.querySelector('.goal')

  if(previousButton) {
    previousButton.classList.remove('goal')
  }
}

document.querySelector('.js-stats')
.innerHTML = `Icardi: ${stats.Icardi} Zaha: ${stats.Zaha} Ziyech: ${stats.Ziyech} Sanchez: ${stats.Sanchez}`
