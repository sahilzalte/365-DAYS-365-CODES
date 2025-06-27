import express from 'express';
import { register, login } from '../controllers/authController.js';
import { verifyToken, isAdmin, isDoctor } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/admin/dashboard', verifyToken, isAdmin, (req, res) => {
  res.json({ msg: 'Welcome Admin' });
});
router.get('/doctor/dashboard', verifyToken, isDoctor, (req, res) => {
  res.json({ msg: 'Welcome Doctor' });
});
router.get('/user/dashboard', verifyToken, (req, res) => {
  res.json({ msg: 'Welcome User' });
});

export default router;
