import { ThemeEnum } from '../../consts/types'

interface MoonTypes {
  theme: ThemeEnum
}

export const Moon = ({ theme }: MoonTypes) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9 18C6.5 18 4.375 17.125 2.625 15.375C0.875 13.625 0 11.5 0 9C0 6.5 0.875 4.375 2.625 2.625C4.375 0.875 6.5 0 9 0C9.23333 0 9.4625 0.00833333 9.6875 0.025C9.9125 0.0416667 10.1333 0.0666667 10.35 0.1C9.66667 0.583333 9.12083 1.2125 8.7125 1.9875C8.30417 2.7625 8.1 3.6 8.1 4.5C8.1 6 8.625 7.275 9.675 8.325C10.725 9.375 12 9.9 13.5 9.9C14.4167 9.9 15.2583 9.69583 16.025 9.2875C16.7917 8.87917 17.4167 8.33333 17.9 7.65C17.9333 7.86667 17.9583 8.0875 17.975 8.3125C17.9917 8.5375 18 8.76667 18 9C18 11.5 17.125 13.625 15.375 15.375C13.625 17.125 11.5 18 9 18ZM9 16C10.4667 16 11.7833 15.5958 12.95 14.7875C14.1167 13.9792 14.9667 12.925 15.5 11.625C15.1667 11.7083 14.8333 11.775 14.5 11.825C14.1667 11.875 13.8333 11.9 13.5 11.9C11.45 11.9 9.70417 11.1792 8.2625 9.7375C6.82083 8.29583 6.1 6.55 6.1 4.5C6.1 4.16667 6.125 3.83333 6.175 3.5C6.225 3.16667 6.29167 2.83333 6.375 2.5C5.075 3.03333 4.02083 3.88333 3.2125 5.05C2.40417 6.21667 2 7.53333 2 9C2 10.9333 2.68333 12.5833 4.05 13.95C5.41667 15.3167 7.06667 16 9 16Z"
        fill={theme === 'dark' ? 'white' : 'black'}
      />
    </svg>
  )
}