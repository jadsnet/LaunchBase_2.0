const db = require('../../config/db');
const { date } = require('../../lib/utils');

module.exports = {
  all(callback) {
    db.query(`SELECT * FROM dogs`, function(err, results) {
      if (err) throw `Erro no Banco de Dados! ${err}`

     callback(results.rows);
    })

  },

  create(data, callback) {

    const query = `
      INSERT INTO dogs (
        name,
        avatar_url,        
        gender,
        breed,
        abiliity,
        birth,
        vaccine
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `
    const values = [
      data.name,
      data.avatar_url,      
      data.gender,
      data.breed,
      data.abiliity,
      date(data.birth).iso,
      date(data.vaccine).iso
    ]

    db.query(query, values, function(err, results) {
      if(err) throw `Erro no Banco de dados!${err}`

      callback(results.rows[0])
    })
  },

  find(id, callback) {
    db.query(`
      SELECT * FROM dogs WHERE id = $1`, [id],
      function(err, results) {
        if(err) throw `Erro no Banco de dados! ${err}`
        
        callback(results.rows[0]);
    })
  }
}