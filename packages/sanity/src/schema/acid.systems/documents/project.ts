import {defineField, defineType, defineArrayMember} from 'sanity'
import {FolderIcon} from '@sanity/icons'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: FolderIcon,
  groups: [
    {name: 'identity', title: 'Identity', default: true},
    {name: 'taxonomy', title: 'Taxonomy'},
    {name: 'narrative', title: 'Narrative'},
    {name: 'editorial', title: 'Editorial Builder'},
    {name: 'relationships', title: 'Relationships'},
    {name: 'seo', title: 'SEO'},
  ],
  // -----------------------------------
  // Identity
  // -----------------------------------
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      group: 'identity',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'identity',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      group: 'identity',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'identity',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'identity',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'identity',
      options: {
        list: [
          {title: 'Concept', value: 'concept'},
          {title: 'In Progress', value: 'in-progress'},
          {title: 'Released', value: 'released'},
          {title: 'Archived', value: 'archived'},
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      group: 'identity',
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'identity',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    }),
    // defineField({
    //   name: 'heroMedia',
    //   title: 'Hero Media',
    //   type: 'heroMedia',
    //   group: 'identity',
    // }),

    // -----------------------------------
    // Taxonomy
    // -----------------------------------

    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'taxonomy',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    // defineField({
    //   name: 'projectTypes',
    //   title: 'Project Types',
    //   type: 'array',
    //   group: 'taxonomy',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{type: 'projectType'}],
    //     }),
    //   ],
    // }),

    // defineField({
    //   name: 'tags',
    //   title: 'Tags',
    //   type: 'array',
    //   group: 'taxonomy',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{type: 'tag'}],
    //     }),
    //   ],
    // }),

    // defineField({
    //   name: 'technologies',
    //   title: 'Technologies',
    //   type: 'array',
    //   group: 'taxonomy',
    //   of: [
    //     defineArrayMember({
    //       type: 'reference',
    //       to: [{type: 'technology'}],
    //     }),
    //   ],
    // }),

    // -----------------------------------
    // Narrative
    // -----------------------------------

    defineField({
      name: 'summary',
      title: 'Summary',
      group: 'narrative',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'challenge',
      title: 'Challenge',
      group: 'narrative',
      type: 'blockContent',
    }),

    defineField({
      name: 'approach',
      title: 'Approach',
      group: 'narrative',
      type: 'blockContent',
    }),

    defineField({
      name: 'outcome',
      title: 'Outcome',
      group: 'narrative',
      type: 'blockContent',
    }),

    defineField({
      name: 'reflection',
      title: 'Reflection',
      group: 'narrative',
      type: 'blockContent',
    }),

    // -----------------------------------
    // Editorial Builder
    // -----------------------------------

    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'pageBuilder',
      group: 'editorial',
    }),

    defineField({
      name: 'layoutStyle',
      title: 'Layout Style',
      type: 'string',
      group: 'editorial',
      options: {
        list: [
          {title: 'Editorial', value: 'editorial'},
          {title: 'Archival', value: 'archival'},
          {title: 'Technical', value: 'technical'},
          {title: 'Cinematic', value: 'cinematic'},
          {title: 'Research', value: 'research'},
        ],
      },
    }),

    // -----------------------------------
    // Relationships
    // -----------------------------------

    defineField({
      name: 'collaborators',
      title: 'Collaborators',
      type: 'array',
      group: 'relationships',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'collaborator'}],
        }),
      ],
    }),

    defineField({
      name: 'relatedProjects',
      title: 'Related Projects',
      type: 'array',
      group: 'relationships',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'project'}],
        }),
      ],
    }),

    defineField({
      name: 'researchNotes',
      title: 'Research Notes',
      type: 'array',
      group: 'relationships',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),

    // -----------------------------------
    // SEO
    // -----------------------------------

    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
      subtitle: 'year',
    },
  },
})
