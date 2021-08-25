export const originBlock = {
    kind: '',
    dir: 0,
    height: 0,
    width: 0,
}
export let tempBlock = {};
export const blockState = {
    moving: 'moving',
    fix: 'fix',
}

export function changeTempBlock(val) {
    tempBlock = { ...val };
}