import jwt from 'jsonwebtoken';

export const isAuthorized = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401).json({ message: 'not authorized' });
    return;
  }

  const [, token] = bearer.split(' ');

  if (!token) {
    res.status(401).json({ message: 'not authorized' });
    return;
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET as string);

    next();
  } catch (error) {
    console.error(error);

    res.status(401).json({ message: 'not authorized' });
    return;
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user.role !== 'ADMIN') {
    res.status(401).json({ message: 'not authorized' });
    return;
  }

  next();
};
