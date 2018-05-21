/* eslint-disable no-underscore-dangle */
import mockingoose from 'mockingoose';
import openShurl from './open-shurl';
import Shurl from './models/shurl';

describe('openShurl function', () => {
  it('should return original_url when given a valid id', async () => {
    const _doc = {
      _id: 250,
      original_url: 'http://www.google.com'
    };

    mockingoose.Shurl.toReturn(_doc, 'findOne');

    const received = await openShurl(250, Shurl);
    const expected = 'http://www.google.com';

    expect(received).toEqual(expected);
  });

  it('should return null when given an invalid integer id', async () => {
    mockingoose.Shurl.toReturn(null, 'findOne');

    const received = await openShurl(250, Shurl);
    const expected = null;

    expect(received).toEqual(expected);
  });

  it('should return null when given a word as an id', async () => {
    const _doc = {
      _id: 250,
      original_url: 'http://www.google.com'
    };

    mockingoose.Shurl.toReturn(_doc, 'findOne');

    const received = await openShurl('hello', Shurl);
    const expected = null;

    expect(received).toEqual(expected);
  });

  it('should return null when given a non-integer as an id', async () => {
    const _doc = {
      _id: 250,
      original_url: 'http://www.google.com'
    };

    mockingoose.Shurl.toReturn(_doc, 'findOne');

    const received = await openShurl(2.5, Shurl);
    const expected = null;

    expect(received).toEqual(expected);
  });
});
