/* eslint-disable no-underscore-dangle */
import mockingoose from 'mockingoose';
import doISearch from './do-i-search';
import ISearch from './models/isearch';

const fetch = require('jest-fetch-mock');

describe('doISearch function', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return search results when there is no offset', async () => {
    const _doc = { term: 'testing', when: Date.now() };

    mockingoose.ISearch.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const results = {
      items: [
        {
          title: 'item 1',
          link: 'http://item1.com/item1.jpg',
          image: { contextLink: 'http://item1.com' }
        },
        {
          title: 'item 2',
          link: 'http://item2.com/item2.jpg',
          image: { contextLink: 'http://item2.com' }
        },
        {
          title: 'item 3',
          link: 'http://item3.com/item3.jpg',
          image: { contextLink: 'http://item3.com' }
        },
        {
          title: 'item 4',
          link: 'http://item4.com/item4.jpg',
          image: { contextLink: 'http://item4.com' }
        }
      ]
    };

    fetch.mockResponse(JSON.stringify(results));

    const query = { term: 'testing' };

    const received = await doISearch(query, ISearch, fetch);
    const expected = [
      {
        imageUrl: 'http://item1.com/item1.jpg',
        altText: 'item 1',
        pageUrl: 'http://item1.com'
      },
      {
        imageUrl: 'http://item2.com/item2.jpg',
        altText: 'item 2',
        pageUrl: 'http://item2.com'
      },
      {
        imageUrl: 'http://item3.com/item3.jpg',
        altText: 'item 3',
        pageUrl: 'http://item3.com'
      },
      {
        imageUrl: 'http://item4.com/item4.jpg',
        altText: 'item 4',
        pageUrl: 'http://item4.com'
      }
    ];

    expect(received).toEqual(expected);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `https://www.googleapis.com/customsearch/v1?q=testing&cx=${
        process.env.CSE_CX
      }&key=${process.env.CSE_KEY}&start=1&num=10&searchType=image`
    );
  });

  it('should return search results when there is an offset', async () => {
    const _doc = { term: 'testing', when: Date.now() };

    mockingoose.ISearch.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const results = {
      items: [
        {
          title: 'item 2',
          link: 'http://item2.com/item2.jpg',
          image: { contextLink: 'http://item2.com' }
        },
        {
          title: 'item 3',
          link: 'http://item3.com/item3.jpg',
          image: { contextLink: 'http://item3.com' }
        },
        {
          title: 'item 4',
          link: 'http://item4.com/item4.jpg',
          image: { contextLink: 'http://item4.com' }
        }
      ]
    };

    fetch.mockResponse(JSON.stringify(results));

    const query = { term: 'testing', offset: '1' };

    const received = await doISearch(query, ISearch, fetch);
    const expected = [
      {
        imageUrl: 'http://item2.com/item2.jpg',
        altText: 'item 2',
        pageUrl: 'http://item2.com'
      },
      {
        imageUrl: 'http://item3.com/item3.jpg',
        altText: 'item 3',
        pageUrl: 'http://item3.com'
      },
      {
        imageUrl: 'http://item4.com/item4.jpg',
        altText: 'item 4',
        pageUrl: 'http://item4.com'
      }
    ];

    expect(received).toEqual(expected);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch.mock.calls[0][0]).toEqual(
      `https://www.googleapis.com/customsearch/v1?q=testing&cx=${
        process.env.CSE_CX
      }&key=${process.env.CSE_KEY}&start=2&num=10&searchType=image`
    );
  });

  it('should return error when there is no term', async () => {
    const _doc = { term: 'testing', when: Date.now() };

    mockingoose.ISearch.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const results = {
      items: [
        {
          title: 'item 1',
          link: 'http://item1.com/item1.jpg',
          image: { contextLink: 'http://item1.com' }
        },
        {
          title: 'item 2',
          link: 'http://item2.com/item2.jpg',
          image: { contextLink: 'http://item2.com' }
        },
        {
          title: 'item 3',
          link: 'http://item3.com/item3.jpg',
          image: { contextLink: 'http://item3.com' }
        },
        {
          title: 'item 4',
          link: 'http://item4.com/item4.jpg',
          image: { contextLink: 'http://item4.com' }
        }
      ]
    };

    fetch.mockResponse(JSON.stringify(results));

    const query = {};

    const received = await doISearch(query, ISearch, fetch);
    const expected = { error: 'missing search term' };
    expect(received).toEqual(expected);
  });

  it('should return error when there is an invalid offset', async () => {
    const _doc = { term: 'testing', when: Date.now() };

    mockingoose.ISearch.toReturn(_doc, 'save').toReturn(_doc, 'findOne');

    const results = {
      items: [
        {
          title: 'item 1',
          link: 'http://item1.com/item1.jpg',
          image: { contextLink: 'http://item1.com' }
        },
        {
          title: 'item 2',
          link: 'http://item2.com/item2.jpg',
          image: { contextLink: 'http://item2.com' }
        },
        {
          title: 'item 3',
          link: 'http://item3.com/item3.jpg',
          image: { contextLink: 'http://item3.com' }
        },
        {
          title: 'item 4',
          link: 'http://item4.com/item4.jpg',
          image: { contextLink: 'http://item4.com' }
        }
      ]
    };

    fetch.mockResponse(JSON.stringify(results));

    const query = { term: 'testing', offset: 'larry' };

    const received = await doISearch(query, ISearch, fetch);
    const expected = { error: 'offset must be integer' };
    expect(received).toEqual(expected);
  });
});
