const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscription');
const authMiddleware = require('../middleware/auth');

// Create a new subscription
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { serviceName, cost, renewalDate, category, paymentMethod, autoDetected } = req.body;

    const newSubscription = new Subscription({
      userId: req.user.id,
      serviceName,
      cost,
      renewalDate,
      category,
      paymentMethod,
      autoDetected: !!autoDetected
    });

    const savedSubscription = await newSubscription.save();
    res.status(201).json({ subscription: savedSubscription, msg: 'Subscription created successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Get all subscriptions for the authenticated user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const subscriptions = await Subscription.find({ userId: req.user.id });
    res.status(200).json({ subscriptions });
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching subscriptions', error: err.message });
  }
});

router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updatedSubscription = await Subscription.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );
    if (!updatedSubscription) {
      return res.status(404).json({ msg: 'Subscription not found' });
    }
    res.status(200).json({ subscription: updatedSubscription, msg: 'Subscription updated successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Error updating subscription', error: err.message });
  }
});

router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deletedSubscription = await Subscription.findOneAndDelete(
      { _id: req.params.id, userId: req.user.id }
    );
    if (!deletedSubscription) {
      return res.status(404).json({ msg: 'Subscription not found' });
    }
    res.status(200).json({ msg: 'Subscription deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting subscription', error: err.message });
  }
});

module.exports = router;