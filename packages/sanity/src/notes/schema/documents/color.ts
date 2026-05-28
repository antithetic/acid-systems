import {defineArrayMember, defineField, defineType} from 'sanity'
import {Paintbrush} from 'lucide-react'

export const colorNote = defineType({
  name: 'colorNote',
  title: 'Color',
  type: 'document',
  icon: Paintbrush,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Color Tagline',
      type: 'pt-string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'palette',
      title: 'Palette',
      type: 'array',
      of: [{type: 'colorEntry'}],
    }),
  ],
})
