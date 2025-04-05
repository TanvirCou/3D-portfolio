import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Speech from './Speech';
import * as motion from "motion/react-client"
import ResumeButton from './ResumeButton';
import Shape from './Shape';

const variants = {
    introInitial: { opacity: 0, x: -100 },
    introAnimate: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.4 } },
    scrollVisible: { y: 10, opacity: 0, transition: { duration: 2, repeat: Infinity } }
}

const socialVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2 } }
}

const Hero = () => {
    const socialData = [
        {
            id: "Linkedin",
            Logo: FaLinkedin,
            link: "https://www.linkedin.com/in/tnvr-kazi/",
        },
        {
            id: "github",
            Logo: FaGithub,
            link: "https://github.com/TanvirCou",
        },
        {
            id: "fb",
            Logo: FaFacebook,
            link: "https://www.facebook.com/ahmed.tnvr.999",
        },
        {
            id: "instagram",
            Logo: FaInstagram,
            link: "https://www.instagram.com/tnvr_ahmed",
        },
    ]

    return (
        <div className='h-screen w-full flex items-center justify-center overflow-hidden'>
            <div className='w-[90%] lg:w-[80%] h-screen flex flex-col sm:flex-row'>
                <div className='w-full sm:w-1/2 flex flex-col sm:justify-between pt-2 py-0 sm:pt-0 sm:py-4 md:py-6 text-center sm:text-start'>
                    <motion.p initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className='text-2xl/[30Spx] sm:text-3xl/[40px] md:text-4xl/[45px] lg:text-5xl/[55px] font-semibold text-[pink]'>Hey There, <br /> <span className='text-white'>I'm Tanvir!</span></motion.p>
                    <motion.div variants={variants} initial="introInitial" animate="introAnimate" className='flex flex-col gap-y-2'>
                        <motion.p variants={variants} className='text-md md:text-lg font-medium font-[Poppins]'>Fronted Developer</motion.p>
                        <motion.p variants={variants} className='text-[10px] md:text-xs '>Next.js | React.js <br /> Typescript | TailwindCSS</motion.p>
                    </motion.div>
                    <motion.a variants={variants} animate="scrollVisible" href='/#services' className="hidden sm:block cursor-pointer w-fit">
                        <Image src='/scroll.png' alt="" width={40} height={40} />
                    </motion.a>
                </div>

                <div className='w-full sm:w-1/2 flex flex-col items-center gap-y-2 sm:gap-y-0 sm:items-end sm:justify-between mt-3 sm:mt-0'>
                    <motion.div variants={socialVariants} initial="initial" animate="animate" className="flex flex-col max-sm:flex-row items-center gap-x-4 sm:gap-x-0 gap-y-0 sm:gap-y-2 md:gap-y-2.5 bg-[#2f204e] py-3 px-3 rounded-md sm:rounded-b-md">
                        {socialData.map(data => (
                            <motion.a variants={socialVariants} type='button' href={data.link} target='_blank' rel="noreferrer" key={data.id} className='md:text-xl text-lg'>
                                <data.Logo color="white" />
                            </motion.a>
                        ))}
                    </motion.div>
                    <div className='w-full'>
                        <Speech />
                    </div>
                    <ResumeButton />
                    <motion.a animate={{ x: [200, 0], opacity: [0, 1] }} transition={{ duration: 2 }} href='/#contact' className='hidden sm:block'>
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className='relative md:mb-4 cursor-pointer'>
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
                            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-20 h-20 m-auto'>
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

            <div className='absolute h-full w-full top-0 left-0 -z-10 flex justify-center'>
                <div className='w-full mr-0 sm:mr-12 mt-44 sm:mt-0'>
                    <Shape />
                </div>
                <div className='absolute bottom-0 right-0 sm:right-16 left-0 m-auto h-[320px] w-[200px] sm:h-[350px] sm:w-[200px] md:h-[380px] md:w-[220px] lg:h-[420px] lg:w-[250px] '>
                    <Image src="/tnvr1.png" alt='' fill />
                </div>
                <div className='absolute bottom-0 right-6'>
                    <motion.a animate={{ x: [200, 0], opacity: [0, 1] }} transition={{ duration: 2 }} href='/#contact' className='block sm:hidden'>
                        <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className='relative md:mb-4 cursor-pointer'>
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
                            <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-20 h-20 m-auto'>
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
    )
}

export default Hero