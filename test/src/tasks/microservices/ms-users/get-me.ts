import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const expectedFields = [
  'id',
  'username',
  'email',
  'document',
  'role',
  'createdAt',
  'updatedAt',
  'deletedAt'
]

const getMe: Listr.ListrTask<GlobalContext> = {
  title: 'get me',
  task: async (ctx) => {
    const response = await ctx.http.get('/users/me')
    assert(response.status === 200, `Expected ${response.status} to be 200`)

    for (const key of expectedFields) {
      assert(Object.keys(response.data).includes(key), `Expected response to contain ${key}`)
    }

    assert(!Object.keys(response.data).includes('password'), `Response includes password`)
  }
}

export default getMe
