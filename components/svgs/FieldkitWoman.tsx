interface FieldkitWomanTypes {
  theme: 'dark' | 'light'
}

export const FieldkitWoman = ({ theme }: FieldkitWomanTypes) => {
  return (
    <>
      <div className="tablet:flex hidden">
        <svg
          width="221"
          height="409"
          viewBox="0 0 221 409"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M103.431 14.9108C100.176 15.787 94.4159 18.5407 90.6597 21.044C78.7645 29.3051 73.631 38.4422 73.5056 51.2092C73.5056 60.9722 76.8864 68.983 83.0217 73.7391C85.5261 75.6164 87.5297 78.2452 87.5297 79.6219C87.5297 81.7499 87.1535 81.8753 85.6515 80.6232C82.1453 77.6191 81.269 79.9979 84.0235 85.38C86.4025 90.2614 86.5279 91.5128 85.2753 97.1456C84.399 100.525 83.7734 104.656 83.7734 106.282C83.7734 107.784 83.0217 109.412 82.0199 109.787C79.0153 110.914 73.7564 121.177 72.8793 127.686C72.1283 133.819 63.9895 147.713 56.2261 156.349C51.8436 161.231 46.2091 170.744 42.5783 179.505C40.9504 183.26 39.1975 186.89 38.5714 187.641C36.568 189.643 37.4445 196.278 40.4496 202.661C46.2091 215.053 66.3685 243.716 71.1266 246.344C72.2537 246.97 73.2555 247.471 73.3802 247.596C73.5056 247.721 69.3738 260.112 64.2396 275.258C58.9814 290.403 53.3462 307.3 51.7189 312.808C49.9654 318.315 46.0845 329.705 42.9537 338.216C39.9487 346.728 37.4445 354.863 37.4445 356.365C37.4445 360.997 35.6916 362.248 27.4275 363.626C11.1499 366.254 6.51712 372.888 15.1567 381.524C20.4156 386.781 30.3074 388.659 45.9591 387.657C58.9814 386.907 62.1114 385.279 63.1131 378.896C64.7405 369.133 66.2431 366.004 69.3738 366.004C73.1301 366.004 80.7681 357.618 81.8945 352.11C82.3954 349.732 83.7734 346.728 85.0252 345.351C86.2771 343.975 91.4113 332.96 96.2941 320.943C105.685 297.913 109.566 290.027 114.2 284.145L117.08 280.64L121.587 289.777C135.36 318.065 141.496 332.459 143.249 340.72C144.251 345.727 146.004 351.484 147.005 353.487C148.007 355.489 148.883 357.993 148.883 358.994C148.883 362.749 152.64 364.752 159.651 364.752C163.408 364.752 166.288 365.128 166.163 365.628C166.037 366.254 166.914 368.882 168.291 371.511L170.67 376.393L165.411 381.149C160.028 385.905 159.026 388.533 161.78 390.662C164.034 392.539 202.224 393.666 205.855 392.038C210.863 389.786 210.613 386.406 204.603 379.021C197.591 370.51 196.088 367.631 196.839 364.502C197.34 363 195.588 358.118 192.708 352.361C190.079 347.103 186.572 338.842 185.07 334.086C183.567 329.204 178.183 314.935 173.175 302.168C168.166 289.401 163.158 274.757 161.906 269.625C160.779 264.494 158.775 255.982 157.398 250.85C156.02 245.719 154.268 238.584 153.516 235.204C152.013 227.945 150.762 225.817 147.632 225.817C146.129 225.817 145.002 227.194 144.251 230.448C143.75 232.952 142.497 235.204 141.621 235.58C139.493 236.206 127.221 223.689 127.848 221.686C128.599 219.559 151.513 207.042 154.893 207.042C156.771 207.042 156.897 205.54 154.893 203.537C154.017 202.661 151.388 202.41 147.882 202.911C142.373 203.662 142.247 203.662 143.124 200.658C143.624 199.031 144.375 194.65 144.752 191.021C145.127 187.516 145.878 184.512 146.379 184.512C146.754 184.512 150.135 189.643 153.892 195.777C157.523 202.035 160.779 206.916 161.029 206.541C162.156 205.414 143.249 166.613 140.369 163.86C137.865 161.481 137.489 160.23 138.115 156.599L138.866 152.219L144.251 153.595C150.386 154.973 153.391 157.351 156.146 162.608C157.649 165.486 174.426 208.544 175.428 212.049C175.554 212.424 175.178 214.677 174.677 217.305C173.801 221.185 172.799 222.187 167.916 224.44C164.66 225.817 163.158 226.944 164.535 226.944C170.295 226.818 183.943 219.308 183.943 216.304C183.943 215.303 181.689 209.294 179.06 202.911C176.305 196.528 171.546 184.387 168.291 175.75C165.036 167.114 161.154 157.851 159.527 155.097C157.148 150.842 157.022 149.59 158.149 146.711C159.026 144.834 160.904 142.08 162.407 140.703C170.42 133.194 173.175 117.923 167.79 110.663C165.287 107.158 165.161 106.282 166.413 103.028C167.289 101.026 167.666 97.3955 167.289 95.0175C166.664 91.3874 167.165 90.2614 170.045 87.8834C172.047 86.256 174.927 83.1266 176.555 80.8739C179.184 77.2438 179.31 76.6178 177.432 74.8658C175.679 73.113 175.178 73.113 171.672 74.8658C169.544 75.9925 166.413 76.8685 164.535 76.8685C161.53 76.8685 161.405 76.4932 161.405 70.485C161.405 61.4728 159.276 55.2145 154.142 49.3317C149.009 43.1985 144.251 40.57 138.24 40.57H133.733L135.736 36.815C138.992 30.6819 138.115 25.8004 133.232 21.1691C126.345 14.6605 114.325 12.1572 103.431 14.9108ZM150.887 80.9985C147.005 84.8793 143.249 95.2682 141.12 108.16C139.617 116.797 138.866 118.674 137.238 118.424C135.987 118.173 132.48 120.927 128.849 124.682C124.091 129.689 122.589 132.192 122.589 135.196C122.589 137.324 121.838 139.827 120.836 140.703C119.583 141.58 119.208 143.583 119.583 146.086C119.834 148.339 120.585 155.097 121.337 161.356C122.463 171.745 122.339 172.871 120.084 176.001C117.08 180.131 116.954 183.635 119.583 187.641C121.462 190.52 121.337 191.145 118.332 197.654C116.579 201.409 114.45 204.538 113.323 204.538C110.694 204.538 106.436 210.421 107.187 213.05C107.564 214.677 106.436 215.929 103.181 217.431C95.9186 220.935 94.2905 220.309 92.5378 213.551C88.1552 196.152 87.4043 171.244 90.6597 153.971L91.6614 149.089L93.1641 152.845C96.4195 160.479 107.939 160.98 115.702 153.721C118.958 150.717 118.958 150.341 117.204 148.464C115.326 146.587 114.701 146.711 110.193 149.215C107.564 150.717 104.183 151.969 102.68 151.969C99.174 151.969 97.1704 147.963 98.7985 143.832C99.5495 141.955 99.8003 139.952 99.2994 139.326C98.1722 137.449 91.7868 138.075 89.7833 140.328C87.5297 143.082 84.0235 157.351 82.7716 168.115C82.0199 175.625 81.6444 176.25 78.5144 177.127C75.0082 178.003 75.0083 178.003 75.0083 172.12C75.0083 166.238 76.2601 161.106 79.3908 153.846C80.2672 151.718 81.8945 148.089 82.8963 145.46C83.8981 142.956 86.5279 139.326 88.6561 137.449C90.9105 135.446 92.5378 132.818 92.5378 131.066C92.5378 127.686 92.2877 127.686 98.1722 130.064C101.052 131.316 105.56 131.942 110.318 131.692L117.956 131.316L107.688 127.06C98.5484 123.43 96.9204 122.179 93.665 117.172C89.157 109.912 88.1552 104.656 90.1588 98.7722C91.4113 95.3928 92.4124 94.3915 94.0404 94.7675C97.1704 95.6435 97.5466 90.5114 94.5413 86.882C92.9133 85.004 93.1641 80.6232 94.9168 80.6232C95.4177 80.6232 98.1722 81.7499 100.927 83.1266C106.812 86.0053 117.581 88.6341 118.707 87.5074C119.083 87.0067 118.457 86.0053 117.204 85.1293C116.078 84.2533 115.076 83.2519 115.076 82.8766C115.076 82.5006 120.585 82.2506 127.347 82.2506C134.985 82.2506 141.621 81.4992 145.127 80.2479C153.141 77.6191 154.142 77.7445 150.887 80.9985ZM158.274 94.6422C160.028 95.3928 161.405 96.7702 161.405 97.5209C161.405 99.8989 157.649 103.654 152.39 106.783C146.88 110.038 146.63 109.412 149.51 99.649C151.638 92.7648 152.765 92.1388 158.274 94.6422ZM82.5208 138.701C82.5208 143.707 56.727 193.274 54.0979 193.274C53.2215 193.274 52.4699 193.774 52.4699 194.525C52.4699 195.151 53.597 195.777 54.8489 195.777C57.8542 195.777 58.3551 196.403 63.4886 208.919C70.2502 225.066 70.8765 227.945 68.2467 230.573C66.1184 232.576 65.8676 232.451 62.2367 228.32C55.976 221.061 43.7054 201.91 43.7054 199.407C43.7054 194.65 52.7207 173.622 59.8577 161.982C63.8641 155.473 68.6221 147.463 70.3756 144.208C72.2537 141.079 74.7574 138.075 75.8846 137.824C80.2672 136.698 82.5208 136.948 82.5208 138.701ZM129.1 147.838C130.227 149.089 131.354 153.471 131.729 157.601C132.23 161.732 132.857 167.489 133.357 170.368C134.108 175.374 133.983 175.75 131.228 175.75C129.6 175.75 127.722 175.249 126.971 174.748C125.343 173.622 124.592 145.71 126.095 145.71C126.721 145.71 128.098 146.711 129.1 147.838ZM136.112 183.511C136.487 185.263 135.736 185.763 132.981 185.763C129.476 185.763 126.345 183.886 126.345 181.633C126.345 181.133 128.474 180.757 130.978 181.007C134.358 181.257 135.861 182.009 136.112 183.511ZM71.502 190.269C71.8775 194.275 74.0065 202.41 76.1354 208.168C78.2636 214.051 80.0164 219.183 80.0164 219.683C80.0164 220.059 78.7645 220.184 77.1365 219.934C73.7564 219.308 69.2484 212.675 66.1184 203.537C64.7405 199.657 62.8623 195.652 61.8606 194.525C60.2332 192.647 60.3586 191.897 63.9895 187.265C66.2431 184.387 68.6221 182.134 69.3738 182.384C69.9994 182.635 71.0012 186.139 71.502 190.269ZM83.5226 184.136C83.2725 185.638 81.8945 186.389 79.5155 186.389C75.3837 186.389 73.631 183.761 77.1365 182.885C82.0199 181.633 83.8981 182.009 83.5226 184.136ZM131.604 195.777C130.978 205.164 123.591 218.557 120.084 216.429C118.081 215.178 118.582 211.423 122.088 199.908C125.219 190.019 125.594 189.393 128.724 189.769C131.729 190.144 131.979 190.52 131.604 195.777ZM86.1524 201.66C87.7797 207.042 89.5325 213.05 90.1588 215.053C91.4113 218.933 90.7851 220.81 88.2806 220.81C86.2771 220.81 78.7645 200.908 78.7645 195.652C78.7645 193.023 79.3908 192.021 81.0181 192.021C82.7716 192.021 84.0235 194.275 86.1524 201.66ZM109.442 228.195C109.442 231.574 103.682 236.706 101.428 235.33C99.0486 233.828 99.9257 228.57 102.93 226.443C106.687 223.814 109.442 224.565 109.442 228.195ZM87.0288 227.569C87.4043 228.446 86.778 232.826 85.6515 237.207C82.6462 249.098 83.1471 248.347 78.8899 246.72C72.0029 244.217 69.6239 230.949 75.7592 229.697C77.0118 229.447 79.2654 228.446 80.6427 227.569C83.7734 225.316 86.1524 225.316 87.0288 227.569ZM190.079 369.383C191.831 370.76 193.584 372.888 193.709 374.139C194.085 375.892 193.334 375.767 188.701 373.013C185.07 370.885 181.188 369.758 177.933 369.758C172.924 369.758 171.046 368.256 174.302 366.754C177.306 365.378 186.822 367.005 190.079 369.383ZM34.189 368.006C37.8201 369.383 36.1924 372.136 30.9335 373.514C23.0451 375.767 19.2888 375.641 19.2888 373.514C19.2888 372.012 25.5493 369.008 32.0604 367.255C32.1856 367.255 33.0621 367.631 34.189 368.006Z"
            fill={theme === 'dark' ? '#F0E817' : 'black'}
          />
          <path
            d="M119.583 90.1361C116.703 92.8894 117.08 96.8948 120.084 96.8948C121.462 96.8948 122.589 96.2695 122.589 95.6435C122.589 93.5155 127.097 94.2668 129.476 96.8948C132.48 100.15 133.858 100.024 133.858 96.5195C133.858 93.0148 132.731 91.3874 129.225 89.51C125.469 87.6327 121.838 87.758 119.583 90.1361Z"
            fill={theme === 'dark' ? '#F0E817' : 'black'}
          />
          <path
            d="M98.423 105.281C96.2941 107.284 97.7967 111.915 101.177 114.293C105.56 117.423 107.939 117.547 110.193 114.919C111.069 113.918 113.824 111.915 116.203 110.663L120.711 108.285L114.324 108.16C110.819 108.16 106.937 107.409 105.56 106.282C103.056 104.405 99.8002 103.904 98.423 105.281Z"
            fill={theme === 'dark' ? '#F0E817' : 'black'}
          />
        </svg>
      </div>
      <div className="tablet:hidden flex">
        <svg
          width="145"
          height="268"
          viewBox="0 0 145 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.862 9.7704C65.7261 10.3445 61.9471 12.1489 59.4825 13.7892C51.6781 19.2023 48.3099 25.1895 48.2276 33.5552C48.2276 39.9524 50.4458 45.2016 54.4712 48.318C56.1144 49.5482 57.4289 51.2707 57.4289 52.1727C57.4289 53.5672 57.1821 53.6493 56.1967 52.8289C53.8962 50.8605 53.3212 52.4192 55.1285 55.9458C56.6894 59.1444 56.7717 59.9643 55.9498 63.6553C55.3748 65.8696 54.9644 68.5764 54.9644 69.6422C54.9644 70.6265 54.4712 71.6928 53.8139 71.9387C51.8426 72.677 48.3922 79.4023 47.8167 83.6672C47.324 87.6858 41.984 96.7896 36.8904 102.449C34.015 105.648 30.3182 111.881 27.9359 117.622C26.8679 120.082 25.7178 122.461 25.307 122.953C23.9926 124.265 24.5676 128.612 26.5393 132.795C30.3182 140.915 43.5449 159.696 46.6667 161.418C47.4063 161.829 48.0635 162.157 48.1453 162.239C48.2276 162.321 45.5167 170.44 42.1481 180.365C38.6981 190.288 35.0009 201.361 33.9332 204.969C32.7827 208.578 30.2364 216.041 28.1823 221.619C26.2107 227.196 24.5676 232.527 24.5676 233.511C24.5676 236.546 23.4175 237.366 17.9954 238.268C7.31552 239.99 4.27591 244.337 9.94442 249.996C13.3949 253.441 19.8849 254.671 30.1541 254.015C38.6981 253.523 40.7518 252.457 41.409 248.274C42.4767 241.877 43.4626 239.826 45.5167 239.826C47.9813 239.826 52.9926 234.331 53.7317 230.722C54.0603 229.164 54.9644 227.196 55.7858 226.294C56.6071 225.392 59.9757 218.174 63.1793 210.3C69.3411 195.209 71.8875 190.042 74.9274 186.188L76.817 183.891L79.7742 189.878C88.811 208.414 92.8364 217.846 93.9869 223.259C94.6441 226.54 95.7941 230.312 96.4514 231.625C97.1087 232.937 97.6837 234.577 97.6837 235.233C97.6837 237.694 100.148 239.006 104.749 239.006C107.214 239.006 109.103 239.252 109.021 239.58C108.939 239.99 109.514 241.713 110.417 243.435L111.978 246.634L108.528 249.75C104.995 252.867 104.338 254.589 106.145 255.984C107.624 257.214 132.681 257.952 135.063 256.886C138.349 255.41 138.185 253.195 134.242 248.356C129.641 242.779 128.655 240.893 129.148 238.842C129.477 237.858 128.327 234.659 126.437 230.887C124.712 227.442 122.412 222.029 121.426 218.912C120.44 215.713 116.908 206.363 113.621 197.998C110.335 189.632 107.049 180.036 106.228 176.674C105.488 173.311 104.174 167.734 103.27 164.371C102.366 161.009 101.216 156.334 100.723 154.119C99.7373 149.362 98.9159 147.968 96.8623 147.968C95.8764 147.968 95.1369 148.87 94.6441 151.003C94.3155 152.643 93.4937 154.119 92.9187 154.365C91.5223 154.775 83.471 146.574 83.8819 145.261C84.3751 143.867 99.4086 135.666 101.627 135.666C102.859 135.666 102.941 134.681 101.627 133.369C101.052 132.795 99.3268 132.631 97.0264 132.959C93.4119 133.451 93.3296 133.451 93.9046 131.483C94.2332 130.416 94.7259 127.546 94.9728 125.168C95.2191 122.871 95.7118 120.903 96.0405 120.903C96.2868 120.903 98.505 124.265 100.97 128.284C103.352 132.385 105.488 135.583 105.652 135.337C106.392 134.599 93.9869 109.174 92.0973 107.37C90.4542 105.811 90.2078 104.991 90.6187 102.613L91.1114 99.7423L94.6441 100.644C98.6696 101.547 100.641 103.105 102.449 106.55C103.435 108.436 114.443 136.65 115.1 138.946C115.182 139.192 114.936 140.669 114.607 142.391C114.032 144.933 113.375 145.589 110.171 147.066C108.035 147.968 107.049 148.706 107.953 148.706C111.732 148.624 120.686 143.703 120.686 141.735C120.686 141.078 119.208 137.142 117.483 132.959C115.675 128.776 112.553 120.821 110.417 115.161C108.281 109.502 105.735 103.433 104.667 101.629C103.106 98.8402 103.024 98.0198 103.763 96.1335C104.338 94.9033 105.57 93.0992 106.556 92.1966C111.814 87.276 113.621 77.27 110.089 72.5128C108.446 70.2163 108.364 69.6422 109.185 67.51C109.76 66.1977 110.007 63.8191 109.76 62.2608C109.35 59.8822 109.678 59.1444 111.568 57.5862C112.882 56.5198 114.771 54.4692 115.839 52.9932C117.564 50.6145 117.647 50.2043 116.414 49.0563C115.264 47.9078 114.936 47.9078 112.635 49.0563C111.239 49.7946 109.185 50.3686 107.953 50.3686C105.981 50.3686 105.899 50.1226 105.899 46.1858C105.899 40.2805 104.502 36.1797 101.134 32.3249C97.7659 28.3061 94.6441 26.5838 90.7005 26.5838H87.7433L89.0578 24.1233C91.1937 20.1045 90.6187 16.9059 87.4146 13.8712C82.896 9.60637 75.0093 7.96605 67.862 9.7704ZM98.9982 53.0748C96.4514 55.6177 93.9869 62.4251 92.59 70.8724C91.6041 76.5318 91.1114 77.7619 90.0433 77.5981C89.2219 77.4338 86.9214 79.2385 84.5392 81.6988C81.4174 84.9795 80.4315 86.6199 80.4315 88.5883C80.4315 89.9823 79.9388 91.6226 79.2815 92.1966C78.4597 92.7711 78.2133 94.0834 78.4597 95.7238C78.6242 97.1999 79.117 101.629 79.6101 105.73C80.3492 112.537 80.2674 113.275 78.7883 115.326C76.817 118.032 76.7347 120.328 78.4597 122.953C79.6919 124.84 79.6101 125.249 77.6383 129.514C76.4883 131.975 75.0915 134.025 74.3525 134.025C72.627 134.025 69.8338 137.88 70.3266 139.602C70.5734 140.669 69.8338 141.489 67.698 142.473C62.933 144.769 61.8648 144.359 60.7148 139.93C57.8394 128.53 57.3467 112.209 59.4825 100.891L60.1398 97.6917L61.1257 100.153C63.2616 105.155 70.8197 105.483 75.9134 100.727C78.0492 98.7581 78.0492 98.5121 76.8988 97.282C75.6665 96.0518 75.2561 96.1335 72.2984 97.7739C70.5734 98.7581 68.3552 99.5785 67.3693 99.5785C65.0689 99.5785 63.7543 96.9539 64.8225 94.2472C65.3152 93.017 65.4798 91.7048 65.1511 91.2945C64.4116 90.0644 60.2221 90.4746 58.9076 91.9507C57.4289 93.7553 55.1285 103.105 54.3071 110.158C53.8139 115.08 53.5676 115.489 51.514 116.064C49.2135 116.638 49.2135 116.638 49.2135 112.783C49.2135 108.928 50.0349 105.565 52.089 100.809C52.664 99.4142 53.7317 97.036 54.3889 95.3136C55.0462 93.6732 56.7717 91.2945 58.168 90.0644C59.6471 88.7521 60.7148 87.0296 60.7148 85.8816C60.7148 83.6672 60.5507 83.6672 64.4116 85.2254C66.3011 86.0459 69.2589 86.4556 72.3806 86.2918L77.392 86.0459L70.6552 83.257C64.6584 80.8784 63.5902 80.0584 61.4544 76.7777C58.4966 72.0209 57.8394 68.5764 59.1539 64.7212C59.9757 62.5068 60.6325 61.8506 61.7007 62.097C63.7543 62.6711 64.0012 59.3082 62.0294 56.93C60.9612 55.6994 61.1257 52.8289 62.2757 52.8289C62.6043 52.8289 64.4116 53.5672 66.2193 54.4692C70.0802 56.3555 77.1456 58.078 77.8847 57.3398C78.1311 57.0117 77.7206 56.3555 76.8988 55.7815C76.1597 55.2075 75.5024 54.5514 75.5024 54.3055C75.5024 54.059 79.117 53.8952 83.5533 53.8952C88.5646 53.8952 92.9187 53.4029 95.2191 52.583C100.477 50.8605 101.134 50.9426 98.9982 53.0748ZM103.845 62.0149C104.995 62.5068 105.899 63.4093 105.899 63.9012C105.899 65.4594 103.435 67.9202 99.9841 69.9703C96.3691 72.103 96.205 71.6928 98.0946 65.2956C99.4909 60.7848 100.23 60.3746 103.845 62.0149ZM54.1426 90.8848C54.1426 94.1651 37.2191 126.644 35.4941 126.644C34.9191 126.644 34.4259 126.972 34.4259 127.464C34.4259 127.874 35.1654 128.284 35.9868 128.284C37.9586 128.284 38.2872 128.694 41.6554 136.896C46.0917 147.476 46.5026 149.362 44.7772 151.084C43.3808 152.397 43.2163 152.315 40.834 149.608C36.7263 144.852 28.6755 132.303 28.6755 130.663C28.6755 127.546 34.5904 113.767 39.2731 106.139C41.9017 101.875 45.0235 96.6258 46.174 94.4931C47.4063 92.443 49.049 90.4746 49.7885 90.3103C52.664 89.5725 54.1426 89.7363 54.1426 90.8848ZM84.7033 96.8718C85.4428 97.6917 86.1824 100.563 86.4287 103.269C86.7574 105.976 87.1683 109.748 87.4969 111.635C87.9896 114.915 87.9074 115.161 86.1001 115.161C85.0319 115.161 83.7997 114.833 83.3069 114.505C82.2388 113.767 81.746 95.4774 82.7319 95.4774C83.1424 95.4774 84.0465 96.1335 84.7033 96.8718ZM89.3042 120.247C89.5505 121.395 89.0578 121.723 87.2501 121.723C84.9501 121.723 82.896 120.493 82.896 119.016C82.896 118.688 84.2928 118.442 85.936 118.606C88.1537 118.77 89.1396 119.262 89.3042 120.247ZM46.9131 124.675C47.1594 127.3 48.5563 132.631 49.9531 136.404C51.3494 140.259 52.4994 143.621 52.4994 143.949C52.4994 144.195 51.6781 144.277 50.6099 144.113C48.3922 143.703 45.4345 139.356 43.3808 133.369C42.4767 130.827 41.2445 128.202 40.5872 127.464C39.5195 126.234 39.6018 125.742 41.984 122.707C43.4626 120.821 45.0235 119.345 45.5167 119.508C45.9272 119.673 46.5844 121.969 46.9131 124.675ZM54.7999 120.656C54.6358 121.641 53.7317 122.133 52.1708 122.133C49.4599 122.133 48.3099 120.41 50.6099 119.836C53.8139 119.016 55.0462 119.262 54.7999 120.656ZM86.3465 128.284C85.936 134.435 81.0888 143.211 78.7883 141.817C77.4743 140.997 77.8029 138.536 80.1029 130.991C82.157 124.512 82.4033 124.101 84.4569 124.347C86.4287 124.593 86.5928 124.84 86.3465 128.284ZM56.5253 132.139C57.593 135.665 58.743 139.602 59.1539 140.915C59.9757 143.457 59.5648 144.687 57.9216 144.687C56.6071 144.687 51.6781 131.647 51.6781 128.202C51.6781 126.479 52.089 125.823 53.1567 125.823C54.3071 125.823 55.1285 127.3 56.5253 132.139ZM71.8057 149.526C71.8057 151.741 68.0266 155.103 66.5475 154.201C64.9866 153.217 65.5621 149.772 67.5334 148.378C69.9979 146.656 71.8057 147.148 71.8057 149.526ZM57.1003 149.116C57.3467 149.69 56.9357 152.561 56.1967 155.432C54.2249 163.223 54.5535 162.731 51.7603 161.665C47.2417 160.025 45.6808 151.331 49.7062 150.51C50.5281 150.347 52.0067 149.69 52.9103 149.116C54.9644 147.64 56.5253 147.64 57.1003 149.116ZM124.712 242.041C125.862 242.943 127.012 244.337 127.094 245.157C127.341 246.306 126.848 246.224 123.808 244.419C121.426 243.025 118.879 242.287 116.743 242.287C113.457 242.287 112.224 241.302 114.361 240.318C116.332 239.416 122.576 240.483 124.712 242.041ZM22.4317 241.139C24.8141 242.041 23.7461 243.845 20.2957 244.747C15.1201 246.224 12.6555 246.141 12.6555 244.747C12.6555 243.763 16.7631 241.795 21.0351 240.646C21.1172 240.646 21.6923 240.893 22.4317 241.139Z"
            fill={theme === 'dark' ? '#F0E817' : 'black'}
          />
          <path
            d="M78.4597 59.0623C76.5702 60.8664 76.817 63.491 78.7884 63.491C79.692 63.491 80.4316 63.0813 80.4316 62.671C80.4316 61.2766 83.3893 61.769 84.9502 63.491C86.9215 65.6237 87.8251 65.5416 87.8251 63.2451C87.8251 60.9486 87.0861 59.8822 84.7856 58.652C82.3211 57.4219 79.9388 57.504 78.4597 59.0623Z"
            fill={theme === 'dark' ? '#F0E817' : 'black'}
          />
          <path
            d="M64.5762 68.9861C63.1793 70.2984 64.1652 73.3332 66.3834 74.8914C69.2588 76.942 70.8197 77.0236 72.2984 75.3016C72.8734 74.6455 74.6806 73.3332 76.242 72.5127L79.1992 70.9545L75.0093 70.8724C72.7093 70.8724 70.1625 70.3805 69.2589 69.6422C67.6157 68.4121 65.4798 68.084 64.5762 68.9861Z"
            fill={theme === 'dark' ? '#F0E817' : 'black'}
          />
        </svg>
      </div>
    </>
  )
}