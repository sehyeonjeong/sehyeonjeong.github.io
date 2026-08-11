import { useEffect, useState } from 'react'

export default function useTyping(text, delay = 95) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTyped(text.slice(0, index))
      if (index >= text.length) window.clearInterval(timer)
    }, delay)

    return () => window.clearInterval(timer)
  }, [delay, text])

  return typed
}
