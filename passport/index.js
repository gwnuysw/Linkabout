const kakao = require('./kakaoStrategy');
const {user} = require('../schemas');

module.exports = (passport) => {
  pssport.serializeUser((user, done)=>{
    done(null, user.id);
  });
  passport.deserializeUser((id, done)=>{
    user.findById(id)
    .then(user=>done(null, user));
    .catch(err=>done(err));
  });
  kakao(passport);
}
