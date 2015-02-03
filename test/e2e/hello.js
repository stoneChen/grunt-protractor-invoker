// spec.js
describe('angularjs hello', function() {
    it('should greet the user', function() {
        browser.get('http://localhost:9000/#hello');
        element(by.model('greetName')).sendKeys('stone');
        var greeting = element(by.binding('greetName'));
        expect(greeting.getText()).toEqual('hello stone');
    });
    it('should greet the husband', function() {
        browser.get('http://localhost:9000/#hello');
        element(by.model('girl')).sendKeys('汪婕');
        var greeting = element(by.binding('girl'));
        expect(greeting.getText()).toEqual('汪婕 is my wife');
    });
});