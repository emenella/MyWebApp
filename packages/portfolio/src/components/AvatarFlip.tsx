'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export interface AvatarProps {
    src: string
    alt: string
    imageHover: string
    height : number
    width : number
    className?: string
}

export const AvatarFlip: React.FC<AvatarProps> = (props) => {
    const [isHover, setIsHover] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHover(true);
    };
  
    const handleMouseLeave = () => {
      setIsHover(false);
    };
  
    return (
      <Image
        src={isHover ? props.imageHover : props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        className={props.className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        priority
      />
    );
  };