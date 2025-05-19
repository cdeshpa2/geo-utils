# geo-utils

A lightweight TypeScript utility library for calculating distance between two coordinates using the **Haversine formula**, with support for **kilometers** and **miles**.

## 📦 Installation
```npm install @cdeshpande/geo-utils```


## 🚀 Usage
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


## 📘 API

haversineDistance(lat1, lon1, lat2, lon2, unit?)

Param Type Required Description
| Param  | Type            | Required | Description                          |
|--------|-----------------|----------|--------------------------------------|
| lat1   | `number`        | ✅       | Latitude of the first point          |
| lon1   | `number`        | ✅       | Longitude of the first point         |
| lat2   | `number`        | ✅       | Latitude of the second point         |
| lon2   | `number`        | ✅       | Longitude of the second point        |
| unit   | `'km' \| 'miles'` | ❌     | Unit of distance (default is `'km'`) |

## 🔒 Validations
 - Throws `TypeError` if latitude/longitude is not a number.  
 - Throws `RangeError` if coordinates are out of bounds.  
 - Throws `Error` if unit is not `'km'` or `'miles'`.  


## ✅ Examples
```
haversineDistance(0, 0, 0, 1); // ~111.19 km
haversineDistance(0, 0, 0, 1, 'miles'); // ~69.03 miles

// Invalid examples (will throw)
haversineDistance('a' as any, 0, 0, 0); // TypeError
haversineDistance(91, 0, 0, 0); // RangeError
haversineDistance(0, 0, 0, 0, 'lightyears' as any); // Error
```

## 🧾 License

MIT © Chaitanya Deshpande