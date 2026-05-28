import React from 'react'
import {defineType, defineField} from 'sanity'

export const colorEntry = defineType({
  name: 'colorEntry',
  title: 'Color Entry',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      name: 'name',
      color: 'color',
    },
    prepare({color, name}) {
      const hex = color?.hex as string | undefined
      const hex2 = (color as {hex2?: string} | undefined)?.hex2
      const css = color?.css as string | undefined
      const isGradient = Boolean(color?.isGradient)

      const Media = () =>
        React.createElement('div', {
          style: {
            width: '100%',
            height: '100%',
            ...(isGradient && css
              ? {background: css}
              : {backgroundColor: hex ?? 'transparent'}),
            border: '1px solid rgba(0,0,0,0.15)',
            boxSizing: 'border-box',
          },
        })

      return {
        title: name ?? hex ?? 'Untitled',
        subtitle: isGradient
          ? [hex, hex2].filter(Boolean).join(' → ') || 'Gradient'
          : (hex ?? 'No color selected'),
        media: Media,
      }
    },
  },
})
