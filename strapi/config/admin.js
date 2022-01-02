module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9bfb1a230f9fb2d13810ef038ad92d20'),
  },
});
