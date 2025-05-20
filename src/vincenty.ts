import { validateCoordinates } from './validator';

const a = 6378137; // Semi-major axis in meters
const f = 1 / 298.257223563; // Flattening
const b = (1 - f) * a;

/**
 * Calculates Vincenty distance between two latitude/longitude points.
 * @param lat1 Latitude of the first point
 * @param lon1 Longitude of the first point
 * @param lat2 Latitude of the second point
 * @param lon2 Longitude of the second point
 * @returns Distance in meters
 */
export function vincentyDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    validateCoordinates(lat1, lon1, 'Point 1');
    validateCoordinates(lat2, lon2, 'Point 2');

    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const φ1 = toRad(lat1);
    const φ2 = toRad(lat2);
    const L = toRad(lon2 - lon1);
    const U1 = Math.atan((1 - f) * Math.tan(φ1));
    const U2 = Math.atan((1 - f) * Math.tan(φ2));
    const sinU1 = Math.sin(U1),
        cosU1 = Math.cos(U1);
    const sinU2 = Math.sin(U2),
        cosU2 = Math.cos(U2);

    let λ = L;
    let λP,
        iterLimit = 100;
    let cosSqAlpha, sinSigma, cos2SigmaM, cosSigma, sigma;

    do {
        const sinLambda = Math.sin(λ);
        const cosLambda = Math.cos(λ);
        sinSigma = Math.sqrt((cosU2 * sinLambda) ** 2 + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) ** 2);

        if (sinSigma === 0) return 0; // Co-incident points

        cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
        sigma = Math.atan2(sinSigma, cosSigma);
        const sinAlpha = (cosU1 * cosU2 * sinLambda) / sinSigma;
        cosSqAlpha = 1 - sinAlpha ** 2;
        cos2SigmaM = cosSigma - (2 * sinU1 * sinU2) / cosSqAlpha;

        if (isNaN(cos2SigmaM)) cos2SigmaM = 0; // Equatorial line

        const C = (f / 16) * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
        λP = λ;
        λ =
            L +
            (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM ** 2)));
    } while (Math.abs(λ - λP) > 1e-12 && --iterLimit > 0);

    if (iterLimit === 0) throw new Error('Vincenty formula failed to converge');

    const uSq = cosSqAlpha * ((a ** 2 - b ** 2) / b ** 2);
    const A = 1 + (uSq / 16384) * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
    const B = (uSq / 1024) * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    const deltaSigma =
        B *
        sinSigma *
        (cos2SigmaM +
            (B / 4) *
                (cosSigma * (-1 + 2 * cos2SigmaM ** 2) -
                    (B / 6) * cos2SigmaM * (-3 + 4 * sinSigma ** 2) * (-3 + 4 * cos2SigmaM ** 2)));

    const s = b * A * (sigma - deltaSigma);

    return s; // Distance in meters
}
