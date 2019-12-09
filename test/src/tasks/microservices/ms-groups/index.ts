import Listr from 'listr'
import find from './find'
import create from './create'
import update from './update'
import listAll from './list-all'

const msGroups = () => new Listr([
  create,
  find,
  listAll,
  update
])

export default msGroups
