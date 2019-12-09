import PrettyError from 'pretty-error'
import Listr from 'listr'
import cleanup from './tasks/cleanup'
import microservices from './tasks/microservices'
import initialization from './tasks/initialization'
import { GlobalContext } from './types/GlobalContext'

const pe = new PrettyError()

const emptyContext: GlobalContext = {
  http: null as any,
  token: '',
  url: '',
  mongodb: {
    uri: '',
    dbName: '',
    connection: null as any,
    db: null as any
  },
  userId: '',
  groupId: '',
  eventId: ''
}

const initTasks = new Listr<GlobalContext>([
  {
    title: 'initialization',
    task: initialization
  }
])

const tasks = new Listr<GlobalContext>(
  [
    {
      title: 'microservices',
      task: microservices
    }
  ],
  // @ts-ignore: For some reason the types do not cover this
  { collapse: false }
)

const cleanupTasks = new Listr<GlobalContext>([
  {
    title: 'cleanup',
    task: cleanup
  }
])

initTasks.run(emptyContext)
  .then(ctx => tasks.run(ctx))
  .then(ctx => cleanupTasks.run(ctx))
  .catch(async err => {
    const { http, ...ctx } = await cleanupTasks.run(err.context)
    console.error('\n\n--- Tests failed. See details below ---')
    console.error(err.response?.data ?? pe.render(err))
    console.error('\n\n--- Context ---')
    console.error(ctx)
  })
