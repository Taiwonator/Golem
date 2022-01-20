module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a6ff97d406e80465d87d38b96d691691'),
  },
});
