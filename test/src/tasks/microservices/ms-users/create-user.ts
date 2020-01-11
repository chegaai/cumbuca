import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const createUser: Listr.ListrTask<GlobalContext> = {
  title: 'create user',
  task: async (ctx, task) => {
    const payload = {
      user: {
        username: 'testuser',
        password: 'testPassword',
        email: 'test@email.com',
        document: '123456789'
      },
      profile: {
        language: 'pt-BR',
        lastName: 'User',
        location: {
          city: 'São Paulo',
          country: 'Brasil',
          state: 'São Paulo'
        },
        name: 'John',
        picture: '',
        socialNetworks: [],
        groups: [],
        tags: []
      }
    }

    const response = await ctx.http.post('/users', payload)

    assert(response.status === 201, `Expected ${response.status} to be 201`)
    assert(!!response.data.user, `Expected ${response.data} to have a property 'user'`)
    assert(!!response.data.user.id, `Expected '${JSON.stringify(response.data.user)}' to have an 'id' property`)

    ctx.userId = response.data.user.id
    task.title = `${task.title}: ${ctx.userId}`
  }
}

export default createUser
