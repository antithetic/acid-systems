import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export const statementBlock = defineType({
  name: 'statementBlock',
  title: 'Statement Block',
  type: 'object',
  icon: TextIcon,
  fields: [
    defineField({
      name: 'statement',
      title: 'Statement',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      initialValue: 'center',

      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Center', value: 'center'},
          {title: 'Right', value: 'right'},
        ],
      },
    }),
  ],
})
