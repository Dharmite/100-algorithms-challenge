export function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].split(',')[0].length + 2);

    let listWithBorders = picture.flatMap((element) => {
        return element.split(',').map((value) => `*${value.trim()}*`);
    });

    listWithBorders.unshift(wall);
    listWithBorders.push(wall);

    return listWithBorders;
}

// console.log(addBorder(['abc', 'ded']));
// console.log(addBorder(['abc, ded']));
