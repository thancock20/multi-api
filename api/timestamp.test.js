import timestamp from './timestamp';

describe('Timestamp function', () => {
  it('produces the correct output for unix format', () => {
    const date = { date: '1525669200' };
    const received = timestamp(date);
    const expected = { unix: '1525669200', natural: 'May 7, 2018' };
    expect(received).toEqual(expected);
  });

  it('produces the correct output for natural format', () => {
    const date = { date: 'May 7, 2018' };
    const received = timestamp(date);
    const expected = { unix: '1525669200', natural: 'May 7, 2018' };
    expect(received).toEqual(expected);
  });

  it('produces null output for nondate format', () => {
    const date = { date: 'cucumber' };
    const received = timestamp(date);
    const expected = { unix: null, natural: null };
    expect(received).toEqual(expected);
  });
});
