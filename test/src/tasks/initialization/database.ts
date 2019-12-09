import Listr from 'listr'
import { GlobalContext } from '../../types/GlobalContext'

function clean (collection: string): Listr.ListrTask<GlobalContext> {
  return {
    title: collection,
    task: async (ctx) => {
      await ctx.mongodb.db.collection(collection).remove({})
    }
  }
}

export const tasks = [
  clean('users'),
  clean('profiles'),
  clean('groups'),
  clean('events')
]

const database = () => new Listr<GlobalContext>([
  {
    title: 'cleanup',
    task: () => new Listr<GlobalContext>(tasks)
  }
])

export default database
