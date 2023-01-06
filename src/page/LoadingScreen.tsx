import {ReactNode} from 'react'

export function LoadingScreen(props: {children?: ReactNode}) {
  const {children} = props

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  )
}
