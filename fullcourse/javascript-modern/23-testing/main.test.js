import addition from "./main.js";
import {expect, test} from "vitest";

/*
*ici on va voir un test positif (happy path testing), il va réussir car l'addition de 1 et 2 est bien ègale à 3
*/

test("test si l'addition fonctionne", ()=> {
    expect(addition(1,2)).toBe(3);
})

/*
*test négatif (sad path testing)
*/

test("test que nos arguments sont du bon type", () => {
    expect(()=> addition("1", "2").toThrow("a and b must be numbers"))
})
test("test que nos arguments sont du bon type", () => {
    expect(()=> addition("1", 2).toThrow("a and b must be numbers"))
})
test("test que nos arguments sont du bon type", () => {
    expect(()=> addition(1, "2").toThrow("a and b must be numbers"))
})
test("test que nos arguments sont du bon type", () => {
    expect(()=> addition(1, 2).toThrow("a and b must be numbers"))
})
