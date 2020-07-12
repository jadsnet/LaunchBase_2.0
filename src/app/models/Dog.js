const { date, date_nasc, date_v, age } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM dogmanager`, function(err, results) {
      if(err) return Response.send('Erro no Banco de Dados!');

      return callback(results.rows);
    })

  },

  create(data, callback) {

    const query = `
      INSERT INTO dogs (
        name,
        avatar_url,
        birth,
        breed,
        gender,
        abiliity,
        vaccine
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETUNRING id
    `
    const values = [
      request.body.name,
      request.body.avatar_url,
      request.body.breed,
      request.body.abiliity,
      date_nasc(request.body.birth),
      date_v(request.body.vaccine)
    ]
  },

  find(id, callback) {
    db.query(`
      SELECT * FROM dogs WHERE id = $1`, 
      function(err, results) {
        if(err) return Response.send('Erro no Banco de dados!');

        callback(results.rows[0]);
    })
  }
}