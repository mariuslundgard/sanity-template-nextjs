import {groq} from 'next-sanity'

export const query = groq`count(*[])`

export function DocumentsCount({data}) {
  return (
    <>
      Documents: <strong>{data}</strong>
    </>
  )
}
