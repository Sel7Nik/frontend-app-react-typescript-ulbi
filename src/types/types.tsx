export interface IAdress {
  street: string
  city: string

}

export interface IUser {
  id: number;
  name: string;
  email: string;
  address: IAdress
}