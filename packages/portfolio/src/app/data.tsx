import { SocialBadgeProps } from "@/components/SocialBadge";
import { ProjectProps } from "@/components/Project";

const IconPath = "/icons/"
const ImgProjectPath = "/img/projects/"

export const skills = [
  {
    title: "Nest.js",
    description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    icon: IconPath + "nestjs.svg",
    invert: false,
  },
  {
    title: "Express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    icon: IconPath + "express.svg",
    invert: true,
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    icon: IconPath + "react.svg",
    invert: false,
  },
  {
    title: "Next.js",
    description: "The React Framework for Production.",
    icon: IconPath + "nextdotjs.svg",
    invert: true,
  },
  {
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for rapidly building custom designs.",
    icon: IconPath + "tailwindcss.svg",
    invert: false,
  },
  {
    title: "AWS",
    description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
    icon: IconPath + "amazonaws.svg",
    invert: true
  },
];

export const socialLinks: SocialBadgeProps["links"] = [
    {
      name: "GitHub",
      url: "https://github.com/emenella",
      icon: IconPath + "github.svg",
      invert: true,
    },
    {
      name: "Twitter",
      url: "https://x.com/emenella",
      icon: IconPath + "x.svg",
      invert: true,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/emenella",
      icon: IconPath + "linkedin.svg",
      invert: false,
    },
    {
      name: "Malt",
      url: "https://malt.fr/profile/emenella",
      icon: IconPath + "malt.svg",
      invert: false,
    },
  ]
  
export const mail = {
    name: "Email",
    url: "mailto:menella.erwan@gmail.com",
    icon : IconPath + "mail.svg",
    invert: true
  }
  
export const projects: ProjectProps[] = [
    {
      title: "Portfolio",
      description: "My portfolio website, made with Next.js and Tailwind CSS.",
      highlight: true,
      image: ImgProjectPath + "project-1.png",
      technologies: [
        {
          name: "React",
          icon: IconPath + "react.svg",
          invert: false,
        },
        {
          name: "Next.js",
          icon: IconPath + "nextdotjs.svg",
          invert: true,

        },
        {
          name: "Tailwind CSS",
          icon: IconPath + "tailwindcss.svg",
          invert: false,
        }
      ],
      links:
        {
          name: "GitHub",
          url: "",
          icon: IconPath + "github.svg",
        }
    },
    {
      title: "ft_transcendence",
      description: "A website for simple online multiplayer pong game.",
      highlight: true,
      image: ImgProjectPath + "project-2.png",
      technologies: [
        {
          name: "React",
          icon: IconPath + "react.svg",
          invert: false,
        },
        {
          name: "Nest.js",
          icon: IconPath + "nestjs.svg",
          invert: false
        },
        {
          name: "PostgreSQL",
          icon: IconPath + "postgresql.svg",
          invert: true,
        }
      ],
    },
    {
      title: "ft_irc",
      description: "A simple IRC server and client.",
      highlight: true,
      image: ImgProjectPath + "project-3.png",
      technologies: [
        {
          name: "C++",
          icon: IconPath + "cplusplus.svg",
          invert: false
        },
      ],
    }
  ]