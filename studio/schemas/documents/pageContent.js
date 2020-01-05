export default {
    name: 'pageContent',
    type: 'document',
    title: 'Page Content',
    __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
    fields: [
      {
        name: 'section1Heading',
        type: 'string',
        title: 'Section 1 Heading',
        description: 'Bold text on hero image'
      },
      {
        name: 'section1Text',
        type: 'bodyPortableText',
        title: 'Section 1 Text',
        description: 'Subtext on hero image. Use images at your own risk.'
      },
      {
        name: 'section2Heading',
        type: 'string',
        title: 'Section 2 Heading'
      },
      {
        name: 'section2Text',
        type: 'bodyPortableText',
        title: 'Section 2 Text',
        description: 'Use images at your own risk.'
      },
      {
        name: 'section2Img',
        type: 'image',
        title: 'Section 2 Image',
        description: 'Inline image. Will resize based on screen, focusing on hotspot.',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      },
      {
        name: 'section3Heading',
        type: 'string',
        title: 'Section 3 Heading'
      },
      {
        name: 'section3Text',
        type: 'bodyPortableText',
        title: 'Section 3 Text.',
        description: 'Use images at your own risk.'
      },
      {
        name: 'section4Heading',
        type: 'string',
        title: 'Section 4 Heading'
      },
      {
        name: 'section5Heading',
        type: 'string',
        title: 'Section 5 Heading'
      }
    ],
  }