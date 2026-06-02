// ./structure/index.ts
import type {StructureResolver} from 'sanity/structure'

export const acidSystemsStructure: StructureResolver = (S) =>
  S.list().title('Acid Systems').items(S.documentTypeListItems())
