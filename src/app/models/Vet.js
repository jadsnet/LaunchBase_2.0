const { date, date_nasc, date_v, age } = require('../../lib/utils');
const db = require('../../config/db');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM vetmanager`, function(err, results) {
      if(err) return Response.send('Erro no Banco de Dados!');

     callback(results.rows);
    })

  },

  create(data, callback) {

    const query = `
      INSERT INTO vets (
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
      data.name,
      data.avatar_url,
      data.breed,
      data.abiliity,
      date_nasc(request.body.birth),
      date_v(request.body.vaccine)
    ]
  },

  find(id, callback) {
    db.query(`
      SELECT * FROM vets WHERE id = $1`, 
      function(err, results) {
        if(err) return Response.send('Erro no Banco de dados!');

        callback(results.rows[0]);
    })
  }
}