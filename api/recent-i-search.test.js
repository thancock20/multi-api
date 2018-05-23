import mockingoose from 'mockingoose';
import recentISearch from './recent-i-search';
import ISearch from './models/isearch';

describe('recentISearch function', () => {
  it('should return recently searched items', async () => {
    const docs = [];
    for (let i = 1; i <= 20; i++) {
      docs.push({
        term: `term${i}`,
        when: `${i}`
      });
    }

    mockingoose.ISearch.toReturn(docs.reverse().slice(0, 10), 'find');

    const received = await recentISearch(ISearch);

    expect(received[0].term).toEqual('term20');
    expect(received[received.length - 1].term).toEqual('term11');
  });
});
