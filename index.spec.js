const {isValidateSAPhoneNumber} = require('./index');

describe('Validate different phone numbers', () => {
    test('Verify that phone number starting with 0 is valid', () => {
        expect(isValidateSAPhoneNumber('0701234567')).toBe(true);
    });

    test('Verify that phone number starting with +27 is valid', () => {
        expect(isValidateSAPhoneNumber('+27701234567')).toBe(true);
    });
   
    test('Verify that phone number starting with 27 is invalid', () => {
        expect(isValidateSAPhoneNumber('27701234567')).toBe(false);
    });
   
    test('Verify that phone number whose second digit is 5 is invalid', () => {
        expect(isValidateSAPhoneNumber('0501234567')).toBe(false);
    });
   
    test('Verify that phone number whose second digit is 6 is valid', () => {
        expect(isValidateSAPhoneNumber('0601234567')).toBe(true);
    });
   
    test('Verify that phone number whose second digit is 8 is valid', () => {
        expect(isValidateSAPhoneNumber('0801234567')).toBe(true);
    });
   
    test('Verify that phone number whose second digit is 9 is invalid', () => {
        expect(isValidateSAPhoneNumber('0901234567')).toBe(false);
    });
   
    test('Verify that 9 digit phone number is invalid', () => {
        expect(isValidateSAPhoneNumber('070123456')).toBe(false);
    });
   
    test('Verify that 11 digit phone number is invalid', () => {
        expect(isValidateSAPhoneNumber('07012345678')).toBe(false);
    });
});
   