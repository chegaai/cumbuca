import Listr from 'listr'
import msUsers from './ms-users'
import msGroups from './ms-groups'
import msEvents from './ms-events'
import msProfiles from './ms-profiles'
import { GlobalContext } from '../../types/GlobalContext'
import msCertificates from './ms-certificates'
import msTemplates from './ms-template'

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
    },
    {
      title: 'ms-templates',
      task: msTemplates
    },
    {
      title: 'ms-certificates',
      task: msCertificates
    }
  ]
)

export default microservices
