import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const update: Listr.ListrTask<GlobalContext> = {
  title: 'update',
  task: async (ctx) => {
    const response = await ctx.http.put(`/groups/${ctx.groupId}`, { name: 'Test group 2' })
    assert(response.status === 200, `Expected ${response.status} to equal 200`)
    assert(response.data.name === 'Test group 2', `Expected ${response.data.name} to be "Test group 2"`)
  }
}

export default update
