import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

export const addRSVP: Listr.ListrTask<GlobalContext> = {
  title: 'addRSVP',
  task: async (ctx, task) => {
    const payload = {
      inquiryResponses: [
        {
          questionTitle: 'Inquiry Title',
          response: 'text text text'
        }
      ],
      rsvp: 'yes'
    }

    const response = await ctx.http.patch(`/events/${ctx.eventId}/rsvps`, payload)
    assert(response.status === 200, `Expected ${response.status} to be 200`)
    assert(response.data.userId, 'Cannot find rsvp userId')
    
    ctx.rsvpId = response.data.userId
    task.title += ctx.rsvpId
  }
}

export default { addRSVP }
