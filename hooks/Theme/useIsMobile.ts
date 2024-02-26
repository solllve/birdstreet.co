import { useDebounce } from 'usehooks-ts'
import { useWindowDimensions } from './useWindowDimensions'
import { useEffect, useState } from 'react'

export const useIsMobile = () => {
  const { width: windowWidth } = useWindowDimensions()
  const width = useDebounce<number>(windowWidth, 500)
  const [mobile, setisMobile] = useState(false)

  useEffect(() => {
    width < 650 ? setisMobile(true) : setisMobile(false)
  }, [width])
  return { mobile }
}
