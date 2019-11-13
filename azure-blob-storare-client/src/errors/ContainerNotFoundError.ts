export class ContainerNotFoundError extends Error {
  constructor (containerName: string) {
    super(`the container with name '${containerName}' not found`)
  }
}
