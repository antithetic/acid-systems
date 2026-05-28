import {defineArrayMember, defineType} from 'sanity'

export const pageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    defineArrayMember({type: 'richTextSection'}),
    defineArrayMember({type: 'imageGallery'}),
    defineArrayMember({type: 'statementBlock'}),
    // defineArrayMember({type: 'technicalSection'}),
    // defineArrayMember({type: 'processTimeline'}),
    defineArrayMember({type: 'quoteBlock'}),
    // defineArrayMember({type: 'statsBlock'}),
    // defineArrayMember({type: 'videoEmbed'}),
    defineArrayMember({type: 'narrativeReference'}),
  ],
})
