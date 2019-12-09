import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const login: Listr.ListrTask<GlobalContext> = {
  title: 'login',
  task: async (ctx) => {
    const payload = {
      handle: 'testuser',
      password: 'testPassword'
    }

    const response = await ctx.http.post('/users/login', payload)
    assert(response.status === 200, `Expected ${response.status} to be 200`)
    assert(!!response.data.token, 'No token returned')

    ctx.token = response.data.token
    ctx.http.interceptors.request.use(config => {
      config.headers['Authorization'] = `Bearer ${ctx.token}`
      return config
    })
  }
}

export default login
