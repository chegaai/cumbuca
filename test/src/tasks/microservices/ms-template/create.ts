import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'
import { readFileSync } from 'fs';


export const create: Listr.ListrTask<GlobalContext> = {
  title: 'Create template: ',
  task: async (ctx, task) => {
    const file = readFileSync(`${__dirname}/template.html`, 'utf-8');

    const payload = {
      html:file,
      groupId: ctx.groupId
    }

    const response = await ctx.http.post(`/templates`, payload)
    assert(response.status === 201, `Expected ${response.status} to be 201`)
    assert(response.data.id, 'Cannot find template id')
    ctx.templateId = response.data.id
    task.title += ctx.templateId
  }
}

export default { create }
