import {defineArrayMember, defineType} from 'sanity'

export const pageBuilder = defineType({
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    // -----------------------------------
    // Core Blocks
    // -----------------------------------
    defineArrayMember({type: 'richTextSection'}),
    // General content, most versatile, foundational for most pages
    defineArrayMember({type: 'imageGallery'}),
    // Visual storytelling, portfolios, imagery-focused content
    defineArrayMember({type: 'quoteBlock'}),
    // Highlighting testimonials, important statements, emphasis
    defineArrayMember({type: 'statementBlock'}),
    // Key points, feature callouts, or focused messages
    defineArrayMember({type: 'narrativeReference'}),
    // Linking or referencing longer-form narratives, blog sections, or case studies
    // -----------------------------------
    // Specialized Blocks
    // -----------------------------------
    // defineArrayMember({type: 'technicalSection'}),
    // Specialized technical explanations or documentation
    // defineArrayMember({type: 'processTimeline'}),
    // Linear processes, steps, histories, or progressions
    // defineArrayMember({type: 'statsBlock'}),
    // Metrics, numbers, or KPI highlights
    // defineArrayMember({type: 'videoEmbed'}),
    // Embedding rich media content, explainers, or showcases
  ],
})
