import {Users} from '../../connectors'

const createUser = async (data) => {
  // will add bussiness logic here
  const result = Users.create(data);
  return Promise.resolve(result);
}

const updateUser = async (data) => {

}

const deleteUser = async (data) => {

}

const findUser = async (id) => {

}

const filterUser = async (data) => {

}

export {
  createUser,
  updateUser,
  deleteUser,
  findUser,
  filterUser
}
