'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export interface AvatarProps {
    image: string
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
  
    const styleImage: React.CSSProperties = {
      transition: 'transform 0.3s',
      backfaceVisibility: 'hidden',
      height: `${props.height}px`, // Définissez la hauteur de l'image
      width: `${props.width}px`, // Définissez la largeur de l'image
      objectFit: 'cover',
    };

    const containerStyle: React.CSSProperties = {
      position: 'relative',
      height: `${props.height}px`, // Définissez la hauteur de la div
      width: `${props.width}px`, // Définissez la largeur de la div
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={containerStyle}
        className={"rounded-full overflow-hidden shadow-md " + props.className}
      >
        {
          isHover ? <Image src={props.imageHover} alt={props.alt} width={props.width} height={props.height} className="rounded-full" style={styleImage}/>
          : <Image src={props.image} alt={props.alt} width={props.width} height={props.height} className="rounded-full" style={styleImage} priority={true}/>
        }
      </div>
    );
  };