export function convertMillisecondsToMinutes(ms: number): {minutes: number, seconds: number | string} {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.round((ms % 60000) / 1000)

    if (seconds <= 9) {
        const sec = String(seconds) + "0";
        return {minutes, seconds: sec}
    }
    
    return {minutes, seconds}
}