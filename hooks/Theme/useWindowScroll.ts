import { useEffect, useState } from 'react'

export const useWindowScroll = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollY(window && window.scrollY)
    })
  }, [])

  return { scrollY }
}
