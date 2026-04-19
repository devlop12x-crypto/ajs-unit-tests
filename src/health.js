export function getHealthStatus(character) {
    if (character.health > 50) {
        return 'healthy';
    }
    // Значение от 50 и до 15 включительно
    if (character.health >= 15) {
        return 'wounded';
    }
    return 'critical';
}