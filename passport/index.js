const kakao = require('./kakaoStrategy');
const user = require('../schemas/user');

module.exports = (passport) => {
  passport.serializeUser((user, done)=>{
    console.log('index.js1', user);
    if(Array.isArray(user)){
      done(null, user[0]._id);
    }
    else{
      done(null, user._id);
    }
  });
  passport.deserializeUser((id, done)=>{
    user.findById(id)
    .then(user=>done(null, user))
    .catch(err=>done(err));
  });
  kakao(passport);
};
