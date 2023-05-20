import { shipFactory } from "../src/modules/shipFactory";

test('check length', () => {
    const battleship = shipFactory(4)
    expect(battleship.length).toHaveLength(4);
})

test('test hit function', () => {
    const battleship = shipFactory(4)
    battleship.hit()
    battleship.hit()
    battleship.hit()
    expect(battleship.hits).toBe(3);
})

test('check isSunk function', () => {
    const battleship = shipFactory(4)
    battleship.hit()
    battleship.hit()
    battleship.hit()
    battleship.hit()
    expect(battleship.isSunk()).toBe(true);
})
