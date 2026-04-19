export function sortHeroesByHealth(heroes) {
    // Копируем массив, чтобы не мутировать оригинал, и сортируем по убыванию
    return [...heroes].sort((a, b) => b.health - a.health);
}