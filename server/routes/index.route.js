const express = require('express');
const userRoutes = require('./user.route');
const authRoutes = require('./auth.route');
const snapRoutes = require('./snap.route');
const tripRoutes = require('./trip.route')

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/snap', snapRoutes);
router.use('/trip', tripRoutes);

module.exports = router;
