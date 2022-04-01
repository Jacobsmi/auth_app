declare namespace Express {
  export interface Request {
    user: {
      iss: string
      sub: string
      aud: string | string[]
      iat: number
      exp: number
      azp: string
      scope: string
    }
  }
}