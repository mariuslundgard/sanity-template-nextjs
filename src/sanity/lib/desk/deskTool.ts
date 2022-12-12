import {definePlugin, DocumentOptions, DocumentPluginOptions} from 'sanity'
import {deskTool as baseDeskTool} from 'sanity/desk'
import {DefaultDocumentNodeResolver} from 'sanity/desk'

/**
 * A modified version of Sanity’s desk tool.
 *
 * - Adds a default document node resolver that uses the `views` option on schema types.
 * - Adds a default production URL resolver that uses the `url` option on schema types.
 */
export const deskTool = definePlugin(() => {
  const {name: _, ...base} = baseDeskTool({
    defaultDocumentNode,
  })

  return {
    name: 'lib/desk/deskTool',
    ...base,
    document: {
      ...base.document,
      productionUrl,
    },
  }
})

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, ctx) => {
  const schemaType = ctx.schema.get(ctx.schemaType)
  const schemaOptions: DocumentOptions | undefined = schemaType?.options
  const viewsResolver = schemaOptions?.views

  if (viewsResolver) {
    return S.document().views(viewsResolver(S, ctx))
  }

  return S.document()
}

const productionUrl: DocumentPluginOptions['productionUrl'] = async (prev, ctx) => {
  const schemaType = ctx.schema.get(ctx.document._type)
  const schemaOptions: DocumentOptions | undefined = schemaType?.options
  const urlResolver = schemaOptions?.url

  if (urlResolver) {
    return (await urlResolver(ctx)) ?? prev
  }

  return prev
}
