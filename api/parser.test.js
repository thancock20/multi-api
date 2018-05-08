import parser from './parser';

describe('Parser function', () => {
  it('returns the correct info from ctx', () => {
    const ctx = {
      ip: '::1',
      userAgent: {
        os: 'Linux 64'
      },
      acceptsLanguages() {
        return ['en-US', 'en-UK'];
      }
    };

    const received = parser(ctx);
    const expected = {
      ip: '::1',
      lang: 'en-US',
      os: 'Linux 64'
    };

    expect(received).toEqual(expected);
  });
});
