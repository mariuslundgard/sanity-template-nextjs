import {groq} from 'next-sanity'

export const query = groq`
  *[slug.current == $slug][0]{
    title,
    slug,
    content[]{
      _key,
      _type == 'pageElement' => {
        ...article->{
          _type,
          supertitle,
          title,
          subtitle
        }
      }
    }
  }
`
