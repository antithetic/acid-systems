import {notesDocuments} from './documents'
import {notesObjects} from './objects'
import {notesSingletons} from './singletons'

export const notesSchema = [
  ...notesDocuments,
  ...notesObjects,
  ...notesSingletons,
]
