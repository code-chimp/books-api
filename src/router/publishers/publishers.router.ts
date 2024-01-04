import { Router } from 'express';
import { notImplementedHandler } from '../../modules/helpers';

const publishers = Router();

publishers
  .get('/', notImplementedHandler)
  .get('/:id', notImplementedHandler)
  .post('/', notImplementedHandler)
  .put('/:id', notImplementedHandler)
  .delete('/:id', notImplementedHandler);

export default publishers;
