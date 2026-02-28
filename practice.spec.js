
//capitalize(x)
test("capitalize first letter in word", () => {
	expect(capitalize("simeon")).toBe("Simeon");
})

test("capitalize first letter in sentence", () = {
	expect(capitalize("hey, bro.")).toBe("Hey, bro.");
})


//reverseString(x)
test("reverses one word", () => {
	expect(reverseString("Simeon")).toBe("noemiS");
})

test("reverses sentence", () => {
	expect(reverseString("Hi there.")).toBe(".ereht iH");
})



//calculator.add/subtract/divide/multiply
test("adds two numbers", () => {
	expect(calculator.add(2, 7)).toBe(9);
})

test("subtracts two numbers", () => {
	expect(calculator.subtract(5, 6)).toBe(-1);
})

test("divides two numbers", () => {
	expect(calculator.divide(6, 3)).toBe(2);
})

test("multiplies two numbers", () => {
	expect(calculator.multiply(3, 7)).toBe(21);
})



//
