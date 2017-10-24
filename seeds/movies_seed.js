exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movie_actors').del()
    .then(() => {
      return knex('actors').del()
    })
    .then(() => {
      return knex('movies').del()
    })
    .then(() => {
      return knex('movies').insert([
        {id: 1, title: 'Movie 1', genre: 'horror' },
        {id: 2, title: 'Movie 2', genre: 'sci-fi' },
        {id: 3, title: 'Movie 3', genre: 'action' },
      ])
    })
    .then(() => {
      return knex('actors').insert([
        {id: 1, first_name: 'Tom', last_name: 'Hanks' },
        {id: 2, first_name: 'Denzel', last_name: 'Washington' },
        {id: 3, first_name: 'Harrison', last_name: 'Ford' },
      ])
    })
    .then(() => {
      return knex('movie_actors').insert([
        { id: 1, movie_id: 1, actor_id: 1 },
        { id: 2, movie_id: 1, actor_id: 2 },
        { id: 3, movie_id: 2, actor_id: 2 },
        { id: 4, movie_id: 2, actor_id: 3 },
        { id: 5, movie_id: 3, actor_id: 2 },
      ])
    })
};
