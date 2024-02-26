interface LogoTypes {
  theme: 'dark' | 'light'
}

export const LogoMobile = ({ theme }: LogoTypes) => {
  switch (theme) {
    case 'dark':
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M0.231567 0H7.11004C8.91751 0 10.3828 1.46525 10.3828 3.27273V22.4957C10.3828 24.3032 8.91751 25.7684 7.11004 25.7684H3.5043C1.69682 25.7684 0.231567 24.3032 0.231567 22.4957V0Z"
              fill="#F0E817"
            />
            <path
              d="M3.50429 10.1512C1.69681 10.1512 0.231567 8.68595 0.231567 6.87847V0H22.7273C24.5347 0 26 1.46525 26 3.27273V6.87847C26 8.68594 24.5347 10.1512 22.7273 10.1512H3.50429Z"
              fill="#F0E817"
            />
            <rect
              x="12.6073"
              y="18.9468"
              width="9.42071"
              height="9.26059"
              rx="3.27273"
              transform="rotate(-44.5479 12.6073 18.9468)"
              fill="#F0E817"
            />
          </svg>
        </>
      )
      break
    case 'light':
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
          >
            <path
              d="M0.294678 0.715759H7.17315C8.98062 0.715759 10.4459 2.18101 10.4459 3.98849V23.2115C10.4459 25.0189 8.98062 26.4842 7.17315 26.4842H3.56741C1.75993 26.4842 0.294678 25.0189 0.294678 23.2115V0.715759Z"
              fill="black"
            />
            <path
              d="M3.5674 10.867C1.75992 10.867 0.294678 9.40171 0.294678 7.59423V0.715759H22.7904C24.5979 0.715759 26.0631 2.18101 26.0631 3.98849V7.59423C26.0631 9.4017 24.5978 10.867 22.7904 10.867H3.5674Z"
              fill="black"
            />
            <rect
              x="12.6704"
              y="19.6626"
              width="9.42071"
              height="9.26059"
              rx="3.27273"
              transform="rotate(-44.5479 12.6704 19.6626)"
              fill="black"
            />
          </svg>
        </>
      )
    default:
      return <></>
  }
}