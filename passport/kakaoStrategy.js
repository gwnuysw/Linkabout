const KakaoStrategy = require('passport-kakao').Strategy;

const user = require('../schemas/user');
const set = require('../schemas/set');
module.exports = (passport) => {
  passport.use(new KakaoStrategy({
    clientID: process.env.KAKAO_ID,
    callbackURL: '/auth/kakao/callback',
  }, async (accessToken, refreshToken, profile, done) => {
    try{
      const exUser = await user.find({id: profile.id, provider: 'kakao'});
      if(typeof exUser !== 'undefined' && exUser.length > 0){
        done(null, exUser);
      }
      else{
        const newUser = await user.create({
          email: profile._json && profile._json.kaccount_email,
          nick: profile.displayName,
          id: profile.id,
          provider: 'kakao',
        });
        console.log('새 유저는',newUser);
        let newpersonalset = new set({
          title : profile.displayName,
          ancestor : '5c358828c7f4dc540bcda0df',
          ancestortitle : 'LinkAbout',
          createdBy : profile.displayName,
          personal : newUser._id,
          views : 0,
        });
        newpersonalset.save()
        .then((result)=>{
          done(null, newUser);
        })
      }
    }
    catch(error){
      console.error(error);
      done(error);
    }
  }));
};
