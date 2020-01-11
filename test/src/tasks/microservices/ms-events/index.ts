import Listr from 'listr'
import create from './create'
import { addRSVP } from './addRSVP'

const msEvents = () => new Listr([
  create,
  addRSVP
])

export default msEvents


