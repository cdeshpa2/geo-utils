import { haversineDistance } from '../src';

describe('Haversine Distance', () => {
  it('calculates distance in kilometers', () => {
    const dist = haversineDistance(51.5, 0, 38.8, -77.1, 'km');
    expect(Math.round(dist)).toBeCloseTo(5918, 0);
  });

  it('calculates distance in miles', () => {
    const dist = haversineDistance(51.5, 0, 38.8, -77.1, 'miles');
    expect(Math.round(dist)).toBeCloseTo(3677, 0);
  });
});
