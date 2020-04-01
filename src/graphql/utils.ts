/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ------------------------------- THIRD PARTY ------------------------------ */
import gql from 'graphql-tag';
import { print } from 'graphql/language/printer'
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

/* -------------------------------------------------------------------------- */
/*                              UTILITY FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const combineQueries = (...args: any) => gql(args
  .map(arg => arg && arg.kind === 'Document' ? print(arg) : arg)
  .join('\n\n')
)

export const stripTypenames = (value) => {
  if (Array.isArray(value)) {
    return value.map(stripTypenames)
  } else if (value !== null && typeof (value) === 'object') {
    const newObject = {};
    for (const property in value) {
      if (property !== '__typename') {
        newObject[property] = stripTypenames(value[property])
      }
    }
    return newObject
  } else {
    return value
  }
}

export function toClassInstance<T, V>(cls: ClassType<T>, obj: object): T {
  return plainToClass(cls, obj)
}

export function toClassArrayInstance<T, V>(cls: ClassType<T>, arr: Array<any>): T[] {
  return plainToClass(cls, arr)
}
