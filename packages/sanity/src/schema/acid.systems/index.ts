import {schemaDocuments} from './documents'
import {schemaObjects} from './objects'
import {schemaSingletons} from './singletons'

export const acidSystemsSchemaTypes = [
  ...schemaDocuments,
  ...schemaObjects,
  ...schemaSingletons,
]
