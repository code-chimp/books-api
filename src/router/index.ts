import { Router } from 'express';

import publishers from './publishers';
import users from './users';

const apiRoot = Router();

apiRoot.use('/publishers', publishers);
apiRoot.use('/users', users);

export default apiRoot;
