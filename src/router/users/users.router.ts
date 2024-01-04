import { Router } from 'express';
import { body } from 'express-validator';
import { handleValidationErrors, isAdmin, isAuthorized } from '../../middleware';
import { activate, create, get, getAll, login, remove } from './users.controller';

const users = Router();

users
  .get('/', isAuthorized, getAll)
  .get('/:id', isAuthorized, get)
  .post(
    '/',
    [
      body('email').exists().isEmail(),
      body('username').exists().isString(),
      body('password').exists().isString(),
      handleValidationErrors,
    ],
    create,
  )
  .post('/login', login)
  .put('/:id/activate', [isAuthorized, isAdmin], activate)
  .delete('/:id', [isAuthorized, isAdmin], remove);

export default users;
