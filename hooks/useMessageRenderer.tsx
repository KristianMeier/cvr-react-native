import { useState } from 'react'

export const useMessageRenderer = () => {
  const [status, setStatus] = useState('')

  const showMessage = (message: string) => {
    setStatus(message)
    const timer = setTimeout(() => {
      setStatus('')
    }, 2000)
    return () => clearTimeout(timer)
  }

  return { status, showMessage }
}
