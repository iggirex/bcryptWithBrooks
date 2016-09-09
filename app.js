const bcrypt = require('bcrypt')

// const user = require('../db/user')//require knex

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash('girls is hot', salt, (err, hash) => {
    // user('user').insert({password: hash}) // putting user's password into db
    console.log(hash)
  })
})

// bcrypt.compare('hello', '$2a$10$dBfmEPpxhzdrhaShYXMqT.zR0agfkHooC.s9zBcP7TlrasSQ4KyTi', (err, isMatch) => {
//   console.log('is a match: ', isMatch)
// })

bcrypt.compare('idontlikeiggy', '$2a$10$iOam7K64ELpr88PZMC4VSu2Quk1SI8g8fLhNx2lCekCzpqpXP5dKW', (err, isMatch) => {
  console.log(' SUCCESS is a match: ', isMatch)
})
