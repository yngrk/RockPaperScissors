let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

const startBtn = document.querySelector('.startBtn'); 

function cleanWelcomeScreen() {
    const element = document.querySelectorAll('.welcome');
    const bod = document.querySelector('body');
    element.forEach(elem => {
        elem.remove();
    });
}

function createGameUI() {
    // round div
    const round = document.createElement('div');
    round.classList.add('round');
    round.textContent = `Round ${roundNum}`;
    document.body.appendChild(round);

    // score div
    const score = document.createElement('div');
    score.classList.add('score');

    const scorePlayers = document.createElement('div');
    scorePlayers.classList.add('players');

    const scorePlayersCPU = document.createElement('div');
    const scorePlayersPlayer = document.createElement('div');
    scorePlayersCPU.textContent = 'CPU';
    scorePlayersPlayer.textContent = 'PLAYER';
    scorePlayers.appendChild(scorePlayersCPU);
    scorePlayers.appendChild(scorePlayersPlayer);

    score.appendChild(scorePlayers);

    const scorePoints = document.createElement('div');
    scorePoints.classList.add('points');
    scorePoints.textContent = `${computerScore} : ${playerScore}`;
    score.appendChild(scorePoints);

    document.body.appendChild(score)

    // div options
    const options = document.createElement('div');
    options.classList.add('options');

    const optionsRock = document.createElement('button');
    const optionsPaper = document.createElement('button');
    const optionsScissors = document.createElement('button');
    optionsRock.classList.add('rock');
    optionsPaper.classList.add('paper');
    optionsScissors.classList.add('scissors');
    optionsRock.textContent = 'ROCK';
    optionsPaper.textContent = 'PAPER';
    optionsScissors.textContent = 'SCISSORS';

    options.appendChild(optionsRock);
    options.appendChild(optionsPaper);
    options.appendChild(optionsScissors);

    document.body.appendChild(options);

    // div log
    const log = document.createElement('div');
    const logContent = document.createElement('div');
    log.classList.add('log');
    logContent.classList.add('content');
    
    logContent.textContent = 'Game start... Round 1';

    log.appendChild(logContent);

    document.body.appendChild(log);

    optionsRock.addEventListener('click', playRock);
    optionsPaper.addEventListener('click', playPaper);
    optionsScissors.addEventListener('click', playScissors);
}

function computerPlay() {
    const choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1: 
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

function incrementComputerScore() {
    const newScore = document.querySelector('.points');
    computerScore++;
    newScore.textContent = `${computerScore} : ${playerScore}`;
}

function incrementPlayerScore() {
    const newScore = document.querySelector('.points');
    playerScore++;
    newScore.textContent = `${computerScore} : ${playerScore}`;
}

function incrementRoundNum() {
    const newRound = document.querySelector('.round');
    roundNum++;
    newRound.textContent = `Round ${roundNum}`;
}

function playRock() {
    const computer = computerPlay();
    const log = document.querySelector('.content');
    const newLog = document.createElement('p');

    let win = false;
    switch (computer) {
        case 'rock':
            newLog.textContent = `It's a Tie!`;
            log.appendChild(newLog);
            incrementComputerScore();
            incrementPlayerScore();
            incrementRoundNum();
            break;
        case 'paper':
            newLog.textContent = `You lose! ${computer} beats Paper.`;
            log.appendChild(newLog);
            incrementComputerScore();
            incrementRoundNum();
            break;
        case 'scissors':
            newLog.textContent = `You Win! Rock beats ${computer}.`;
            log.appendChild(newLog);
            incrementPlayerScore();
            incrementRoundNum();
    }
}

function playPaper() {
    const computer = computerPlay();
    const log = document.querySelector('.content');
    const newLog = document.createElement('p');

    let win = false;
    switch (computer) {
        case 'paper':
            newLog.textContent = `It's a Tie!`;
            log.appendChild(newLog);
            incrementComputerScore();
            incrementPlayerScore();
            incrementRoundNum();
            break;
        case 'scissors':
            newLog.textContent = `You lose! ${computer} beats Paper.`;
            log.appendChild(newLog);
            incrementComputerScore();
            incrementRoundNum();
            break;
        case 'rock':
            newLog.textContent = `You Win! Rock beats ${computer}.`;
            log.appendChild(newLog);
            incrementPlayerScore();
            incrementRoundNum();
    }
}

function playScissors() {
    const computer = computerPlay();
    const log = document.querySelector('.content');
    const newLog = document.createElement('p');

    let win = false;
    switch (computer) {
        case 'scissors':
            newLog.textContent = `It's a Tie!`;
            log.appendChild(newLog);
            incrementComputerScore();
            incrementPlayerScore();
            incrementRoundNum();
            break;
        case 'rock':
            newLog.textContent = `You lose! ${computer} beats Paper.`;
            log.appendChild(newLog);
            incrementComputerScore();
            incrementRoundNum();
            break;
        case 'paper':
            newLog.textContent = `You Win! Rock beats ${computer}.`;
            log.appendChild(newLog);
            incrementPlayerScore();
            incrementRoundNum();
    }
}

startBtn.addEventListener('click', () => {
    cleanWelcomeScreen();
    createGameUI();
});
