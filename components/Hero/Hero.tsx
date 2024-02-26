"use client";
import { ThemeEnum, fadeInAnimation } from "@/consts/types";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";

interface HeroTypes {
  theme: ThemeEnum;
}

export const Hero = ({ theme }: HeroTypes) => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef);

  const [heroFont, setHeroFont] = useState({
    fontFamily: "swear-display-cilati, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
  });

  return (
    <>
      <motion.div
        variants={{
          ...fadeInAnimation,
          visible: {
            ...fadeInAnimation.visible,
            transition: {
              ...fadeInAnimation.visible.transition,
              delay: 2.3,
            },
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="exit"
        className={`tablet:absolute hidden top-[450px] right-0 tablet:border-b h-[8px] w-[70%] ${
          theme === ThemeEnum.DARK ? "border-white" : "border-black"
        }`}
      ></motion.div>
      <div
        ref={heroRef}
        className={`mt-16 flex flex-col items-center justify-center relative transition ease-in-out delay-150`}
      >
        <motion.div
          variants={{
            ...fadeInAnimation,
            visible: {
              ...fadeInAnimation.visible,
              transition: {
                ...fadeInAnimation.visible.transition,
                delay: 0.2,
              },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          exit="exit"
        >
          <svg
            width="39"
            height="42"
            viewBox="0 0 39 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2674 20.0636C20.1906 20.0636 18.71 20.3375 16.9601 20.7484V21.2962C16.9601 34.7176 17.0274 37.4567 17.3639 39.0316C25.1036 38.2099 25.7767 36.2241 25.7767 30.1297C25.7767 24.7885 24.9017 20.0636 21.2674 20.0636ZM21.9405 41.0859H0.134604V39.1001L2.55748 38.2099C4.37463 37.5252 4.44193 36.4295 4.44193 22.5973C4.44193 3.4923 3.97082 3.42383 2.15366 2.73906L0 1.98582V0H20.729C32.0358 0 36.6123 3.08145 36.6123 8.90195C36.6123 13.216 31.1608 16.7083 25.3729 18.7626C35.3335 19.3789 38.8333 23.2136 38.8333 28.8286C38.8333 35.4024 31.43 41.0859 21.9405 41.0859ZM24.4306 10.2715C24.4306 3.69774 22.5462 2.60211 17.2966 2.12277C16.9601 3.76621 16.9601 6.16289 16.9601 18.6941C18.6427 18.6941 20.2579 18.6256 22.0078 18.6256C22.4116 18.6256 22.8154 18.6256 23.2192 18.6256C24.0268 17.0507 24.4306 13.6953 24.4306 10.2715Z"
              fill={theme === ThemeEnum.DARK ? "white" : "black"}
            />
            <path
              d="M19.1138 1.02715L13.3931 2.39668L12.0471 15.0648L13.3931 39.0316L19.1138 40.4012L26.8535 39.0316L27.863 30.1297L26.8535 23.9668L24.1614 19.8582L25.1709 15.0648L26.8535 4.10859L19.1138 1.02715Z"
              fill={theme === ThemeEnum.DARK ? "white" : "black"}
            />
            <path
              d="M15.0708 34.6055C15.0708 33.0346 11.3486 30.9332 11.3486 28.6891C11.3486 26.8121 13.1997 25.1392 16.0063 25.1392C18.3949 25.1392 19.1115 26.0981 19.1115 27.0161C19.1115 27.7302 18.9921 28.1178 18.4746 28.8523H18.375C17.3599 27.5262 15.5883 25.9349 14.613 25.9349C14.2348 25.9349 14.0955 26.2001 14.0955 26.5061C14.0955 28.1994 18.1959 29.954 18.1959 32.4226C18.1959 34.2587 16.0262 35.9316 12.8016 35.9316C10.4528 35.9316 9.79596 34.8504 9.79596 33.8711C9.79596 33.055 10.1343 32.4022 10.632 31.7289H10.7514C11.7267 33.2386 13.4784 35.0952 14.4936 35.0952C14.9315 35.1156 15.0708 34.8504 15.0708 34.6055Z"
              fill={theme === ThemeEnum.DARK ? "black" : "white"}
            />
            <path
              d="M19.2784 33.9119C19.2784 32.4226 20.0547 29.7296 21.1097 26.0165H20.0348L20.194 25.3432H21.2888C22.5627 25.18 23.6575 24.2211 25.1106 22.6298L25.5286 22.7522C25.2698 23.6091 25.0309 24.4863 24.7921 25.3432H26.4243L26.2651 26.0165H24.593C23.757 29.1379 23.1002 31.9941 23.1002 32.7286C23.1002 32.953 23.2196 33.0754 23.4186 33.0754C23.6973 33.0754 23.9959 32.9122 24.5333 32.4226L24.812 32.851C23.7968 34.4627 22.4433 35.9316 20.8907 35.9316C19.9153 35.9316 19.2784 35.2788 19.2784 33.9119Z"
              fill={theme === ThemeEnum.DARK ? "black" : "white"}
            />
            <path
              d="M27.8068 35.9316C26.5727 35.9316 25.8561 35.238 25.8561 33.9731C25.8561 32.3002 26.9708 31.5249 28.4636 31.5249C29.7376 31.5249 30.4541 32.1777 30.4541 33.463C30.4541 35.1156 29.3196 35.9316 27.8068 35.9316Z"
              fill={theme === ThemeEnum.DARK ? "black" : "white"}
            />
          </svg>
        </motion.div>

        <div
          className={`tablet:w-[1078px] w-full relative inline-block mt-16 h-[calc(100vh-150px)] transition ease-in-out delay-150`}
        >
          <div
            className={`${
              theme === ThemeEnum.DARK ? "text-white" : "text-black"
            } w-full transition ease-in-out delay-150 tablet:px-0 px-8`}
          >
            <motion.h1
              variants={{
                ...fadeInAnimation,
                visible: {
                  ...fadeInAnimation.visible,
                  transition: {
                    ...fadeInAnimation.visible.transition,
                    delay: 1.2,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              className={`tablet:text-[200px] tablet:block tablet:text-[184px] text-[58px] relative tablet:absolute tablet:left-0 tablet:top-0 tablet:z-20 pl-8 tablet:pl-0`}
              style={heroFont}
            >
              <Typewriter
                options={{
                  strings: [
                    "birdstreet",
                    "web design",
                    "development",
                    "sorcerery",
                    "consulting",
                    "ux design",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </motion.h1>
            <motion.div
              variants={{
                ...fadeInAnimation,
                visible: {
                  ...fadeInAnimation.visible,
                  transition: {
                    ...fadeInAnimation.visible.transition,
                    delay: 1.8,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
            >
              <div
                className={`${
                  theme === ThemeEnum.DARK ? "bg-black" : "bg-white"
                } inline-block pr-4 tablet:mt-[250px] transition ease-in-out delay-150 tablet:px-0 px-8`}
              >
                <span
                  style={{
                    ...heroFont,
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                  className={`${
                    theme === ThemeEnum.DARK ? "text-white" : "text-black"
                  } block transition ease-in-out delay-150 text-[32px] tablet:text-[42px] pr-[30px]`}
                >
                  a web design company
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={{
                ...fadeInAnimation,
                visible: {
                  ...fadeInAnimation.visible,
                  transition: {
                    ...fadeInAnimation.visible.transition,
                    delay: 1.5,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              className={`max-w-[515px] w-full tablet:px-0 px-8 tablet:mt-6 mt-4`}
            >
              <p
                className={`${
                  theme === ThemeEnum.DARK ? "text-white" : "text-black"
                }`}
              >
                👋 We will be opening our doors in May of 2024. For inquiries
                and information, please email us at{" "}
                <Link className="underline" href="mailto:hi@birdstreet.co">
                  hi@birdstreet.co
                </Link>
              </p>
            </motion.div>

            <motion.div
              variants={{
                ...fadeInAnimation,
                visible: {
                  ...fadeInAnimation.visible,
                  transition: {
                    ...fadeInAnimation.visible.transition,
                    delay: 1.3,
                  },
                },
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              exit="exit"
              className={`tablet:absolute tablet:w-[448px] tablet:h-[576px] tablet:right-0 tablet:top-0 z-10 hidden tablet:!flex tablet:justify-end tablet:items-end bg-gradient-to-b ${
                theme === ThemeEnum.DARK ? "from-[#000000]" : "from-[#F0F0F0]"
              } to-[#FDF8CB] rounded-[91px] p-10 tablet:mt-0 mt-8`}
            >
              <div className="relative flex justify-center items-center">
                <motion.svg
                  animate={{
                    x: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  width="48"
                  height="17"
                  viewBox="0 0 48 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative top-[2px]"
                >
                  <line y1="8.5" x2="47" y2="8.5" stroke="black" />
                  <line
                    x1="33.1226"
                    y1="0.882721"
                    x2="47.3365"
                    y2="8.22888"
                    stroke="black"
                  />
                  <line
                    y1="-0.5"
                    x2="16"
                    y2="-0.5"
                    transform="matrix(0.888366 -0.459135 -0.459135 -0.888366 32.8931 15.6731)"
                    stroke="black"
                  />
                </motion.svg>
                <span
                  className={`text-[24px] font-display ${
                    theme === ThemeEnum.DARK ? "text-black" : "text-black"
                  }`}
                  style={{
                    fontFamily: "swear-display, serif",
                    fontWeight: 300,
                    fontStyle: "italic",
                  }}
                >
                  Orange County, Ca
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
