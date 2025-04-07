'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { motion } from 'motion/react';
import RobotContainer from './Robot/RobotContainer';

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const formVariants = {
  hidden: { opacity: 0, y: 100, x: 100 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1, staggerChildren: 0.3 },
  },
};

// const messageVariants = {
//     hidden: { opacity: 1 },
//     visible: { opacity: 0, transition: { duration: 1, delay: 4 } },
// }

const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const current = formRef?.current || '';

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          // console.log('SUCCESS!');
          // setSuccess(true);
          setName('');
          setEmail('');
          setMessage('');
          toast.success('Successfully sent');
        },
        (error: any) => {
          // console.log('FAILED...', error);
          // setError(false);
          toast.error('There is an error.Please try again');
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      className="flex h-screen w-full items-center justify-center"
    >
      <motion.div
        variants={textVariants}
        className="flex h-full w-[90%] items-center justify-center gap-x-8 gap-y-8 max-md:flex-col sm:w-[70%] md:w-[90%] lg:w-[82%]"
      >
        <div className="flex h-[40vh] w-full items-center justify-center md:h-full md:w-[50%]">
          <RobotContainer />
        </div>
        <div className="flex h-[40vh] w-full justify-center md:h-full md:w-[50%] md:items-center">
          <div className="flex w-[85%] flex-col gap-2">
            <motion.p
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              className="text-center text-2xl font-semibold text-white md:text-start md:text-3xl lg:text-4xl"
            >
              Let&#39;s work together
            </motion.p>
            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              action=""
              className="flex flex-col gap-y-3"
            >
              <motion.input
                variants={formVariants}
                type="text"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="h-9 w-full rounded-sm border border-white bg-white px-1.5 placeholder:text-gray-500"
              />
              <motion.input
                variants={formVariants}
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="h-9 w-full rounded-sm border border-white bg-white px-1.5 placeholder:text-gray-500"
              />
              <motion.textarea
                variants={formVariants}
                rows={6}
                required
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                className="w-full rounded-sm border border-white bg-white px-1.5 placeholder:text-gray-500"
              />
              <motion.button
                variants={formVariants}
                whileHover={{ scaleY: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                type="submit"
                className="text-md h-9 rounded-sm bg-[#dd4c62] font-medium text-white"
              >
                Send
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
