import {defineField, defineType} from 'sanity'
import {BlockContentIcon} from '@sanity/icons'

export default defineType({
  name: 'richTextSection',
  title: 'Rich Text Section',
  type: 'object',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'heading',
    },
    prepare({title}) {
      // if no title, return 'Rich Text Section - Untitled'
      // TODO: customize component 'untitled' styled italic and in a lighter color of grey
      return {title: title || 'Rich Text Section - Untitled'}
    },
  },
})
