import Listr from 'listr'
import create from './create'

const msEvents = () => new Listr([
  create
])

export default msEvents
