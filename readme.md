# 🌍 geo-utils

**A lightweight, blazing-fast TypeScript library for calculating distances between two coordinates using the Haversine formula. Supports both kilometers and miles.**

---

## 📦 Installation

```bash
# Using npm
npm install geo-utils

# Using yarn
yarn add geo-utils



⸻

🔧 Features
 • 🌐 Haversine distance calculation
 • 📏 Supports kilometers and miles
 • ✅ Written in TypeScript with full typings
 • 🧪 Unit-tested with Jest
 • 🚀 Tiny, fast, zero-dependency utility

⸻

🚀 Usage

// ESM or TypeScript
import { haversineDistance } from 'geo-utils';

const lat1 = 40.7128;
const lon1 = -74.0060; // New York City

const lat2 = 34.0522;
const lon2 = -118.2437; // Los Angeles

// Distance in kilometers
const distanceInKm = haversineDistance(lat1, lon1, lat2, lon2, 'km');
console.log(`Distance: ${distanceInKm.toFixed(2)} km`);

// Distance in miles
const distanceInMiles = haversineDistance(lat1, lon1, lat2, lon2, 'miles');
console.log(`Distance: ${distanceInMiles.toFixed(2)} miles`);



⸻

📘 API

haversineDistance(lat1, lon1, lat2, lon2, unit?)

Parameter Type Description
lat1 number Latitude of point 1
lon1 number Longitude of point 1
lat2 number Latitude of point 2
lon2 number Longitude of point 2
unit string 'km' for kilometers (default), 'mi' for miles

Returns

number // Distance in chosen unit



⸻

⚠️ Common Issues

❌ SyntaxError: Cannot use import statement outside a module

Make sure your project supports ES modules or TypeScript. For Jest testing, ensure you have:

// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};



⸻

🧪 Running Tests

npm run test



⸻

📦 Build for Publishing

npm run build



⸻

🛠 Tech Stack
 • TypeScript
 • Jest
 • Node.js
 • npm/yarn

⸻

📄 License

MIT © Chaitanya Deshpande

⸻

🙌 Contributing

PRs and stars are welcome! For major changes, please open an issue first to discuss what you would like to change.

⸻

🔗 Links
 • npm
 • GitHub
