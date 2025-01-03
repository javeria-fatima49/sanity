 import { type SchemaTypeDefinition } from 'sanity'
import homepageschemma from './homepageschemma'
import Header from './header'
import newarrivals from './newarrivals'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    homepageschemma,Header,newarrivals
  ],
}
