import { $player } from '../dom/dom.mjs';


export const row = 20;
export const column = 10;

export function makeRows() {
    const tr = document.createElement("tr");
    for (let j = 0; j < column; j++) {
        const td = document.createElement("td");
        tr.append(td);
    }
    $player.prepend(tr); // 한 줄 채워지면, 삭제 후 위에 새 줄 생성
}

