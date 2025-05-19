# geo-utils

A lightweight and extensible TypeScript utility library for geospatial calculations such as:

-   🌍 Haversine distance between two coordinates
-   📍 Midpoint between two geographic points

Supports **kilometers** and **miles**, with built-in input validation.

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

## Midpoint Usage

```
// Midpoint
const mid = midpoint(start.latitude, start.longitude, end.latitude, end.longitude);
console.log(mid); // → { latitude: 29.41499, longitude: -82.851384 }
```

## 📘 API

### haversineDistance(lat1, lon1, lat2, lon2, unit?)

Param Type Required Description
| Param | Type | Required | Description |
|--------|-----------------|----------|--------------------------------------|
| lat1 | `number` | ✅ | Latitude of the first point |
| lon1 | `number` | ✅ | Longitude of the first point |
| lat2 | `number` | ✅ | Latitude of the second point |
| lon2 | `number` | ✅ | Longitude of the second point |
| unit | `'km' \| 'miles'` | ❌ | Unit of distance (default is `'km'`) |

### midpoint(lat1, lon1, lat2, lon2, unit?)

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

## ✅ Examples

```
import { haversineDistance, midpoint } from '@cdeshpande/geo-utils';

// Define starting and ending coordinates
const start = {
    latitude: 30.849635,
    longitude: -83.24559,
};

const end = {
    latitude: 27.950575,
    longitude: -82.457178,
};

// ✅ Haversine Distance Example
const distanceKm = haversineDistance(start.latitude, start.longitude, end.latitude, end.longitude);
console.log(`Distance (km): ${distanceKm.toFixed(2)}`); // → ~403.28 km

const distanceMiles = haversineDistance(start.latitude, start.longitude, end.latitude, end.longitude, 'miles');
console.log(`Distance (miles): ${distanceMiles.toFixed(2)}`); // → ~250.47 miles

// ✅ Midpoint Example
const mid = midpoint(start.latitude, start.longitude, end.latitude, end.longitude);
console.log(`Midpoint: Latitude ${mid.latitude.toFixed(6)}, Longitude ${mid.longitude.toFixed(6)}`);
// → Midpoint: Latitude ~29.414990, Longitude ~-82.851384

// Invalid examples (will throw)
haversineDistance('a' as any, 0, 0, 0); // TypeError
haversineDistance(91, 0, 0, 0); // RangeError
haversineDistance(0, 0, 0, 0, 'lightyears' as any); // Error
```

## 🧾 License

MIT © Chaitanya Deshpande
