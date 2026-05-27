import {defineField, defineType} from 'sanity'
import {Link} from 'lucide-react'

export const link = defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: Link,
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'linkType',
      title: 'Link type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
    }),
    defineField({
      name: 'internalLink',
      title: 'Internal page',
      type: 'reference',
      to: [{type: 'project'}],
      hidden: ({parent}) => parent?.linkType !== 'internal',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'external',
      validation: (Rule) =>
        Rule.uri({scheme: ['http', 'https', 'mailto']}).custom(
          (value, context) => {
            if (
              (context.parent as {linkType?: string})?.linkType ===
                'external' &&
              !value
            )
              return 'Required'
            return true
          },
        ),
    }),
    defineField({
      name: 'openInNewTab',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
      hidden: ({parent}) => parent?.linkType !== 'external',
    }),
  ],
})
