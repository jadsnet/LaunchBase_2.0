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

    Dog.create(request.body, function(dog) {
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
  },

  edit(request, response)   {
    Dog.find(request.params.id, function(dog) {
      if(!dog) return response.send('Pet não encontrado')

      dog.birth = date(dog.birth).iso
      dog.vaccine = date(dog.vaccine).iso


      return response.render('dogs/edit', { dog })
    })

  },

  put(request, response)    {
    const keys = Object.keys(request.body)

    for(key of keys) {
      if(request.body[keys] == ""){
        return response.send("Por favor preencha todos os campos");
      }
    }
    Dog.update(request.body, function() {
      return response.redirect(`/dogs/${request.body.id}`)
    })

  },

  delete(request, response) {
    Dog.delete(request.body.id, function() {
      return response.redirect(`/dogs`)
    })
  }
}
  
