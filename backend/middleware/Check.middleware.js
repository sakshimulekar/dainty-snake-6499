
const checkSubscription = (req, res, next) => {
    const user = req.user;
    if (!user.subscriptionExpiration || user.subscriptionExpiration < Date.now()) {
      return res.status(401).json({ error: 'Subscription expired' });
    }
    next();
  };

module.export ={
    checkSubscription
}