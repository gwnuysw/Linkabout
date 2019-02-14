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
        console.log('email find', profile._json, profile._json.kaccout_email);
        const newUser = await user.create({
          email: profile._json && profile._json.kaccount_email,
          nick: profile.displayName,
          id: profile.id,
          provider: 'kakao',
        });
        console.log('새 유저는',newUser);
        set.find({ancestor:null})
        .then((rootset)=>{
          console.log("login borblem",rootset);
          let newpersonalset = new set({
            title : profile.displayName,
            ancestor : rootset[0]._id,
            ancestortitle : rootset[0].title,
            createdBy : profile.displayName,
            personal : newUser._id,
            views : 0,
          });
          newpersonalset.save()
          .then((result)=>{
            done(null, newUser);
          })
        });
      }
    }
    catch(error){
      console.error(error);
      done(error);
    }
  }));
};
