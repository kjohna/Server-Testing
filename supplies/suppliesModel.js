const db = require('../dbConfig.js');

module.exports = {
  insert,
  getAll,
  getById,
  remove,
}

async function insert(supply) {
  const [id] = await db('supplies').insert(supply);
  return db('supplies').where({ id }).first();
}

function getAll() {
  return db('supplies');
}

async function getById(id) {
  return db('supplies').where({ id }).first();
}

async function remove(id) {
  return db('supplies').where({ id }).del();
}