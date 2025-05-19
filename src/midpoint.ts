import { validateCoordinates, validateUnit } from './validator';

/**
 * Calculates the midpoint between two latitude/longitude coordinates.
 */
export function midpoint(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): { latitude: number; longitude: number } {
  validateCoordinates(lat1, lon1, 'Point 1');
  validateCoordinates(lat2, lon2, 'Point 2');

  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const toDeg = (rad: number) => (rad * 180) / Math.PI;

  const dLon = toRad(lon2 - lon1);

  const φ1 = toRad(lat1);
  const φ2 = toRad(lat2);
  const λ1 = toRad(lon1);

  const Bx = Math.cos(φ2) * Math.cos(dLon);
  const By = Math.cos(φ2) * Math.sin(dLon);

  const φ3 = Math.atan2(
    Math.sin(φ1) + Math.sin(φ2),
    Math.sqrt((Math.cos(φ1) + Bx) ** 2 + By ** 2)
  );
  const λ3 = λ1 + Math.atan2(By, Math.cos(φ1) + Bx);

  return {
    latitude: parseFloat(toDeg(φ3).toFixed(6)),
    longitude: parseFloat(toDeg(λ3).toFixed(6)),
  };
}