"use client"
import Image from 'next/image'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import * as motion from "motion/react-client"

const Speech = () => {
    return (
        <div className='flex w-full justify-end gap-x-1'>
            <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1, ease: "easeInOut" }} className='hidden sm:block sm:w-[80%] md:w-[70%] lg:w-[65%] h-[100px] bg-white rounded-t-lg rounded-l-lg text-sm text-black p-2'>
                <TypeAnimation
                    sequence={[
                        1000,
                        "I'm a passionate Frontend Developer specializing in React.js and Next.js, building high-performance, scalable, and user-friendly web applications.",
                        1000,
                        'With expertise in TypeScript, Tailwind CSS, and API integration, I create seamless and responsive UI experiences.',
                        1000,
                        'I’m also skilled in CI/CD pipelines and GitHub Actions, ensuring efficient and automated development workflows.',
                        1000
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </motion.div>
            <div className='items-end hidden sm:flex'>
                <Image src='/dp.jpeg' alt='' width={30} height={30} className='h-9 w-9 rounded-full object-cover' />
            </div>
        </div>
    )
}

export default Speech