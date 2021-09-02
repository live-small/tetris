import { removeTable, initScore } from '../dom/dom.mjs';
import { startTetris } from './main.mjs';

export function init() {
    removeTable();
    initScore();
    startTetris();
}