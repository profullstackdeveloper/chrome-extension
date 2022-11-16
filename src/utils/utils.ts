export const formatDuration = (duration : number) : string => {
    let result = '';
    const hour = Math.floor(duration / 3600);
    result += hour >= 10 ? hour : '0' + hour;

    result += ':';
    const minute = Math.floor(Math.floor((duration % 3600) / 60));
    result += minute >= 10 ? minute : '0' + minute;

    result += ':';
    const second = duration % 60;
    result += second >= 10 ? second : '0' + second;

    return result;
};

export const sum = (array: Array<number>) : number => {
    let sum = 0;
    array.forEach(item => sum += item);
    return sum;
}

