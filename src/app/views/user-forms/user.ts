export interface IUserShort {
  "name": string,
  "username": string,
  "email": string,
  "phone": string,
}

export interface IUser extends IUserShort {
  "id": number
}
