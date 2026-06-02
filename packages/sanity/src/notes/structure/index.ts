import {type StructureBuilder, type StructureResolver} from 'sanity/structure'
import {BrainCog} from 'lucide-react'

export const notesStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Notes')
    .items([
      S.documentTypeListItem('signal').title('Signals'),
      S.documentTypeListItem('field-note').title('Field Notes'),
      S.documentTypeListItem('colorNote').title('Colors'),
      S.divider(),
      S.documentTypeListItem('notesSettings').title('Settings'),
    ])
