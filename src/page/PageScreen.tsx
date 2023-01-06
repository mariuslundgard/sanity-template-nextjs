import {PageData} from './types'

export function PageScreen(props: {data: PageData | null}) {
  const {data} = props

  return (
    <div className="p-5">
      <div className="max-w-xl m-auto">
        <div className="prose dark:prose-invert">
          <h1 className="text-xl font-extrabold tracking-tight">{data?.title}</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
