import {defineField, defineType} from 'sanity'
import {Radio} from 'lucide-react'

export const signal = defineType({
  name: 'signal',
  title: 'Signal',
  type: 'document',
  icon: Radio,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
