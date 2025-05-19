import { midpoint } from '../src/midpoint';

describe('midpoint', () => {
    it('should return the correct midpoint', () => {
        const result = midpoint(30, -90, 40, -80);
        expect(result).toEqual({
            latitude: 35.102315,
            longitude: -85.307078,
        });
    });

    it('should throw TypeError for invalid input types', () => {
        // @ts-expect-error
        expect(() => midpoint('a', -90, 40, -80)).toThrow(TypeError);
    });

    it('should throw RangeError for out of bounds coordinates', () => {
        expect(() => midpoint(95, -90, 40, -80)).toThrow(RangeError);
    });
});
