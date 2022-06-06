jest.mock('lodash');
const _ = require('lodash');

jest.mock('../shopping', () => ({
    ...jest.requireActual('../shopping'),
    addOne: jest.fn(),
}));

const shopCode = require('../shopping');

//To clear all mocks after tests
afterEach(() => {
    jest.clearAllMocks();
});

//Error says shopCode.onAdd is not a function 
describe('Test Case for Shopping', () => {
    it('Test Case 1: mock addOne to always return 1 for onAdd', () => {
        shopCode.addOne = jest.fn().mockReturnValue(0);
        const result = shopCode.onAdd(1);
        expect(result).toBe(1);
    }); 
});