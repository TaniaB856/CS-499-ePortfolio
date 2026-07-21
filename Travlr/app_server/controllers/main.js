const index = (req, res) => {
  res.render('index', { title: 'Travlr Getaways' });
};

const login = (req, res) => {
  res.render('login', { title: 'Login' });
};

module.exports = {
  index,
  login
};