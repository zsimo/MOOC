describe("Address book", function () {

	var addressBook;
	var contact;

	// run before spec
	// DRY
	beforeEach(function () {
		addressBook = new AddressBook();
		contact = new Contact();
	});

	// SPEC 01
	it("should be able to add a contact", function () {
		addressBook.addContact(contact);

		expect(addressBook.getContact(0)).toBe(contact);
	});

	// SPEC 02
	it("should be able to delete a contact", function () {
		addressBook.addContact(contact);
		addressBook.deleteContact(0);
		expect(addressBook.getContact(0)).not.toBeDefined();
	});


});

describe("Ajax", function () {
	var addressBook = new AddressBook();

	beforeEach(function (done) {
		addressBook.getInitialContacs(function () {
			done();
		});
	});
	// SPEC 03
	it("Async test", function (done) {
		expect(addressBook.initialComplete).toBe(true);
		done();
	});

});










