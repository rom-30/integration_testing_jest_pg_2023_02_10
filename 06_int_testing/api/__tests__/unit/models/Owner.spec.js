const Owner = require('../../../models/Owner');
const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig/init');

describe('Owner', () => {
  beforeEach(() => jest.clearAllMocks())

  afterAll(() => jest.resetAllMocks())

  describe('dogs', () => {
    test('it resolves with dogs on successful db query', async () => {
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({
          rows: [{ id: 1, name: 'd1' }, { id: 2, name: 'd2' }]
        })

      let testOwner = new Owner({ id: 1, name: 'Test Owner' })
      const dogs = await testOwner.dogs;
      expect(dogs).toHaveLength(2)
    })
  });

  describe('findById', () => {
    test('it resolves with owner on successful db query', async () => {
      let ownerData = { id: 1, name: 'Test Owner' }
      jest.spyOn(db, 'query')
        .mockResolvedValueOnce({ rows: [ownerData] });
      const result = await Owner.findById(1);
      expect(result).toBeInstanceOf(Owner)
    })
  });

})
