export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc5681bdbe56801880edaf1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-uvoice-studio',
                  apiId: 'b1623008-7549-45ec-8002-b812e76fc671'
                },
                {
                  buildHookId: '5dc5681b8876f301df3d4726',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-uvoice',
                  apiId: '7d4f8805-6b9a-40d5-b076-12862efe8fb2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thompcd/sanity-gatsby-uvoice',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-uvoice.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
