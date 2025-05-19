export type Unit = 'km' | 'miles';

/**
 * Validates the latitude and longitude values.
 */
export function validateCoordinates(lat: number, lon: number, label: string) {
    if (typeof lat !== 'number' || typeof lon !== 'number') {
        throw new TypeError(`${label} latitude and longitude must be numbers.`);
    }
    if (lat < -90 || lat > 90) {
        throw new RangeError(`${label} latitude must be between -90 and 90 degrees.`);
    }
    if (lon < -180 || lon > 180) {
        throw new RangeError(`${label} longitude must be between -180 and 180 degrees.`);
    }
}

/**
 * Validates the unit of measurement.
 */
export function validateUnit(unit: Unit) {
    if (!['km', 'miles'].includes(unit)) {
        throw new Error(`Invalid unit '${unit}'. Valid options are 'km' or 'miles'.`);
    }
}
