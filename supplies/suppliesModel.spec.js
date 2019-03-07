const db = require('../dbConfig.js');
const Supplies = require('./suppliesModel');

describe('supplies model', () => {

  describe('insert', () => {
    // clean up after each test
    afterEach(async () => {
      await db('supplies').truncate();
    });

    it('should insert, return provided supply', async () => {
      let supply = await Supplies.insert({ name: 'pencil' });
      expect(supply.name).toBe('pencil');

      // try a second supply to ensure correct supply is inserted, returned
      supply = await Supplies.insert({ name: 'scissors' });
      expect(supply.name).toBe('scissors');
    });

    it('should insert all provided supplies into the db', async () => {
      await Supplies.insert({ name: 'pen' });
      await Supplies.insert({ name: 'tape' });

      const supplies = await db('supplies');
      expect(supplies).toHaveLength(2);
    });
  }); // end insert

  describe('get', () => {
    // clean up after
    afterEach(async () => {
      await db('supplies').truncate();
    });

    it('should getAll inserted data from db', async () => {
      await Supplies.insert({ name: 'pen' });
      await Supplies.insert({ name: 'tape' });
      await Supplies.insert({ name: 'ruler' });

      let res = await Supplies.getAll();
      expect(res).toHaveLength(3);
    })

    it('should getById', async () => {
      // insert 2 supplies, make sure we get back the first by its id
      const first = await Supplies.insert({ name: 'pencil' });
      await Supplies.insert({ name: 'ruler' });
      const getSupply = await Supplies.getById(first.id);
      expect(getSupply.name).toEqual('pencil');
    });
  }); // end get
});