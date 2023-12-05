import express from 'express'
import accountController from '../controllers/usersController.js'
import { validateAccount, validateAccount2, verifySession } from '../middlewares/usersMiddleware.js'

const route = express.Router()

/// registro

//Crea un usuario
route.post('/', [validateAccount], accountController.createAccount)

// Trae los usuarios
route.get('/', accountController.getAccount)
// Eliminar usuario
route.delete('/:idUser', accountController.deleteAccount)
// editar usuario
route.put('/:idUser', accountController.updateAccount)


// auth/login
route.post('/session', [validateAccount2], accountController.login)
// logout
route.delete('/session', [verifySession], accountController.logout)

export default route