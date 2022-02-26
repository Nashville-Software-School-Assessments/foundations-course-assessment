import studentCode from "../../src/scripts/main.js"


const {
    accessTitleAndReturn,
    addAndReturnSum,
    isBargainBook } = studentCode


const taiko = { id: 1, title: "Taiko", author: "Eiji Yoshikawa", price: 19.00, yearPublished: 1998 }
const quicksilver = { id: 2, title: "Quicksilver", author: "Neal Stephenson", price: 34.00, yearPublished: 2003 }

describe("Price sum", () => {

    test('addAndReturnSum function is defined', () => {
        expect(addAndReturnSum).toBeDefined();
    });

    test('addAndReturnSum function returns something', () => {
        expect(addAndReturnSum(taiko, quicksilver)).toBeDefined();
    });

    test('addAndReturnSum calculates sum correctly', () => {
        expect(addAndReturnSum(taiko, quicksilver)).toBe(53);
    });
})

describe("Book title", () => {
    test('accessTitleAndReturn function is defined', () => {
        expect(accessTitleAndReturn).toBeDefined();
    });

    test('accessTitleAndReturn function returns something', () => {
        expect(accessTitleAndReturn(quicksilver)).toBeDefined();
    });

    test('accessTitleAndReturn returns title value', () => {
        const title = accessTitleAndReturn(quicksilver)
        expect(title).toBe("Quicksilver");
    });
});

describe("Bargain books", () => {
    test('isBargainBook function is defined', () => {
        expect(isBargainBook).toBeDefined();
    });

    test('isBargainBook function returns something', () => {
        expect(isBargainBook(quicksilver)).toBeDefined();
    });

    test('Checks for non-bargain book', () => {
        const bargain = isBargainBook(quicksilver)
        expect(bargain).toBe(false);
    });

    test('Checks for bargain book', () => {
        const bargain = isBargainBook(taiko)
        expect(bargain).toBe(true);
    });
});