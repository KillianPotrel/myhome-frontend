export class FetchError extends Error {
    constructor(public response: Response, message?: string) {
      super(message)
    }
  }