export type Unit = 'km' | 'miles';

const RADIUS = {
  km: 6371,
  miles: 3958.8,
};

/**
 * Calculates the Haversine distance between two coordinates
 */
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: Unit = 'km'
): number {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const R = RADIUS[unit];

  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;

  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
