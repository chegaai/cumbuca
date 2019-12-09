import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const availability: Listr.ListrTask<GlobalContext> = {
  title: 'availability',
  task: async (ctx) => {
    const responseAvailable = await ctx.http.get('/profiles/availability?email=some@email.com')
    const responseNotAvailable = await ctx.http.get('/profiles/availability?email=test@email.com')

    assert(responseAvailable.data.available === true, `Expected ${responseAvailable.data.available} to be true`)
    assert(responseNotAvailable.data.available === false, `Expected ${responseAvailable.data.available} to be true`)
  }
}

export default availability
