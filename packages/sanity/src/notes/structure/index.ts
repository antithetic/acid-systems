import {type StructureBuilder, type StructureResolver} from 'sanity/structure'
import {Palette, Notebook} from 'lucide-react'

export const notesStructure: StructureResolver = (S: StructureBuilder) =>
  S.list()
    .title('Notes')
    .items([
      S.documentTypeListItem('signal').title('Signals'),
      S.documentTypeListItem('field-note').title('Field Notes').icon(Notebook),
      S.documentTypeListItem('colorNote').title('Colors').icon(Palette),
      S.divider(),
      S.documentTypeListItem('notesSettings').title('Settings'),
    ])
