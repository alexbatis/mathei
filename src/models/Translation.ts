/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import { validate, IsNotEmpty, IsString, IsOptional, IsMongoId, IsDate, IsArray } from "class-validator";
import { Type } from "class-transformer";
/* --------------------------------- CUSTOM --------------------------------- */
import { Lesson } from './Lesson';


/* -------------------------------------------------------------------------- */
/*                              CLASS DEFINITION                              */
/* -------------------------------------------------------------------------- */
export class Translation {
  /* ---------------------------- MEMBER VARIABLES ---------------------------- */
  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  id!: string;

  @IsNotEmpty()
  @IsString()
  phrase!: string;

  @IsNotEmpty()
  @IsString()
  translated!: string;

  @IsOptional()
  @IsString()
  phonetic?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updatedAt?: Date;

  @IsOptional()
  @Type(() => Lesson)
  lesson?: Lesson;

  @IsOptional()
  @IsArray()
  tags?: string[];

  /* ------------------------------- CONSTRUCTOR ------------------------------ */
  constructor(translation?: Partial<Translation>) {
    Object.assign(this, translation);
  }

  /* --------------------------------- METHODS -------------------------------- */
  async validateInstance() {
    const errors = await validate(this);
    if (errors.length) throw errors;
    return true;
  }

  async updateAndValidate(updatedTranslation?: Partial<Translation>) {
    const updatedObject = Object.assign({}, this, updatedTranslation);
    const errors = await validate(updatedObject);
    if (errors.length) throw errors;
    Object.assign(this, updatedTranslation);
    return true;
  }
}
