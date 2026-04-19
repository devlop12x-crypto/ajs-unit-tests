import { getHealthStatus } from '../health.js';

test.each([
    ['healthy', { name: 'Маг', health: 90 }, 'healthy'],
    ['wounded (upper bound)', { name: 'Воин', health: 50 }, 'wounded'],
    ['wounded (lower bound)', { name: 'Лучник', health: 15 }, 'wounded'],
    ['critical', { name: 'Вор', health: 14 }, 'critical'],
])('should return %s status for character %O', (_, character, expected) => {
    const result = getHealthStatus(character);
    expect(result).toBe(expected);
});