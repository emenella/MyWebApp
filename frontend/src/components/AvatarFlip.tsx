'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export interface AvatarProps {
    image: string
    alt: string
    imageHover: string
    height : number
    width : number
}

export const AvatarFlip: React.FC<AvatarProps> = (props) => {
    const [isHover, setIsHover] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHover(true);
    };
  
    const handleMouseLeave = () => {
      setIsHover(false);
    };
  
    const styleImage: React.CSSProperties = {
      transition: 'transform 0.3s',
      backfaceVisibility: 'hidden',
      height: `${props.height}px`, // Définissez la hauteur de l'image
        width: `${props.width}px`, // Définissez la largeur de l'image
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative' }}
        className="rounded-full shadow-md"
      >
        <Image
          src={isHover ? props.imageHover : props.image}
          alt={props.alt}
          width={props.width}
          height={props.height}
          className="rounded-full"
          style={styleImage}
          priority
        />
      </div>
    );
  };