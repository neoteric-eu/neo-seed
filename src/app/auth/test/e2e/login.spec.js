describe('Auth::Login', function () {
	'use strict';

	beforeEach(function () {
		browser.ignoreSynchronization = false;
	});


	it('should redirect to login page for non logged user from base address', function () {
		browser.ignoreSynchronization = true;
		browser.get('/');
		browser.sleep(2000);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/login');
	});

	it('should redirect to login page for non logged user from any address', function () {
		browser.ignoreSynchronization = true;
		browser.get('/some-wrong-url');
		browser.sleep(2000);
		expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/login');
	});

	//it('should display error when provided incorrect password or login', function () {
	//	browser.get('/login');
	//	element(by.model('user.login')).sendKeys('admin@neoteric.eu');
	//	element(by.model('user.password')).sendKeys('abc123');
	//	element(by.buttonText('Log in')).click();
	//
	//	browser.sleep(1000);
	//	expect(browser.getCurrentUrl()).toBe(browser.baseUrl + '/dashboard');
	//});
});
