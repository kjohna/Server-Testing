
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries, reset ids
  return knex('supplies').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('supplies').insert([
        {name: 'pencil'},
        {name: 'pen'},
        {name: 'scissors'},
      ]);
    });
};
