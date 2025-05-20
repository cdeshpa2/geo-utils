import { validateCoordinates } from './validator';

/**
 * Calculates the initial bearing (forward azimuth) from point A to point B.
 * @param lat1 Latitude of the starting point
 * @param lon1 Longitude of the starting point
 * @param lat2 Latitude of the destination point
 * @param lon2 Longitude of the destination point
 * @returns Initial bearing in degrees (0–360°)
 */
export function initialBearing(lat1: number, lon1: number, lat2: number, lon2: number): number {
    validateCoordinates(lat1, lon1, 'Point 1');
    validateCoordinates(lat2, lon2, 'Point 2');

    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const toDeg = (rad: number) => (rad * 180) / Math.PI;

    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const Δλ = toRad(lon2 - lon1);

    const y = Math.sin(Δλ) * Math.cos(φ2);
    const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
    const θ = Math.atan2(y, x);

    const bearing = (toDeg(θ) + 360) % 360;
    return parseFloat(bearing.toFixed(6)); // Round for readability
}
