export class RegisteredUser {
  constructor(public firstName: string,
              public lastName: string,
              public googleId: string,
              public school: string,
              public program: string,
              public gradYear: number) {
  }
}
