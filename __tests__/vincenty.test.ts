import { vincentyDistance } from '../src/vincenty';

describe('vincentyDistance', () => {
    it('should calculate accurate distance between two points', () => {
        const result = vincentyDistance(48.8566, 2.3522, 40.7128, -74.006); // Paris to NYC
        expect(Math.round(result)).toBeCloseTo(5852935, -2); // ~5853 km in meters
    });

    it('should return 0 for same point', () => {
        const result = vincentyDistance(0, 0, 0, 0);
        expect(result).toBe(0);
    });

    it('should throw TypeError for invalid inputs', () => {
        // @ts-expect-error
        expect(() => vincentyDistance('a', 0, 0, 0)).toThrow(TypeError);
    });

    it('should throw RangeError for out-of-bounds values', () => {
        expect(() => vincentyDistance(100, 0, 0, 0)).toThrow(RangeError); // lat > 90
        expect(() => vincentyDistance(0, -190, 0, 0)).toThrow(RangeError); // lon < -180
    });

    it('should throw error if formula fails to converge', () => {
        // This case should simulate failure to converge
        expect(() => vincentyDistance(0, 0, 0, 179.999999999)).toThrow('Vincenty formula failed to converge');
    });
});
