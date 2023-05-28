// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('accepts valid phone 1', () => {
    expect(functions.isPhoneNumber('123-305-4567')).toBe(true);
});

test('accepts valid phone 2', () => {
    expect(functions.isPhoneNumber('(456) 456-7890')).toBe(true);
});

test('rejects invalid phone 1', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('rejects invalid phone 2', () => {
    expect(functions.isPhoneNumber('(098) 987-abcd')).toBe(false);
});

test('accepts valid email 1', () => {
    expect(functions.isEmail('admin@ucsd.edu')).toBe(true);
});

test('accepts valid email 2', () => {
    expect(functions.isEmail('ilovecats97@yahoo.com')).toBe(true);
});

test('rejects invalid email 1', () => {
    expect(functions.isEmail('amongus@sussy.imposter')).toBe(false);
});

test('rejects invalid email 2', () => {
    expect(functions.isEmail('#$%^&*@us.gov')).toBe(false);
});

test('accepts valid password 1', () => {
    expect(functions.isStrongPassword('Am0ngUs')).toBe(true);
});

test('accepts valid password 2', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('rejects invalid password 1', () => {
    expect(functions.isStrongPassword('hi')).toBe(false);
});

test('rejects invalid password 2', () => {
    expect(functions.isStrongPassword('SDfds j34HDbA39')).toBe(false);
});

test('accepts valid date 1', () => {
    expect(functions.isDate('05/09/2003')).toBe(true);
});

test('accepts valid date 2', () => {
    expect(functions.isDate('91/19/9999')).toBe(true);
});

test('rejects invalid date 1', () => {
    expect(functions.isDate('5/9/03')).toBe(false);
});

test('rejects invalid date 2', () => {
    expect(functions.isDate('05 / 09 / 2003')).toBe(false);
});

test('accepts valid hex color 1', () => {
    expect(functions.isHexColor('FFF')).toBe(true);
});

test('accepts valid hex color 2', () => {
    expect(functions.isHexColor('#3e355c')).toBe(true);
});

test('rejects invalid hex color 1', () => {
    expect(functions.isHexColor('#000 000')).toBe(false);
});

test('rejects invalid hex color 2', () => {
    expect(functions.isHexColor('f')).toBe(false);
});