import { row, makeRows } from './table.mjs';
import { $score, score } from '../dom/dom.mjs';
import { makeBlock } from '../block/render.mjs';
import { changeDirection, moveBlock } from '../event/event.mjs';



// Executor 
startTetris();

function startTetris() {
    $score.innerText = score;
    for (let i = 0; i < row; i++) {
        makeRows();
    }
    makeBlock();
}

// event 
document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            return moveBlock('width', -1, e.code);
        case "ArrowDown":
            return moveBlock('height', 1, e.code);
        case "ArrowRight":
            return moveBlock('width', 1, e.code);
        case "ArrowUp":
            return changeDirection();
        default:
            alert(`This key is not available, ${e.code}`);
        // 1초간 보였다가 사라지게 구현** -> 사용자 불편 ux
    }
});

