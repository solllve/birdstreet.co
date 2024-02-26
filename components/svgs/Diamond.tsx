import { ThemeEnum } from '../../consts/types'

interface DiamondTypes {
  theme?: ThemeEnum.DARK | ThemeEnum.LIGHT
}
export const Diamond = ({ theme }: DiamondTypes) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 21L2 9L5 3H19L22 9L12 21ZM9.625 8H14.375L12.875 5H11.125L9.625 8ZM11 16.675V10H5.45L11 16.675ZM13 16.675L18.55 10H13V16.675ZM16.6 8H19.25L17.75 5H15.1L16.6 8ZM4.75 8H7.4L8.9 5H6.25L4.75 8Z"
          fill={theme === ThemeEnum.DARK ? 'white' : 'black'}
        />
      </svg>
    </>
  )
}
