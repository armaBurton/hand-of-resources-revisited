const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const TMNT = require('../lib/models/TMNT');

describe('hand-of-resources-revisited routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });

  it('should return a list of all dragons', async () => {
    const expected = await TMNT.getAll();

    const res = await request(app).get('/api/v1/tmnt');

    console.log('|| res.body >', res.body);
    expect(res.body).toEqual(expected);
  });
});
