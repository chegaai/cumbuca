import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

export const addRSVPByEmail: Listr.ListrTask<GlobalContext> = {
  title: 'addRSVP',
  task: async (ctx, task) => {
    const payload = {
      inquiryResponses: [
        {
          questionTitle: 'CPF?',
          response: '44455566696'
        }
      ],
      rsvp: 'yes',
      name: 'italo josé',
      email: 'email@email.com',
      document: '399998855'
    }

    const response = await ctx.http.post(`/events/${ctx.eventId}/rsvps`, payload)
    assert(response.status === 201, `Expected ${response.status} to be 201`)
    assert(!response.data.userId, 'userId must not exist')
    assert(response.data.email, 'Cannot find rsvp email')

    ctx.rsvpEmail = response.data.email
    task.title += ctx.rsvpEmail
  }
}

export default { addRSVPByEmail }
