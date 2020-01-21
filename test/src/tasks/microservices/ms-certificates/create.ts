import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'


export const create: Listr.ListrTask<GlobalContext> = {
  title: 'Create certificate: ',
  task: async (ctx, task) => {
    const payload = {
      eventId: ctx.eventId,
      templateId: ctx.templateId
    }

    const response = await ctx.http.post(`/certificates`, payload)
    assert(response.status === 201, `Expected ${response.status} to be 201`)
    assert(response.data.id, 'Cannot find template id')
    
    ctx.templateId = response.data.id
    task.title += ctx.templateId
  }
}

export default { create }
