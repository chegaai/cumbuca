import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const create: Listr.ListrTask<GlobalContext> = {
  title: 'create group',
  task: async (ctx, task) => {
    const payload = {
      name: 'Test group',
      description: 'Some testing group',
      tags: [],
      location: {
        city: 'São Paulo',
        state: 'São Paulo',
        country: 'Brasil'
      },
      pictures: { profile: '', banner: '' },
      socialNetworks: [],
      organizers: []
    }

    const response = await ctx.http.post('/groups', payload)
    assert(response.status === 201, `Expected ${response.status} to be 201`)

    ctx.groupId = response.data.id
    task.title += `: ${ctx.groupId}`
  }
}

export default create
