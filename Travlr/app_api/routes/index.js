const express = require('express');
const router = express.Router();
const validateTrip = (req, res, next) => {
    const { code, name, description } = req.body;

    if (!code || !name || !description) {
        return res.status(400).json({
            message: 'Code, name, and description are required.'
        });
    }

    next();
};

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

const passport = require('passport');
require('../config/passport');

// AUTH ROUTES
router.post('/register', authController.register);
router.post('/login', authController.login);

// PUBLIC ROUTES
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripId', tripsController.tripsFindById);

// PROTECTED ROUTES
router.post(
  '/trips',
  passport.authenticate('jwt', { session: false }),
validateTrip,
tripsController.tripsAddTrip
);

router.put(
  '/trips/:tripId',
  passport.authenticate('jwt', { session: false }),
validateTrip,
tripsController.tripsUpdateTrip
);

router.delete(
  '/trips/:tripId',
  passport.authenticate('jwt', { session: false }),
  tripsController.tripsDeleteTrip
);

module.exports = router;