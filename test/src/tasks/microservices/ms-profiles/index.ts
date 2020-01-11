import find from './find'
import Listr from 'listr'
import update from './update'
import search from './search'
import joinGroup from './join-group'
import leaveGroup from './leave-group'

const msProfiles = () => new Listr([
  search,
  find,
  update,
  joinGroup,
  leaveGroup
])

export default msProfiles
