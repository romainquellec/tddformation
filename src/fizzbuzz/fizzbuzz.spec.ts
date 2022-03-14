describe('Rules of Fizz Buzz',() => {
    it.each([1,2])(`should get 1`, () => {
        expect(fizzbuzzify(1)).toBe("1");
    })

    it('should get 2', () => {
        expect(fizzbuzzify(2)).toBe("2");
    })

    it('should get Fizz given 3', () => {
        expect(fizzbuzzify(3)).toBe("Fizz");
    });

    function fizzbuzzify(number: number): string {
        if (number==3) {
            return "Fizz"
        } else {
            return `${number}`;
        }
        
    }
})