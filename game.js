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
  } else if(randomPlayer > 1/4 && randomPlayer < 2/4) {
    stats.Zaha += 1
  } else if(randomPlayer > 2/4 && randomPlayer < 3/4) {
    stats.Ziyech += 1
  } else if(randomPlayer > 3/4 && randomPlayer < 1) {
    stats.Sanchez += 1
  }

  console.log(stats)
}

function randomSaveGoal(){
  const randomNumber = Math.random();
  let saveGoal = randomNumber;

  if(saveGoal < 0.5) {
    stats['Away Score'] += 1
  } else if(saveGoal > 0.5) {
    stats.Saves += 1
  }

  console.log(stats)
}

function playerGoal(player, selector){
  if(player === 'Icardi') {
    stats.Icardi += 1
  } else if(player === 'Zaha') {
    stats.Zaha += 1
  } else if(player === 'Ziyech') {
    stats.Ziyech += 1
  } else if(player === 'Sanchez') {
    stats.Sanchez += 1
  }

  const buttonElement = document.querySelector(selector)

  if(!buttonElement.classList.contains('goal')){
    buttonElement.classList.add('goal')
    buttonElement.innerHTML = `Goal!`
  } else {
    buttonElement.classList.remove('goal')
    buttonElement.innerHTML = player
  }

  console.log(stats)
}