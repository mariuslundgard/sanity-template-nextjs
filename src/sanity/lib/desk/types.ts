import {ResolveProductionUrlContext} from 'sanity'
import {DefaultDocumentNodeContext, StructureBuilder, View, ViewBuilder} from 'sanity/desk'

export type StructureViewsResolver = (
  S: StructureBuilder,
  ctx: DefaultDocumentNodeContext
) => Array<View | ViewBuilder>

export type DocumentURLResolver = (
  ctx: ResolveProductionUrlContext
) => Promise<string | null | undefined>

declare module 'sanity' {
  export interface DocumentOptions {
    views?: StructureViewsResolver
    url?: DocumentURLResolver
  }
}
