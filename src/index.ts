export type Unit = 'km' | 'miles';

const RADIUS = {
  km: 6371,
  miles: 3958.8,
};

/**
 * Validates the latitude and longitude values.
 */
function validateCoordinates(lat: number, lon: number, label: string) {
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
function validateUnit(unit: Unit) {
  if (!['km', 'miles'].includes(unit)) {
    throw new Error(`Invalid unit '${unit}'. Valid options are 'km' or 'miles'.`);
  }
}

/**
 * Calculates the Haversine distance between two coordinates.
 * @param lat1 Latitude of point 1
 * @param lon1 Longitude of point 1
 * @param lat2 Latitude of point 2
 * @param lon2 Longitude of point 2
 * @param unit Unit of measurement: 'km' or 'miles' (default: 'km')
 * @returns Distance between the two coordinates
 */
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: Unit = 'km'
): number {
  validateCoordinates(lat1, lon1, 'Point 1');
  validateCoordinates(lat2, lon2, 'Point 2');
  validateUnit(unit);

  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = RADIUS[unit];

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
