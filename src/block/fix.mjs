import { $player, controlClass, updateScore } from '../dom/dom.mjs';
import { blockState } from './state.mjs';
import { makeBlock } from './render.mjs';
import { makeRows, column } from '../player/table.mjs';


export function fixBlock() {
    controlClass(blockState.moving, blockState.moving, blockState.fix);
    /* moving 제거확인 테스트 코드 */
    // console.log($player.querySelectorAll('.moving'));
    checkFullLine();
    makeBlock();
}


export function checkFullLine() {
    $player.childNodes.forEach((row, idx) => {
        const flags = [];
        row.childNodes.forEach((td) => {
            flags.push(td.classList.contains(blockState.fix));
        })
        if (flags.filter((flag) => flag).length === column) {
            updateScore();
            $player.deleteRow(idx);
            makeRows();
        }
    })
}
