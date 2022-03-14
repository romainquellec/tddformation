describe('Rules of Password',() => {
    it('Should refuse empty password', () => {
        expect(checkPassword("")).toBeFalsy();
    });

    function checkPassword(password: string) {
        return false;
    }

})