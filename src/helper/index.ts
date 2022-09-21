export function CopyText(value: string) {
    navigator.clipboard.writeText(value);
}

export function ShuffleArray(arr: string[]) {
    return arr.length && arr[Math.floor(Math.random() * arr.length)];
}
