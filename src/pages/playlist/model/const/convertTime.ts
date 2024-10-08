export function convertTime(ms: number): {hours?: number, minutes?: number} {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);

    return {hours, minutes}
}