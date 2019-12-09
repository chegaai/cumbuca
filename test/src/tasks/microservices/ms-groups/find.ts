import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const find: Listr.ListrTask<GlobalContext> = {
  title: 'find',
  task: async (ctx) => {
    const response = await ctx.http.get(`/groups/${ctx.groupId}`)
    assert(response.status === 200)
  }
}

export default find
