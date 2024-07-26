'use client';

import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button'



const Socials = () => {
  return (
    <div
        className='flex flex-col items-center w-full gap-y-2 md:flex-row md:gap-x-2'
    >
        <Button
            size={"lg"}
            className='w-full'
            variant={"outline"}
            onClick={() => console.log('Google')
            }
        >
            <FcGoogle
                className='w-6 h-6'
            />
        </Button>
        <Button
            size={"lg"}
            className='w-full'
            variant={"outline"}
            onClick={() => console.log('Github')
            }
        >
            <FaGithub
                className='w-6 h-6'
            />
        </Button>
    </div>
  )


}

export default Socials