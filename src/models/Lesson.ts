/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { validate, IsNotEmpty, IsString, IsMongoId, IsArray, IsDate, IsOptional } from "class-validator";
import { Type } from "class-transformer";
/* --------------------------------- CUSTOM --------------------------------- */
import { Translation } from './Translation';

/* -------------------------------------------------------------------------- */
/*                              CLASS DEFINITION                              */
/* -------------------------------------------------------------------------- */
export class Lesson {

  /* ---------------------------- MEMBER VARIABLES ---------------------------- */
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  readonly id!: string;


  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsString()
  description?: string;

  @IsArray()
  @Type(() => Translation)
  translations: Translation[] = [];

  @IsArray()
  resources?: string[] = [];

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;

  /* ------------------------------- CONSTRUCTOR ------------------------------ */
  constructor(lesson?: Partial<Lesson>) {
    Object.assign(this, lesson);
  }

  /* --------------------------------- METHODS -------------------------------- */
  async validateInstance() {
    const errors = await validate(this);
    if (errors.length) throw errors;
    return true;
  }

  async updateAndValidate(updatedLesson?: Partial<Lesson>) {
    const updatedObject = Object.assign({}, this, updatedLesson);
    const errors = await validate(updatedObject);
    if (errors.length) throw errors;
    Object.assign(this, updatedLesson);
    return true;
  }
}
