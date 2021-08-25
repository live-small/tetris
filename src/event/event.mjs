import Blocks from '../block/block.mjs';
import { tempBlock } from '../block/state.mjs';
import { renderBlock } from '../block/render.mjs';


const movingSpeed = 800;
let timerId = 0;

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
    clearInterval(timerId);
    timerId = setTimeout(function repeat() {
        moveBlock('height', 1, 'ArrowDown');
        timerId = setTimeout(repeat, speed);
    }, speed);
}
