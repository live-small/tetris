import { $gameOver, score } from '../dom/dom.mjs';

const gameOver_message = $gameOver.childNodes[1];
const replayBtn = $gameOver.childNodes[3];

export function gameOver() {
    gameOver_message.innerText = `Game Over. 
    your score is ${score}.`;
    $gameOver.style.display = 'flex';
}

