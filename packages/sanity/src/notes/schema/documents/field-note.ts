import {defineField, defineType} from 'sanity'
import {NotebookText} from 'lucide-react'

export const fieldNote = defineType({
  name: 'field-note',
  title: 'Field Note',
  type: 'document',
  icon: NotebookText,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
