import { blockState } from '../block/state.mjs';


export const $player = document.getElementById('player');
export const $score = document.getElementById('score');
export const $startBtn = document.getElementById('start');
export const $gameStart = document.getElementById('gameStart');
export const $gameOver = document.getElementById('gameOver');
export const $gapControl = document.getElementById('gapControl')
export let score = 0;

export function searchClass(target) {
    return $player.querySelector(`.${target}`) ? true : false;
}

export function checkAvailable(target) {
    if (!target || target.classList.contains(blockState.fix)) {
        return false;
    }
    return true;
}

export function controlClass(target, deleteElem, addElem = null) {
    $player.querySelectorAll(`.${target}`).forEach((v) => {
        if (typeof deleteElem === 'object') {
            v.classList.remove(...deleteElem);
        } else {
            v.classList.remove(deleteElem);
        }
        if (addElem) {
            v.classList.add(addElem);
        }
    })
}

export function initScore() {
    score = 0;
}

export function updateScore() {
    $score.innerText = ++score;
}

export function removeTable() {
    $player.innerHTML = "";
}