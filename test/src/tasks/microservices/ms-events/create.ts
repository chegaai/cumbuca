import Listr from 'listr'
import assert from 'assert'
import { GlobalContext } from '../../../types/GlobalContext'

const create: Listr.ListrTask<GlobalContext> = {
  title: 'create',
  task: async (ctx, task) => {
    const payload = {
      name: 'Test event',
      description: 'An event created for testing purposes',
      seats: 100,
      type: 'presential',
      startAt: '2019-12-09T20:56:50.426Z',
      endAt: '2019-12-09T20:56:50.426Z',
      needsDocument: true,
      place: {
        address: 'Some street',
        zipCode: '12312-123',
        number: '123',
        country: 'Brasil',
        city: 'São Paulo',
        state: 'São Paulo',
        placeId: 'ChIJrTLr-GyuEmsRBfy61i59si0',
        complement: ''
      },
      groups: [ctx.groupId],
      rsvp: { openAt: '2019-12-09T20:56:50.426Z', closeAt: '2019-12-09T20:56:50.426Z' },
      banner: '',
      organizers: [],
      inquiries: [],
      tags: [],
      agenda: []
    }

    const response = await ctx.http.post('/events', payload)
    assert(response.status === 201, `Expected ${response.status} to be 201`)
    assert(response.data.id ?? false, 'Cannot find event ID')

    ctx.eventId = response.data.id
    task.title += ctx.eventId
  }
}

export default create
