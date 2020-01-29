import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const update: Listr.ListrTask<GlobalContext> = {
  title: 'update',
  task: async (ctx) => {
    const response = await ctx.http.put(`/profiles/me`, { name: 'Roz' })
    assert(response.status === 200, `Expected ${response.status} to be 200`)
    assert(response.data.name === 'Roz', `Name did not change (received ${response.data.name})`)
  }
}

export default update
