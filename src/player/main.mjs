import { row, makeRows } from './table.mjs';
import { $score, score, $startBtn, $gameStart } from '../dom/dom.mjs';
import { makeBlock } from '../block/render.mjs';
import { changeDirection, moveBlock, bindingSpeed } from '../event/event.mjs';



// Executor 
$startBtn.addEventListener('click', () => {
    $gameStart.childNodes.forEach(elem => {
        elem.nodeType !== 3 ? elem.style.display = 'none' : ''; // nodeType = 3(text)
    });
    startTetris();
});

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
        case "Space":
            return bindingSpeed(5);
        default:
            alert(`This key is not available, ${e.code}`);
        // 1초간 보였다가 사라지게 구현** -> 사용자 불편 ux
    }
});

