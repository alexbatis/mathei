/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { IsString, IsNotEmpty, IsEmail, IsMongoId, validate } from 'class-validator';


export enum AuthType {
  BASIC = 'basic',
  GOOGLE = 'google'
}

/* -------------------------------------------------------------------------- */
/*                              CLASS DEFINITION                              */
/* -------------------------------------------------------------------------- */
export class User {
  /* ---------------------------- MEMBER VARIABLES ---------------------------- */
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  readonly _id!: String;

  @IsNotEmpty()
  @IsString()
  firstName!: string;

  @IsNotEmpty()
  @IsString()
  lastName!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  authType: string = AuthType.BASIC;

  @IsNotEmpty()
  @IsString()
  token!: string;

  @IsNotEmpty()
  @IsString()
  refreshToken!: string;

  @IsString()
  avatar?: string;


  /* ------------------------------- CONSTRUCTOR ------------------------------ */
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }

  /* --------------------------------- METHODS -------------------------------- */
  async validateInstance() {
    const errors = await validate(this);
    if (errors.length) throw errors;
    return true;
  }

  async updateAndValidate(updatedTranslation?: Partial<User>) {
    const updatedObject = Object.assign({}, this, updatedTranslation);
    const errors = await validate(updatedObject);
    if (errors.length) throw errors;
    Object.assign(this, updatedTranslation);
    return true;
  }

}
