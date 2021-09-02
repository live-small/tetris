import Blocks from '../block/block.mjs';
// import { score } from '../dom/dom.mjs';
import { tempBlock } from '../block/state.mjs';
import { renderBlock } from '../block/render.mjs';


let movingSpeed = 800;
export let timerId = 0;

export function changeDirection() {
    const DirMaxIdx = Blocks[tempBlock.kind].length - 1;
    if (tempBlock.dir === DirMaxIdx) { tempBlock.dir = 0; }
    else { tempBlock.dir++; }
    renderBlock();
}

export function moveBlock(property, amount, keyName) {
    tempBlock[property] += amount;
    renderBlock(keyName);
}

export function bindingSpeed(speed = movingSpeed) {
    clearTimeout(timerId);
    timerId = setTimeout(function repeat() {
        moveBlock('height', 1, 'ArrowDown');
        // if (score !== 0 && score % 5 === 0) { speed = fasterSpeed(); }
        timerId = setTimeout(repeat, speed);
    }, speed);
}

// export function fasterSpeed() {
//     return movingSpeed = movingSpeed > 200 ? movingSpeed -= 100 : movingSpeed;
// }

/* keyboard control */
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
