import { row, makeRows } from './table.mjs';
import { $score, score, $startBtn, $gameStart, $gapControl } from '../dom/dom.mjs';
import { makeBlock } from '../block/render.mjs';



// Executor 
$startBtn.addEventListener('click', () => {
    $gameStart.childNodes.forEach(elem => {
        elem.nodeType !== 3 ? elem.style.display = 'none' : ''; // nodeType = 3(text)
    });
    $gapControl.style.display = 'flex';
    startTetris();
});

export function startTetris() {
    $score.innerText = score;
    for (let i = 0; i < row; i++) {
        makeRows();
    }
    makeBlock();
}


