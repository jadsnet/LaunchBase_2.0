const { age, date } = require('../../lib/utils');
const Dog = require('../models/Dog');

module.exports = {
  index(request, response)  {
    Dog.all(function(dogs) {

    return response.render('dogs/index', { dogs })
    })
  },

  create(request, response) {
    return response.render('dogs/create')

  },

  post(request, response)   {
    const keys = Object.keys(request.body)

    for(key of keys) {
      if(request.body[keys] == ""){
      return response.send("Por favor preencha todos os campos");
      }
    }

    Dog.create(request.body, function(dogs) {
      return response.redirect(`/dogs/${dog.id}`)
    })
  },

  show(request, response) {
    Dog.find(request.params.id, function(dog) {
      if(!dog) return response.send('Pet não encontrado')

      dog.age = age(dog.birth)
      dog.abiliity = dog.abiliity.split(',')
      dog.vaccine = date(dog.vaccine).format

      return response.render('dogs/show', { dog })
    })

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
  
