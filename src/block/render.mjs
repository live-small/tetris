import Blocks from '../block/block.mjs';
import { getRandom } from './random.mjs'


export function makeBlock() {
    const kindOfBlock = Object.keys(Blocks);
    const randomIdx = getRandom(kindOfBlock.length);
    originBlock.kind = kindOfBlock[randomIdx];
    originBlock.dir = getRandom(Blocks[originBlock.kind].length);
    originBlock.height = 0;
    originBlock.width = 3;
    renderBlock();
}

