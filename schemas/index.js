const mongoose = require('mongoose');

module.exports = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    //내컴퓨터에서 실행 되는 테스트용 db
    //mongoose.connect('mongodb://seokwon:1q2w3e!23@localhost:27017/admin', {

    //mongodb 사이트에서 실행되는 배포 앱용 db
    mongoose.connect('mongodb://linkaboutuser:1q2w3e!23@cluster0.mongodb.net/admin', { 
      dbName: 'LinkAbout',
    }, (error) => {
      if (error) {
        console.log('몽고디비 연결 에러', error);
      } else {
        console.log('몽고디비 연결 성공');
      }
    });
  };
  connect();
  mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
  });
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
  });

  require('./user');
};
