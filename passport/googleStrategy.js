const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const user = require('../schemas/user');
const set = require('../schemas/set');
// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
module.exports = (passport) => {
  console.log('google passport');
  passport.use(new GoogleStrategy({
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_KEY,
      callbackURL: "/auth/google/callback"
    }, async function (token, tokenSecret, profile, done) {
        // User.findOrCreate({ googleId: profile.id }, function (err, user) {
        //   return done(err, user);
        // });
        try{
          console.log('token',token);
          console.log(profile.emails[0].value);
          const exUser = await user.find({email: profile.emails[0].value});
          if(typeof exUser !== 'undefined' && exUser.length > 0){
            done(null, exUser);
          }
          else{
            console.log('email find', profile._json);
            //신규 유저 가입
            const newUser = await user.create({
              email: profile.emails[0].value,
              nick: profile.displayName,
              provider: 'google',
            });
            console.log('새 유저는',newUser);
            //개인 페이지 전용 셋 생성?
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
    }
  ));
}
