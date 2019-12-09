import Listr from 'listr'
import assert from 'assert'
import { AxiosResponse } from 'axios'
import { GlobalContext } from '../../../types/GlobalContext'

const ok = (err: any) => err.response as AxiosResponse

const privateEndpoints = () => new Listr<GlobalContext>([
  {
    title: 'list all',
    task: async (ctx) => {
      const response = await ctx.http.get('/users').catch(ok)
      assert(response.status === 401, `Expected ${response.status} to be 401`)
    }
  },
  {
    title: 'find',
    task: async (ctx) => {
      const response = await ctx.http.get(`/users/${ctx.userId}`).catch(ok)
      assert(response.status === 401, `Expected ${response.status} to be 401`)
    }
  }
])

export default privateEndpoints
