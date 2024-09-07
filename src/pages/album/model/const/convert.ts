export function convertMillisecondsToMinutes(ms: number): {minutes: number, seconds: number | string} {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.round((ms % 60000) / 1000)

    if (seconds <= 9) {
        const sec = "0" + String(seconds);
        return {minutes, seconds: sec}
    } else if (seconds == 60) {
        return {minutes: minutes + 1, seconds: "00"}
    }
    
    return {minutes, seconds}
}