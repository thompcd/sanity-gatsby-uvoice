import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/people'
import MdHome from 'react-icons/lib/md/home'
import FaNewspaper from 'react-icons/lib/fa/newspaper-o'
import FaFolder from 'react-icons/lib/fa/folder-open'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'pageContent'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
      .title('Home Page')
      .icon(MdHome)
      .child(
        S.editor()
          .id('pageContent')
          .schemaType('pageContent')
          .documentId('pageContent')
      ),
      S.listItem()
        .title('Blog posts')
        .icon(FaNewspaper)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Categories')
        .icon(FaFolder)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
