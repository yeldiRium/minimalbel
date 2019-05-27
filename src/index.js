const fruit = ['apple', 'banana', 'citrus', 'orange'];

const food = [
    ...fruit,
    'bread',
    'nuts'
];

for (let elem of food) {
    console.log(elem);
}
