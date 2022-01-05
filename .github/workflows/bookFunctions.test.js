const { accessTitleAndReturn, addAndReturnSum } = require("../../main.js")


const taiko = { id: 1, title: "Taiko", author: "Eiji Yoshikawa", price: 19.00, yearPublished: 1998 }
const quicksilver = { id: 2, title: "Quicksilver", author: "Neal Stephenson", price: 34.00, yearPublished: 2003 }


test('Calculates sum', () => {
    expect(addAndReturnSum(taiko, quicksilver)).toBe(53);
});

test('Returns title', () => {
    const title = accessTitleAndReturn(quicksilver)
    expect(title).toBe("Quicksilver");
});
