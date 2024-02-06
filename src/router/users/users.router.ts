import { Router } from 'express';
import { body } from 'express-validator';
import { handleValidationErrors, isAdmin, isAuthorized } from '../../middleware';
import {
  activate,
  createEntity,
  getOne,
  getAll,
  login,
  removeEntity,
} from './users.controller';

const users = Router();

users
  .get('/', isAuthorized, getAll)
  .get('/:id', isAuthorized, getOne)
  .post(
    '/',
    [
      body('email').exists().isEmail(),
      body('username').exists().isString(),
      body('password').exists().isString(),
      handleValidationErrors,
    ],
    createEntity,
  )
  .post('/login', login)
  .put('/:id/activate', [isAuthorized, isAdmin], activate)
  .delete('/:id', [isAuthorized, isAdmin], removeEntity);

export default users;
