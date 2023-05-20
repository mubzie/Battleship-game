import { shipFactory } from "../src/modules/shipFactory";

let ship;

beforeEach(() => {
    ship = shipFactory(3)
})

test('check length', () => {
    expect(ship.shipLength).toHaveLength(3);
})

test('test hit function', () => {
    ship.hit(0)
    ship.hit(2)
    expect(ship.shipLength[0]).toBe('hit');
    expect(ship.shipLength[2]).toBe('hit');
})

test('check isSunk function', () => {
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true);
})
