import Blocks from '../block/block.mjs';
import { tempBlock } from '../block/state.mjs';
import { renderBlock } from '../block/render.mjs';


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