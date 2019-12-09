import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const changeUsername: Listr.ListrTask = {
  title: 'change username',
  task: async (ctx: GlobalContext) => {
    const payload = {
      username: 'rj.munhoz'
    }

    const response = await ctx.http.put('/users/me', payload)
    assert(response.status === 200, `Expected ${response.status} to be 200`)
    assert(response.data.username === 'rj.munhoz', `Expected ${response.data.username} to be rj.munhoz`)
  }
}

export default changeUsername
