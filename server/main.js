import {createUser,updateUser,deleteUser,findUser,filterUser} from './bussinessModel/user';

let user = {
  username: 'ackenaten',
  email: 'ackenaten@gmail.com',
  pasword: 'qukiwjump',
  first_name: 'ackenaten',
  last_name: 'testlast'
}

createUser(user).then(response => {
  console.log(response);
});
