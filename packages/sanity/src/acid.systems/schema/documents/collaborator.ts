import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const collaborator = defineType({
  name: 'collaborator',
  title: 'Collaborator',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),

    defineField({
      name: 'website',
      title: 'Website',
      type: 'array',
      of: [{type: 'url'}],
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
  ],
})
