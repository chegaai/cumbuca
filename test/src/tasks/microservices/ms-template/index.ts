import Listr from 'listr'
import { create } from './create'

const msTemplates = () => new Listr([
  create
])

export default msTemplates


