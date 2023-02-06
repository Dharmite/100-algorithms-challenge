function validMinutes(minutes: string): boolean {
    console.log(minutes);
    const mins = Number(minutes);
    if (mins > 59 || mins < 0) {
        return false;
    }

    return true;
}

function validHours(hours: string): boolean {
    const hr = Number(hours);
    if (hr > 23 || hr < 0) {
        return false;
    }

    return true;
}

export function validTime(time: string): boolean {
    const [hours, minutes] = time.split(':');

    if (!validMinutes(minutes) || !validHours(hours)) {
        return false;
    }

    return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
