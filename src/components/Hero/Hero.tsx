import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Speech from './Speech';
import * as motion from 'motion/react-client';
import ResumeButton from './ResumeButton';
import Shape from './Shape';

const variants = {
    introInitial: { opacity: 0, x: -100 },
    introAnimate: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, staggerChildren: 0.4 },
    },
    scrollVisible: {
        y: 10,
        opacity: 0,
        transition: { duration: 2, repeat: Infinity },
    },
};

const socialVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, staggerChildren: 0.2 },
    },
};

const Hero = () => {
    const socialData = [
        {
            id: 'Linkedin',
            Logo: FaLinkedin,
            link: 'https://www.linkedin.com/in/tnvr-kazi/',
        },
        {
            id: 'github',
            Logo: FaGithub,
            link: 'https://github.com/TanvirCou',
        },
        {
            id: 'fb',
            Logo: FaFacebook,
            link: 'https://www.facebook.com/ahmed.tnvr.999',
        },
        {
            id: 'instagram',
            Logo: FaInstagram,
            link: 'https://www.instagram.com/tnvr_ahmed',
        },
    ];

    return (
        <div className="flex h-screen w-full items-center justify-center overflow-hidden">
            <div className="flex h-screen w-[90%] flex-col sm:flex-row lg:w-[80%]">
                <div className="flex w-full flex-col py-0 pt-2 text-center sm:w-1/2 sm:justify-between sm:py-4 sm:pt-0 sm:text-start md:py-6">
                    <motion.p
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl/[30Spx] font-semibold text-[pink] sm:text-3xl/[40px] md:text-4xl/[45px] lg:text-5xl/[55px]"
                    >
                        Hey There, <br /> <span className="text-white">I&apos;m Tanvir!</span>
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="introInitial"
                        animate="introAnimate"
                        className="flex flex-col gap-y-2"
                    >
                        <motion.p
                            variants={variants}
                            className="text-md font-[Poppins] font-medium md:text-lg"
                        >
                            Fronted Developer
                        </motion.p>
                        <motion.p variants={variants} className="text-[10px] md:text-xs">
                            Next.js | React.js <br /> Typescript | TailwindCSS
                        </motion.p>
                    </motion.div>
                    <motion.a
                        variants={variants}
                        animate="scrollVisible"
                        href="/#services"
                        className="hidden w-fit cursor-pointer sm:block"
                    >
                        <Image src="/scroll.png" alt="" width={40} height={40} />
                    </motion.a>
                </div>

                <div className="mt-3 flex w-full flex-col items-center gap-y-2 sm:mt-0 sm:w-1/2 sm:items-end sm:justify-between sm:gap-y-0">
                    <motion.div
                        variants={socialVariants}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col items-center gap-x-4 gap-y-0 rounded-md bg-[#2f204e] px-3 py-3 max-sm:flex-row sm:gap-x-0 sm:gap-y-2 sm:rounded-b-md md:gap-y-2.5"
                    >
                        {socialData.map((data) => (
                            <motion.a
                                variants={socialVariants}
                                type="button"
                                href={data.link}
                                target="_blank"
                                rel="noreferrer"
                                key={data.id}
                                className="text-lg md:text-xl"
                            >
                                <data.Logo color="white" />
                            </motion.a>
                        ))}
                    </motion.div>
                    <div className="w-full">
                        <Speech />
                    </div>
                    <ResumeButton />
                    <motion.a
                        animate={{ x: [200, 0], opacity: [0, 1] }}
                        transition={{ duration: 2 }}
                        href="/#contact"
                        className="hidden sm:block"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            className="relative cursor-pointer md:mb-4"
                        >
                            <svg viewBox="0 0 200 200" width="100" height="100">
                                <circle cx="100" cy="100" r="90" fill="pink" />
                                <path
                                    id="innerCirclePath"
                                    fill="none"
                                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                />
                                <text className="text-lg tracking-wider">
                                    <textPath href="#innerCirclePath">Hire Now •</textPath>
                                </text>
                                <text className="text-lg tracking-wider">
                                    <textPath href="#innerCirclePath" startOffset="44%">
                                        Contact Me •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-20 w-20 items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="50"
                                    height="50"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                >
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                    <polyline points="9 6 18 6 18 15" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.a>
                </div>
            </div>

            <div className="absolute left-0 top-0 -z-10 flex h-full w-full justify-center">
                <div className="mr-0 mt-44 w-full sm:mr-12 sm:mt-0">
                    <Shape />
                </div>
                <div className="absolute bottom-0 left-0 right-0 m-auto h-[320px] w-[200px] sm:right-16 sm:h-[350px] sm:w-[200px] md:h-[380px] md:w-[220px] lg:h-[420px] lg:w-[250px]">
                    <Image src="/tnvr1.png" alt="" fill />
                </div>
                <div className="absolute bottom-0 right-6">
                    <motion.a
                        animate={{ x: [200, 0], opacity: [0, 1] }}
                        transition={{ duration: 2 }}
                        href="/#contact"
                        className="block sm:hidden"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                            className="relative cursor-pointer md:mb-4"
                        >
                            <svg viewBox="0 0 200 200" width="80" height="80">
                                <circle cx="100" cy="100" r="90" fill="pink" />
                                <path
                                    id="innerCirclePath"
                                    fill="none"
                                    d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                />
                                <text className="text-lg tracking-wider">
                                    <textPath href="#innerCirclePath">Hire Now •</textPath>
                                </text>
                                <text className="text-lg tracking-wider">
                                    <textPath href="#innerCirclePath" startOffset="44%">
                                        Contact Me •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-20 w-20 items-center justify-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="50"
                                    height="50"
                                    fill="none"
                                    stroke="black"
                                    strokeWidth="2"
                                >
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                    <polyline points="9 6 18 6 18 15" />
                                </svg>
                            </div>
                        </motion.div>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
