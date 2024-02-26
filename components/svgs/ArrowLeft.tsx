interface ArrowLeftTypes {
  theme: 'dark' | 'light'
  className?: string
}

export const ArrowLeft = ({ theme, className }: ArrowLeftTypes) => {
  return (
    <div className={className}>
      <div className="tablet:block hidden animate-wiggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="59"
          height="182"
          viewBox="0 0 59 182"
          fill="none"
        >
          <path
            d="M3 160.405C9.31913 166.418 14.7382 174.776 23.0199 178.775C29.0586 181.691 34.6161 155.322 35.5065 152.735"
            stroke={theme === 'dark' ? '#F0E817' : 'black'}
            stroke-width="5.5329"
            stroke-linecap="round"
          />
          <path
            d="M55.7022 3C30.4989 18.5747 16.7538 47.8551 12.6697 74.4911C8.02153 104.806 8.23917 140.012 22.2669 168.329"
            stroke={theme === 'dark' ? '#F0E817' : 'black'}
            stroke-width="5.5329"
            stroke-linecap="round"
          />
        </svg>
      </div>

      <div className="block tablet:hidden animate-wiggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="121"
          viewBox="0 0 39 121"
          fill="none"
        >
          <path
            d="M2 106.639C6.20079 110.636 9.80325 116.192 15.3087 118.851C19.3231 120.789 23.0175 103.26 23.6094 101.54"
            stroke="black"
            stroke-width="3.67812"
            stroke-linecap="round"
          />
          <path
            d="M37.035 2C20.2805 12.3537 11.1432 31.8185 8.4282 49.5253C5.33819 69.678 5.48287 93.0815 14.8081 111.906"
            stroke="black"
            stroke-width="3.67812"
            stroke-linecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
