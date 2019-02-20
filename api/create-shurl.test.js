/* eslint-disable no-underscore-dangle */
import mockingoose from 'mockingoose';
import createShurl from './create-shurl';
import Shurl from './models/shurl';

describe('createShurl function', () => {
  it.skip('should return the correct document', async () => {
    const _doc = {
      _id: 250,
      original_url: 'http://www.google.com'
    };

    mockingoose.Shurl.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const ctx = {
      origin: 'http://www.shurl.com',
      path: '',
      query: {
        url: 'http://www.google.com'
      }
    };

    const received = await createShurl(ctx, Shurl);
    const expected = {
      original_url: 'http://www.google.com',
      short_url: 'http://www.shurl.com/250'
    };

    expect(received).toEqual(expected);
  });

  it('should return error if url is invalid', async () => {
    const _doc = {
      _id: 250,
      original_url: 'http://www.google.com'
    };

    mockingoose.Shurl.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const ctx = {
      origin: 'http://www.shurl.com',
      path: '',
      query: {
        url: 'google'
      }
    };

    const received = await createShurl(ctx, Shurl);
    const expected = {
      error: 'invalid URL'
    };

    expect(received).toEqual(expected);
  });

  it('should return error if url is missing', async () => {
    const _doc = {
      _id: 250,
      original_url: 'http://www.google.com'
    };

    mockingoose.Shurl.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const ctx = {
      origin: 'http://www.shurl.com',
      path: '',
      query: {}
    };

    const received = await createShurl(ctx, Shurl);
    const expected = {
      error: 'missing URL'
    };

    expect(received).toEqual(expected);
  });
});
