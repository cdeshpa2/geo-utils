import { initialBearing } from '../src/bearing';

describe('initialBearing', () => {
    it('should calculate the correct initial bearing', () => {
        const bearing = initialBearing(30, -90, 40, -80);
        expect(Math.round(bearing)).toBe(37); // Corrected value
    });

    it('should return 0 when moving directly north', () => {
        expect(initialBearing(10, 0, 20, 0)).toBeCloseTo(0, 1);
    });

    it('should return 180 when moving directly south', () => {
        expect(initialBearing(20, 0, 10, 0)).toBeCloseTo(180, 1);
    });

    it('should throw for invalid coordinate types', () => {
        // @ts-expect-error
        expect(() => initialBearing('a', 0, 0, 0)).toThrow(TypeError);
    });

    it('should throw for out-of-range values', () => {
        expect(() => initialBearing(100, 0, 0, 0)).toThrow(RangeError);
    });
});
