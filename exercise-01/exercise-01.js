const arr = [5, 9, 6, 8, 4, 6];

let temp = 0;

const total = arr.reduce((prev, item) => (temp = prev + item));
