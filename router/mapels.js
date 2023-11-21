const express = require('express')
const router = express.Router()
const usercontroller = require('../controllers/mapels')

router.get('/mapels', usercontroller.index)

router.get('/mapel/:id', usercontroller.show)

  router.post('/mapel', usercontroller.store)

  router.put('/mapel/:id', usercontroller.update)
  
  router.delete('/mapel/:id', usercontroller.delete)

  module.exports = router