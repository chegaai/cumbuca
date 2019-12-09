import Listr from 'listr'
import assert from 'assert'
import { format } from 'util'
import { GlobalContext } from '../../types/GlobalContext'
import { AxiosResponse } from 'axios'

function assertResponse (response: AxiosResponse, message = 'Expected "%s" to be "Pong!"') {
  return assert(response.data === 'Pong!', format(message, response.data))
}

function ping (service = '', serviceName?: string): Listr.ListrTask {
  const task = async ({ http }: GlobalContext) => {
    return assertResponse(await http.get(`/ping/${service}`))
  }

  return {
    title: serviceName ?? service ? `ms-${service}` : 'api-gateway',
    task
  }
}

const pings = () => new Listr<GlobalContext>(
  [
    ping(),
    ping('users'),
    ping('profiles'),
    ping('events'),
    ping('groups'),
    ping('templates'),
    ping('certificates')
  ],
  // @ts-ignore: Again, types don't work with this
  { concurrent: true }
)

export default pings
