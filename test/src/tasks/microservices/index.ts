import Listr from 'listr'
import msUsers from './ms-users'
import msGroups from './ms-groups'
import msEvents from './ms-events'
import msProfiles from './ms-profiles'
import { GlobalContext } from '../../types/GlobalContext'

const microservices = () => new Listr<GlobalContext>(
  [
    {
      title: 'ms-users',
      task: msUsers
    },
    {
      title: 'ms-groups',
      task: msGroups
    },
    {
      title: 'ms-profiles',
      task: msProfiles
    },
    {
      title: 'ms-events',
      task: msEvents
    }
  ]
)

export default microservices
