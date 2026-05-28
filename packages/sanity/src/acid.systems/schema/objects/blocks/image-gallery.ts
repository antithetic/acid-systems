import {defineArrayMember, defineField, defineType} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export const imageGallery = defineType({
  name: 'imageGallery',
  title: 'Image Gallery',
  type: 'object',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',

      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Masonry', value: 'masonry'},
          {title: 'Carousel', value: 'carousel'},
          {title: 'Fullscreen', value: 'fullscreen'},
        ],
      },
    }),

    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',

      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) =>
                Rule.required().error('Alt text is required'),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        }),
      ],
    }),
  ],
})
