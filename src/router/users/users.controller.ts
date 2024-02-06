import { Response } from 'express';
import { User } from '@prisma/client';
import prisma from '../../db';
import { comparePasswords, createJWT, hashPassword } from '../../modules/auth';

export const getAll = async (req: any, res: Response) => {
  const users = await prisma.user.findMany({
    where: {
      active: true,
    },
    select: {
      id: req.user.role === 'ADMIN',
      username: true,
      email: true,
      role: req.user.role === 'ADMIN',
      createdAt: true,
    },
  });

  res.status(200).json(users);
};

export const getOne = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.params.id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: req.user.role === 'ADMIN',
      active: req.user.role === 'ADMIN',
      createdAt: true,
      updatedAt: true,
    },
  });

  res.status(200).json({ data: user });
};

export const createEntity = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        email: req.body.email,
        password: await hashPassword(req.body.password),
      },
    });

    const { id, username, email } = user;

    res.status(201).json({ id, username, email });
  } catch (e) {
    e.type = 'input';
    next(e);
  }
};

export const login = async (req, res) => {
  // allow username or email identifier as both are unique
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ username: req.body.user }, { email: req.body.user }],
    },
  });

  if (!user) {
    res.status(401).json({ message: 'invalid credentials' });
    return;
  }

  const valid = await comparePasswords(req.body.password, user.password);

  if (!valid) {
    res.status(401).json({ message: 'invalid credentials' });
    return;
  }

  // they are who they say they are, but are not active in the system
  if (!user.active) {
    res.status(401).json({ message: 'your account has not been activated' });
    return;
  }

  const token = createJWT(user);

  res.status(200).json({ token });
};

export const removeEntity = async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      active: false,
    },
  });

  res.status(200).json({ message: 'account deactivated' });
};

export const activate = async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.params.id,
    },
    data: {
      active: true,
    },
  });

  res.status(200).json({ message: 'account activated' });
};
