import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const search: Listr.ListrTask<GlobalContext> = {
  title: 'search',
  task: async (ctx) => {
    const response = await ctx.http.get('/profiles')
    assert(Array.isArray(response.data), `Expected ${response.data} to be an array`)
    assert(response.data.length === 1, `Expected ${response.data} to have a single item`)
  }
}

export default search
