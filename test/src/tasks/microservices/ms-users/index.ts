import Listr from 'listr'
import login from './login'
import getMe from './get-me'
import createUser from './create-user'
import setPassword from './set-password'
import changeUsername from './change-username'
import privateEndpoints from './private-endpoints'

// Do not change the order of the items below
const msUsers = () => new Listr([
  createUser,
  login,
  setPassword,
  getMe,
  changeUsername,
  {
    title: 'private endpoints',
    task: privateEndpoints
  }
])

export default msUsers
