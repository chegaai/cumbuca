import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const listAll: Listr.ListrTask<GlobalContext> = {
  title: 'list all',
  task: async (ctx) => {
    const response = await ctx.http.get('/groups')
    assert(Array.isArray(response.data), `Expected ${response.data} to be an array`)
    assert(response.data.length === 1, `Expected ${response.data.length} to be 1`)
  }
}

export default listAll
