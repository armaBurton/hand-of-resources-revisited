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

  it('should return a list of all TMNT characters', async () => {
    const expected = await TMNT.getAll();

    const res = await request(app).get('/api/v1/tmnt');

    expect(res.body).toEqual(expected);
  });

  it('should create a new TMNT character', async () => {
    const newCharacter = {
      name: 'April ONeil',
      creatureType: 'Human',
      weaponProficency: 'None',
      groupAffiliation: 'TMNT Ally',
      personality: ['Cheerful', 'Friendly', 'Hard Working'],
      alignment: 'Principled',
      stats: {
        IQ: '19',
        ME: '11',
        MA: '13',
        PS: '13',
        PP: '14',
        PE: '11',
        PB: '14',
        SPD: '13',
      },
    };

    const returnedCharacter = {
      id: expect.any(String),
      name: 'April ONeil',
      creatureType: 'Human',
      weaponProficency: 'None',
      groupAffiliation: 'TMNT Ally',
      personality: ['Cheerful', 'Friendly', 'Hard Working'],
      alignment: 'Principled',
      stats: {
        IQ: '19',
        ME: '11',
        MA: '13',
        PS: '13',
        PP: '14',
        PE: '11',
        PB: '14',
        SPD: '13',
      },
    };

    const res = await request(app).post('/api/v1/tmnt').send(newCharacter);

    expect(res.body).toEqual(returnedCharacter);
  });

  it('should return a character that matches the ID', async () => {
    const expected = {
      id: '1',
      name: 'Leonardo',
      creatureType: 'Turtle',
      weaponProficency: 'Katana',
      groupAffiliation: 'TMNT Member',
      personality: [
        'Super Straight',
        'Clever',
        'Fast Thinker',
        'Excellent Strategist and Tactician',
        'Impatient',
        'Perfectionist',
      ],
      alignment: 'Good',
      stats: {
        IQ: '16',
        ME: '16',
        MA: '17',
        PS: '15',
        PP: '20',
        PE: '18',
        PB: '11',
        SPD: '11',
      },
    };

    const res = await request(app).get('/api/v1/tmnt/1');

    expect(res.body).toEqual(expected);
  });

  it('should update a charcter that matches Id', async () => {
    const newCharacterIncorrectData = {
      name: 'April ONeil',
      creatureType: 'Human',
      weaponProficency: 'None',
      groupAffiliation: 'TMNT Ally',
      personality: ['Cheerful', 'Friendly', 'Hard Working'],
      alignment: 'Principled',
      stats: {
        IQ: '19',
        ME: '11',
        MA: '13',
        PS: '13',
        PP: '14',
        PE: '11',
        PB: '14',
        SPD: '13',
      },
    };

    const newCharacterCorrectData = {
      name: 'April ONeil',
      creatureType: 'Human',
      weaponProficency: 'None',
      groupAffiliation: 'TMNT Ally',
      personality: ['Cheerful', 'Friendly', 'Hard Working'],
      alignment: 'Good',
      stats: {
        IQ: '19',
        ME: '11',
        MA: '13',
        PS: '13',
        PP: '14',
        PE: '11',
        PB: '14',
        SPD: '13',
      },
    };

    await request(app).post('/api/v1/tmnt').send(newCharacterIncorrectData);

    const res = await request(app)
      .patch('/api/v1/tmnt/7')
      .send(newCharacterCorrectData);

    expect(res.body).toEqual({
      id: expect.any(String),
      ...newCharacterCorrectData,
    });
  });
});
