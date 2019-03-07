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
  });
  
});