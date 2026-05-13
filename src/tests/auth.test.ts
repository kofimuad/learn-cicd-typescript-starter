import {describe, expect, test} from 'vitest';

const person = {
    isActive: false,
    age: 26,
}

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("person is active", () => {
        expect(person.isActive).toBeTruthy();
    });
});