import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons'

export const narrativeReference = defineType({
  name: 'narrativeReference',
  title: 'Narrative Reference',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'section',
      title: 'Narrative Section',
      type: 'string',

      options: {
        list: [
          {title: 'Summary', value: 'summary'},
          {title: 'Challenge', value: 'challenge'},
          {title: 'Approach', value: 'approach'},
          {title: 'Outcome', value: 'outcome'},
          {title: 'Reflection', value: 'reflection'},
        ],

        layout: 'dropdown',
      },
    }),

    defineField({
      name: 'customHeading',
      title: 'Custom Heading',
      type: 'string',
    }),

    defineField({
      name: 'layout',
      title: 'Layout Style',
      type: 'string',

      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Fullscreen', value: 'fullscreen'},
          {title: 'Minimal', value: 'minimal'},
          {title: 'Editorial', value: 'editorial'},
        ],
      },
    }),
  ],

  preview: {
    select: {
      section: 'section',
    },

    prepare({section}) {
      return {
        title: `Narrative → ${section || 'Unassigned'}`,
      }
    },
  },
})
