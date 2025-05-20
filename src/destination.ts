import { validateCoordinates, validateUnit } from './validator';
import type { Unit } from './validator';

const RADIUS = {
    km: 6371,
    miles: 3958.8,
};

/**
 * Calculates the destination point given a start point, distance, and bearing.
 * @param lat Latitude of the start point
 * @param lon Longitude of the start point
 * @param distance Distance to travel
 * @param bearing Bearing in degrees
 * @param unit Unit of distance ('km' or 'miles')
 * @returns Coordinates of the destination point
 */
export function destinationPoint(
    lat: number,
    lon: number,
    distance: number,
    bearing: number,
    unit: Unit = 'km'
): { latitude: number; longitude: number } {
    validateCoordinates(lat, lon, 'Start Point');
    validateUnit(unit);

    if (typeof distance !== 'number' || distance < 0) {
        throw new TypeError('Distance must be a non-negative number.');
    }

    if (typeof bearing !== 'number') {
        throw new TypeError('Bearing must be a number.');
    }

    const R = RADIUS[unit];
    const δ = distance / R; // angular distance in radians
    const θ = (bearing * Math.PI) / 180;

    const φ1 = (lat * Math.PI) / 180;
    const λ1 = (lon * Math.PI) / 180;

    const φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) + Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));

    const λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1), Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));

    return {
        latitude: +(φ2 * (180 / Math.PI)).toFixed(6),
        longitude: +((((λ2 * 180) / Math.PI + 540) % 360) - 180).toFixed(6), // normalize
    };
}
