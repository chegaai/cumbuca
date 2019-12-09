import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const joinGroup: Listr.ListrTask<GlobalContext> = {
  title: 'join group',
  task: async (ctx) => {
    const response = await ctx.http.post(`/profiles/${ctx.userId}/groups`, { id: ctx.groupId })
    assert(response.status === 200, `Expected ${response.status} to be 200`)
    assert(response.data.groups.includes(ctx.groupId))
  },
  skip: ctx => ctx.groupId ? false : 'No groupId in context'
}

export default joinGroup
