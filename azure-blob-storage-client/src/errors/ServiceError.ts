export class AzureError extends Error {
  constructor (response: any) {
    super(response)
  }
}
