import find from './find'
import Listr from 'listr'
import update from './update'
import search from './search'
import joinGroup from './join-group'
import leaveGroup from './leave-group'
import availability from './availability'

const msProfiles = () => new Listr([
  search,
  availability,
  find,
  update,
  joinGroup,
  leaveGroup
])

export default msProfiles
