import { row, makeRows } from './table.mjs';
import { $score, score } from '../dom/dom.mjs';

// Executor 
startTetris();

function startTetris() {
    $score.innerText = score;
    for (let i = 0; i < row; i++) {
        makeRows();
    }
}
