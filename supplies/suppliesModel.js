const db = require('../dbConfig.js');

module.exports = {
  insert,
}

async function insert(supply) {
  const [id] = await db('supplies').insert(supply);
  return db('supplies').where({ id }).first();
}