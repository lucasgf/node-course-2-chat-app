const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'user';
    const text = 'text'
    const message = generateMessage(from, text);
    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'user';
    const latitude = 123;
    const longitude = 111;
    const locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.from).toBe(from);
    expect(locationMessage.url).toBe('https://www.google.com/maps?q=123,111');
    expect(typeof locationMessage.createdAt).toBe('number');
  });
});