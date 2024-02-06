import { Router } from 'express';
import {
  createEntity,
  getOne,
  getAll,
  removeEntity,
  updateEntity,
} from './publishers.controller';

const publishers = Router();

publishers
  .get('/', getAll)
  .get('/:id', getOne)
  .post('/', createEntity)
  .put('/:id', updateEntity)
  .delete('/:id', removeEntity);

export default publishers;
