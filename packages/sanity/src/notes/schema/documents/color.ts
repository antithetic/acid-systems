import React from 'react'
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Color Tagline',
      type: 'text',
      rows: 1,
      description: 'A short tagline for the color',
    }),
    defineField({
      name: 'palette',
      title: 'Palette',
      type: 'array',
      of: [{type: 'colorEntry'}],
      validation: (Rule) => Rule.max(5),
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
      name: 'dateCreated',
      title: 'Date Created',
      type: 'richDate',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'relatedColors',
      title: 'Related Colors',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'colorNote'}]}],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      tagline: 'tagline',
      palette: 'palette',
    },
    prepare({name, tagline, palette}) {
      const firstColor = palette?.[0]?.color
      const hex = firstColor?.hex as string | undefined
      const hex2 = (firstColor as {hex2?: string} | undefined)?.hex2
      const css = firstColor?.css as string | undefined
      const isGradient = Boolean(firstColor?.isGradient)

      const Media = () =>
        // We only render swatches for actual entries (plus a single blank
        // placeholder when there is exactly 1 entry, so the preview still
        // reads as a "palette").
        React.createElement(
          'div',
          {
            style: {
              width: '100%',
              height: '100%',
              display: 'grid',
              gridTemplateColumns: `repeat(${Math.min(
                5,
                Math.max(2, palette?.length ?? 0),
              )}, 1fr)`,
              gap: 1,
              border: '1px solid rgba(0,0,0,0.15)',
              boxSizing: 'border-box',
              overflow: 'hidden',
            },
          },
          [
            ...(palette ?? []).map((entry: {color?: unknown} | undefined, i: number) => {
              const color = entry?.color as
                | {hex?: string; css?: string; isGradient?: boolean}
                | undefined
              const cellHex = color?.hex as string | undefined
              const cellCss = color?.css as string | undefined
              const cellIsGradient = Boolean(color?.isGradient)

              return React.createElement('div', {
                key: i,
                style: {
                  width: '100%',
                  height: '100%',
                  ...(cellIsGradient && cellCss
                    ? {background: cellCss}
                    : {backgroundColor: cellHex ?? 'transparent'}),
                  boxSizing: 'border-box',
                },
              })
            }),
            ...(palette?.length === 1
              ? [
                  React.createElement('div', {
                    key: 'placeholder',
                    style: {
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'transparent',
                      boxSizing: 'border-box',
                    },
                  }),
                ]
              : []),
          ],
        )

      return {
        title: name ?? 'Untitled palette',
        subtitle: tagline ?? '',
        media: Media,
        // Helpful in list views/tooltips while still showing the swatch.
        description: isGradient
          ? [hex, hex2].filter(Boolean).join(' → ')
          : (hex ?? undefined),
      }
    },
  },
})
