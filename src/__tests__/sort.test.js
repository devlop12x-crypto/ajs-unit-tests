import { sortHeroesByHealth } from '../sort.js';

test('should sort heroes by health in descending order', () => {
    const input = [
        { name: 'мечник', health: 10 },
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
    ];

    const expected = [
        { name: 'маг', health: 100 },
        { name: 'лучник', health: 80 },
        { name: 'мечник', health: 10 },
    ];

    const result = sortHeroesByHealth(input);

    // toEqual проверяет содержимое объектов и массивов (Deep Equality)
    expect(result).toEqual(expected);
});