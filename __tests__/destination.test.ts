import { destinationPoint } from '../src/destination';

describe('destinationPoint', () => {
    it('should compute destination 100 km north', () => {
        const result = destinationPoint(0, 0, 100, 0);
        expect(result.latitude).toBeCloseTo(0.899, 3);
        expect(result.longitude).toBeCloseTo(0, 3);
    });

    it('should compute destination 100 km east', () => {
        const result = destinationPoint(0, 0, 100, 90);
        expect(result.latitude).toBeCloseTo(0, 3);
        expect(result.longitude).toBeCloseTo(0.899, 3);
    });

    it('should support miles as unit', () => {
        const result = destinationPoint(0, 0, 62.14, 0, 'miles'); // ~100km
        expect(result.latitude).toBeCloseTo(0.899, 3);
    });

    it('should throw on invalid coordinate type', () => {
        // @ts-expect-error
        expect(() => destinationPoint('abc', 0, 100, 90)).toThrow(TypeError);
    });

    it('should throw on negative distance', () => {
        expect(() => destinationPoint(0, 0, -5, 90)).toThrow(TypeError);
    });

    it('should throw on invalid bearing type', () => {
        // @ts-expect-error
        expect(() => destinationPoint(0, 0, 100, 'north')).toThrow(TypeError);
    });
});
