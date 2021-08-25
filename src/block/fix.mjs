import { controlClass } from '../dom/dom.mjs';
import { blockState } from './state.mjs';
import { makeBlock } from './render.mjs';


export function fixBlock() {
    controlClass(blockState.moving, blockState.moving, blockState.fix);
    /* moving 제거확인 테스트 코드 */
    // console.log($player.querySelectorAll('.moving'));
    makeBlock();
}
