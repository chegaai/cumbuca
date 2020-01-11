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
          task: () => new Listr(clearCollectionTasks),
          skip: () => process.env.SKIP_FINAL_CLEANUP
        },
        {
          title: 'connection',
          task: async (ctx) => {
            ctx.mongodb.connection.close()
          }
        }
      ])
    }
  ]
)

export default cleanup
