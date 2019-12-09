import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const leaveGroup: Listr.ListrTask<GlobalContext> = {
  title: 'leave group',
  task: async (ctx) => {
    const response = await ctx.http.delete(`/profiles/${ctx.userId}/groups/${ctx.groupId}`)
    assert(response.status === 204, `Expected ${response.status} to be 204`)
  },
  skip: ctx => ctx.groupId ? false : 'No gruopId in context'
}

export default leaveGroup
