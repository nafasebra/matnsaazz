import { DataType } from "@/data";

export function CopyText(value: string) {
    navigator.clipboard.writeText(value);
}

export function ShuffleArray(arr: DataType[]) {
    return arr.length && arr[Math.floor(Math.random() * arr.length)];
}
