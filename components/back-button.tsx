'use client';

import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

interface BackButtonProps {
    href: string,
    label: string,
}

const BackButton = ({
    href,
    label,
}: BackButtonProps) => {
  return (
    <Button
		variant={"link"}
		className='font-normal text-xs w-full'
		>
			<Link
				href={href}
			>
				{label}
			</Link>
		</Button>
  )
}

export default BackButton