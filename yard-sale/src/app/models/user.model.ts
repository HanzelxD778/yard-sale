export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export interface CrateUserDTO extends Omit<User, 'id'> {

}
