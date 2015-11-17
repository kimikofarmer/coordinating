describe ('the signup app ', function() {
	var emailValidation = $('.email-invalid-error');
	var emailRequired = $('.email-required-error');

	it('must enter a valid email address', function() {
	    expect(emailValidation.isPresent()).toEqual(false);
	    var email = 'info343@gmail.com';
	    emailInp.sendKeys(email);
	    expect(emailValidation.isPresent()).toEqual(false);

	});

	it('must show email type validation error', function() {
	    expect(emailValidation.isPresent()).toEqual(false);
	    emailInp.sendKeys('notanemail');
	    expect(emailInvalid.isPresent()).toEqual(true);
	});

	it('must show required validation error', function() {
	    expect(emailRequired.isPresent()).toEqual(false);
	    emailInp.sendKeys('info343@gmail.com');
	    emailInp.clear();
	    expect(emailRequired.isPresent()).toEqual(true);

	    emailInp.sendKeys('notanemail');
	    expect(emailInvalid.isPresent()).toEqual(true);
	    emailInp.clear();
	    expect(emailRequired.isPresent()).toEqual(true);
	});
});