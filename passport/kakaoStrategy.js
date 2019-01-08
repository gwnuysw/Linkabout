const KakaoStrategy = require('passport-kakao').Strategy;

const user = require('../schemas/user');

module.exports = (passport) => {
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/auth/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try{
      console.log('kakao', user);
      const exUser = await user.find({id: profile.id, provider: 'kakao'});
      console.log('exUser',exUser[0].id);
      if(exUser){
        done(null, exUser);
      }
      else{
        const newUser = await user.create({
          email: profile._json && profile._json.kaccount_email,
          nick: profile.displayName,
          id: profile.id,
          provider: 'kakao',
        });
        done(null, newUser);
      }
    }
    catch(error){
      console.error(error);
      done(error);
    }
  }));
};
