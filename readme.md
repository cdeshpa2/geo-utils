# geo-utils

A lightweight and extensible TypeScript utility library for geospatial calculations such as:

-   🌍 Haversine distance between two coordinates
-   📍 Midpoint between two geographic points

Supports **kilometers** and **miles**, with built-in input validation.

vincentyDistance calculates the geodesic distance between two geographic coordinates using the Vincenty inverse formula on the WGS-84 ellipsoid. It provides high-precision results suitable for long-distance measurements and real-world applications like aviation and GPS.

## 📦 Installation

`npm install @cdeshpande/geo-utils`

## 🚀 Haversine Usage

```
import { haversineDistance } from '@cdeshpande/geo-utils';

// Define coordinates
const start = {
  latitude: 30.849635,
  longitude: -83.24559
};

const end = {
  latitude: 27.950575,
  longitude: -82.457178
};

// Calculate distance in kilometers (default)
console.log(haversineDistance(start.latitude, start.longitude, end.latitude, end.longitude));
// → 403.28 (km)

// Calculate distance in miles
console.log(haversineDistance(start.latitude, start.longitude, end.latitude, end.longitude, 'miles'));
// → 250.47 (miles)
```

## 🚀 Midpoint Usage

```
// Midpoint
const mid = midpoint(start.latitude, start.longitude, end.latitude, end.longitude);
console.log(mid); // → { latitude: 29.41499, longitude: -82.851384 }
```

## 🚀 Vincenty Usage

```
import { vincentyDistance } from '@cdeshpande/geo-utils';

// Define two geographic points (latitude, longitude)
const paris = { lat: 48.8566, lon: 2.3522 };
const nyc = { lat: 40.7128, lon: -74.006 };

// Get distance in meters
const distance = vincentyDistance(paris.lat, paris.lon, nyc.lat, nyc.lon);
console.log(`Distance: ${(distance / 1000).toFixed(2)} km`);
// Output: Distance: 5853.00 km
```

## 📘 API

### haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number, unit?: string): number

Param Type Required Description
| Param | Type | Required | Description |
|--------|-----------------|----------|--------------------------------------|
| lat1 | `number` | ✅ | Latitude of the first point |
| lon1 | `number` | ✅ | Longitude of the first point |
| lat2 | `number` | ✅ | Latitude of the second point |
| lon2 | `number` | ✅ | Longitude of the second point |
| unit | `'km' \| 'miles'` | ❌ | Unit of distance (default is `'km'`) |

### midpoint(lat1: number, lon1: number, lat2: number, lon2: number): { latitude: number, longitude: number }

Param Type Required Description
| Param | Type | Required | Description |
|--------|-----------------|----------|--------------------------------------|
| lat1 | `number` | ✅ | Latitude of the first point |
| lon1 | `number` | ✅ | Longitude of the first point |
| lat2 | `number` | ✅ | Latitude of the second point |
| lon2 | `number` | ✅ | Longitude of the second point |

### vincentyDistance(lat1: number, lon1: number, lat2: number, lon2: number): number

Param Type Required Description
| Param | Type | Required | Description |
|--------|-----------------|----------|--------------------------------------|
| lat1 | `number` | ✅ | Latitude of the first point |
| lon1 | `number` | ✅ | Longitude of the first point |
| lat2 | `number` | ✅ | Latitude of the second point |
| lon2 | `number` | ✅ | Longitude of the second point |

## 🔒 Validations

-   Throws `TypeError` if latitude/longitude is not a number.
-   Throws `RangeError` if coordinates are out of bounds.
-   Throws `Error` if unit is not `'km'` or `'miles'`.

## 🧾 License

MIT © Chaitanya Deshpande
