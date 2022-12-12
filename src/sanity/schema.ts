import {SchemaTypeDefinition} from 'sanity'

import {articleType} from './article'
import {pageElementType, pageType} from './page'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [articleType, pageElementType, pageType],
}
