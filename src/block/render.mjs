import Blocks from '../block/block.mjs';
import { getRandom } from './random.mjs'
import { fixBlock } from './fix.mjs';
import { bindingSpeed } from '../event/event.mjs';
import { tempBlock, originBlock, blockState, changeTempBlock } from './state.mjs';
import { $player, searchClass, checkAvailable, controlClass } from '../dom/dom.mjs';


export function makeBlock() {
    const kindOfBlock = Object.keys(Blocks);
    const randomIdx = getRandom(kindOfBlock.length);
    originBlock.kind = kindOfBlock[randomIdx];
    originBlock.dir = getRandom(Blocks[originBlock.kind].length);
    originBlock.height = 0;
    originBlock.width = 3;
    changeTempBlock(originBlock);
    // tempBlock = { ...originBlock }; // 모듈시스템때문에 변수가 상수로 작동하는 에러 ** 
    bindingSpeed();
    renderBlock();
}

export function renderBlock(keyName = '') {
    const { kind, dir, height, width } = tempBlock;
    /* 이전 렌더링 흔적을 지움(블록겹침 방지) */
    if (searchClass(blockState.moving)) {
        controlClass(blockState.moving, [blockState.moving, kind]);
    }

    const renderFlag = Blocks[kind][dir].every((pos) => {
        const [h, w] = pos;
        const y = height + h;
        const x = width + w;
        const selectRows = $player.childNodes[y];
        const targetBlock = selectRows ? selectRows.childNodes[x] : null;
        if (!checkAvailable(targetBlock)) {
            // 정상작동 불가능할 경우 
            changeTempBlock(originBlock); // 이전값으로 돌리기
            // tempBlock = { ...originBlock }; 
            setTimeout(() => {
                renderBlock();
                if (keyName === 'ArrowDown') {
                    fixBlock();
                }
            }, 0);
            return false;
        }
        targetBlock.classList.add(kind, blockState.moving);
        return true; // 정상작동 한 경우 
    })

    /* 정상작동하면, 원본 업데이트 */
    if (renderFlag) {
        originBlock.width = width;
        originBlock.height = height;
        originBlock.dir = dir;
    }
}
