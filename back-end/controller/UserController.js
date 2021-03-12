const { Router } = require('express');
const UserService = require('../service/UserService');
// const { validateUser } = require('../middlewares/UserMiddleware'); 

const UserController = new Router();
const OK = 200;
const CREATED = 201;

// Get All Users
UserController.get('/', async (req, res) => {
  const users = await UserService.getAll();
  res.status(OK).json({ Users: users });
});

// Create New User
UserController.post('/', async (req, res) => {
  const { name, email, password, role } = req.body;
  await UserService.createNewUser(name, email, password, role);

  res.status(CREATED).json({ message: 'OK' });
});

// // Update Product
// UserController.put('/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, quantity } = req.body;

//   const { status, result } = await service.update(id, name, quantity);
//   if (status === 'NOK') {
//     return res.status(UNPROCESSABLE_ENTITY).json(responseError(result));
//   }
//   res.status(OK).json(result);
// });

// Delete Product
// UserController.delete('/:id', async (req, res) => {
//   const { id } = req.params;
  
//   const { status, result } = await service.remove(id);
//   if (status === 'NOK') {
//     return res.status(UNPROCESSABLE_ENTITY).json(responseError(result));
//   }
//   res.status(OK).json(result);
// });

// const responseError = (message) => {
//   return { err: { code: 'invalid_data', message } };
// };

module.exports = UserController;
