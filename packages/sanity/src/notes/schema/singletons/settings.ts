import {defineField, defineType} from 'sanity'
import {Settings} from 'lucide-react'

export const notesSettings = defineType({
  name: 'notesSettings',
  title: 'Site Settings',
  type: 'document',
  icon: Settings,
  options: {
    singleton: true,
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the site',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short line under the title on the homepage',
    }),
  ],
})
