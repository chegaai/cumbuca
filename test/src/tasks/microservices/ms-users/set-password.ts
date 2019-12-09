import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const setPassword: Listr.ListrTask = {
  title: 'set password',
  task: async (ctx: GlobalContext) => {
    const payload = {
      newPassword: 'testPassword2',
      oldPassword: 'testPassword'
    }

    const response = await ctx.http.put('/users/me/password', payload)
    assert(response.status === 200, `Expected ${response.status} to be 200`)
  }
}

export default setPassword
