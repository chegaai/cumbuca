import Listr from 'listr'
import pings from './pings'
import config from './config'
import database from './database'
import { GlobalContext } from '../../types/GlobalContext'

const initialization = () => new Listr<GlobalContext>(
  [
    {
      title: 'config',
      task: config
    },
    {
      title: 'database',
      task: database
    },
    {
      title: 'pings',
      task: pings
    }
  ]
)

export default initialization
