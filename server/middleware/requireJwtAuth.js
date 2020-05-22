const passport = require('passport');


const requireJwtAuth = passport.authenticate('jwt', { session: false });

export default requireJwtAuth;
