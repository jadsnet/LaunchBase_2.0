const { age,  date_nasc, date_v } = require('../../lib/utils');
const Vet = require('../models/Vet');

module.exports = {
  index(request, response)  {
    Vet.all(function(vets) {

    return response.render('vets/index', { vets })
    })
  },

  create(request, response) {
    return

  },

  post(request, response)   {
    const keys = Object.keys(request.body)

    for(key of keys) {
      if(request.body[keys] == ""){
      return response.send("Por favor preencha todos os campos");
      }
    }

    Vet.create(request.body, function(vets) {
      return response.redirect(`/vets/${vet.id}`)
    })
    return

  },

  show(request, response)   {
    return

  },

  edit(request, response)   {
    return

  },

  put(request, response)    {
    const keys = Object.keys(request.body)

    for(key of keys) {
      if(request.body[keys] == ""){
      return response.send("Por favor preencha todos os campos");
      }
    }
    return

  },

  delete(request, response) {
    return

  },

}
  
