import Listr from 'listr'
import { create } from './create'

const msCertificates = () => new Listr([
  create
])

export default msCertificates


