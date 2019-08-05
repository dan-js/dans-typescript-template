import { hello } from '.';

describe('index function', () => {
    it('should greet the user', () => {
        expect(hello('Dan')).toEqual('Hello Dan!');
    });
});
