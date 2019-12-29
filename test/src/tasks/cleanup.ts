import Listr from 'listr'
import { tasks as clearCollectionTasks } from './initialization/database'
import { GlobalContext } from '../types/GlobalContext'

const cleanup = () => new Listr<GlobalContext>(
  [
    {
      title: 'database',
      task: () => new Listr<GlobalContext>([
        {
          title: 'collections',
          task: () => new Listr(clearCollectionTasks)
        },
        {
          title: 'connection',
          task: async (ctx) => {
            ctx.mongodb.connection.close()
          }
        }
      ]),
      skip: () => process.env.SKIP_FINAL_CLEANUP
    }
  ]
)

export default cleanup
