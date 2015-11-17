describe('Form App', function() {

    var birthDateInp = element(by.model('signUp.birthdate'));
    var validDateMsg = $('.validDate-error');

    var over13Msg = $('.over13-error');

    var passwordInp = element(by.model('signUp.password'));
    var confirmPasswordInp = element(by.model('signUp.confirmPassword'));
    var passwordMatchMsg = $('.passwordMatch-error');

    var requiredInputs = $("input:not(#fname)");
    var requiredMsgs = $('.required-error');

    var emailInp = element(by.model('signUp.email'));

    var emailValidation = $('.email-invalid-error');
    var emailRequired = $('.email-required-error');

    var lnameRequired = $('.lname-required-error');
    var lnameInp = element(by.model('signUp.lname'));


    beforeEach(function() {
        //reload the page so we start the test fresh
        browser.get('http://localhost:8000/');
    });

    it('must show invalid date error', function() {
        expect(validDateMsg.isPresent()).toEqual(false);
        birthDateInp.sendKeys('abc');
        expect(validDateMsg.isPresent()).toEqual(true);
        birthDateInp.clear();
        birthDateInp.sendKeys('01/01/2015');
        expect(validDateMsg.isPresent()).toEqual(false);
    });

    it('must be over 13', function() {
        expect(over13Msg.isPresent()).toEqual(false);
        var today = new Date();
        birthDateInp.sendKeys(today.toLocaleDateString('en-US'));
        expect(validDateMsg.isPresent()).toEqual(true);
        birthDateInp.clear();
        today.setFullYear(today.getFullYear() - 13);
        birthDateInp.sendKeys(today.toLocaleDateString('en-US'));
        expect(validDateMsg.isPresent()).toEqual(false);
    });

    /*it('must show required validation error', function() {
        var idx;
        for (idx = 0; idx < requiredInputs.length; idx++) {
            expect(requiredMsgs[idx].isPresent()).toEqual(false);
            requiredInputs[idx].sendKeys('abc');
            requiredInput[idx].clear();
            expect(requiredMsgs[idx].isPresent()).toEqual(true);
            requiredInput[idx].sendKeys('abc');
            expect(requiredMsgs[idx].isPresent()).toEqual(false);
        }
    });*/

    it('must be the same Passoword', function() {
        expect(passwordMatchMsg.isPresent()).toEqual(false);
        passwordInp.sendKeys('password');
        confirmPasswordInp.sendKeys('hello');
        expect(passwordMatchMsg.isPresent()).toEqual(true);
        confirmPasswordInp.clear();
        confirmPasswordInp.sendKeys('password');
        expect(passwordMatchMsg.isPresent()).toEqual(false);
    });

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
	    expect(emailValidation.isPresent()).toEqual(true);
	    emailInp.clear();
	    expect(emailRequired.isPresent()).toEqual(true);
	});

    it('must enter last nanme', function() {
        expect(lnameRequired.isPresent()).toEqual(false);
        lnameInp.sendKeys('blah');
        lnameInp.clear();
        expect(lnameInp.isPresent()).toEqual(true);
        lnameInp.sendKeys('blach');
        expect(lnameInp.isPresent()).toEqual(false);
    });

    it('must enter last nanme', function() {
        expect(lnameRequired.isPresent()).toEqual(false);
        lnameInp.sendKeys('blah');
        lnameInp.clear();
        expect(lnameInp.isPresent()).toEqual(true);
        lnameInp.sendKeys('blach');
        expect(lnameInp.isPresent()).toEqual(false);
    });

    it('should show success message', function () {
        expect(alertMsg.isPresent()).toEqual(false);
        lnameInp.sendKeys('abc');
        emailInp.sendKeys('example@email.com');
        bDateImp.sendKeys('11/4/2000');
        passwordInp.sendKeys('password');
        cpasswordInp.sendKeys('password');
        clickSubmit.click();
        expect(alertMsg.isPresent()).toEqual(true);
        closeTab.click();
        expect(alertMsg.isPresent()).toEqual(false);
    });
});
