import Listr from 'listr'
import create from './create'
import { addRSVPByEmail } from './addRSVP'

const msEvents = () => new Listr([
  create,
  addRSVPByEmail
])

export default msEvents


