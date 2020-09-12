const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/User');
const isProduction = process.env.NODE_ENV === 'production';
<<<<<<< HEAD
console.log(process.env.MY_PASSWORD)
const secretOrKey = isProduction ? process.env.JWT_SECRET_PROD : process.env.JWT_SECRET_DEV;

=======
const secretOrKey = isProduction
  ? process.env.JWT_SECRET_PROD
  : process.env.JWT_SECRET_DEV;
>>>>>>> 2599f61831e941bed2bd0f6e423a4370a1ad100d

const jwtLogin = new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromHeader('x-auth-token'),
    secretOrKey,
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.id);

      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    } catch (err) {
      done(err, false);
    }
  }
);

passport.use(jwtLogin);
