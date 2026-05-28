import {defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  options: {
    singleton: true, // Identify this document as a singleton
  },
  groups: [
    {name: 'general', title: 'General', default: true},
    {name: 'seo', title: 'SEO'},
    {name: 'social', title: 'Social'},
    {name: 'navigation', title: 'Navigation'},
  ],
  fields: [
    // --- General ---
    defineField({
      name: 'siteTitle',
      title: 'Site title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
      description: 'Short line under the title on the homepage',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'general',
      options: {hotspot: true},
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'general',
    }),

    // --- SEO defaults (site-wide) ---
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
      group: 'seo',
    }),

    // --- Social ---
    defineField({
      name: 'socialLinks',
      title: 'Social links',
      type: 'array',
      group: 'social',
      of: [
        defineField({
          name: 'socialLink',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'GitHub', value: 'github'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Email', value: 'email'},
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
              validation: (Rule) =>
                Rule.required().uri({scheme: ['http', 'https', 'mailto']}),
            }),
          ],
          preview: {
            select: {title: 'platform', subtitle: 'url'},
          },
        }),
      ],
    }),

    // --- Navigation ---
    defineField({
      name: 'headerNav',
      title: 'Header navigation',
      type: 'array',
      group: 'navigation',
      of: [{type: 'link'}],
    }),
    defineField({
      name: 'footerNav',
      title: 'Footer navigation',
      type: 'array',
      group: 'navigation',
      of: [{type: 'link'}],
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
