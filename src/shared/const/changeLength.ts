export function changeLength (name: string, length: number, currentLength: number): string {
    const l = name.length > length ? name.slice(0, currentLength) + "..." : name;
    return l;
}