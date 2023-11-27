import { SocialBadgeProps } from "@/components/SocialBadge";
import { ProjetProps } from "@/components/Projet";

const IconPath = "/icons/"
const ImgProjectPath = "/img/projects/"

const Backend = [
    {
      title: "Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
      icon: IconPath + "nodedotjs.svg"
    },
    {
      title: "Bun",
      description: "Bun is a simple and fast HTTP router for Node.js.",
      icon: IconPath + "bun.svg"
    },
    {
      title: "Nest.js",
      description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
      icon: IconPath + "nestjs.svg"
    },
    {
      title: "Fastify",
      description: "Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture.",
      icon: IconPath + "fastify.svg"
    },
    {
      title: "Express",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
      icon: IconPath + "express.svg"
    },
  ];
  
const Frontend = [
    {
      title: "React",
      description: "A JavaScript library for building user interfaces.",
      icon: IconPath + "react.svg"
    },
    {
      title: "Next.js",
      description: "The React Framework for Production.",
      icon: IconPath + "nextdotjs.svg"
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapidly building custom designs.",
      icon: IconPath + "tailwindcss.svg"
    },
    {
      title: "Framer Motion",
      description: "A production-ready motion library for React.",
      icon: IconPath + "framer.svg"
    },
  ];
  
export const Cloud = [
    {
      title: "AWS",
      description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      icon: IconPath + "amazonaws.svg"
    }
  ];

export const skills = [ {
    title: "Frontend",
    data: Frontend
  }, 
  {
    title: "Backend",
    data: Backend
  },
  {
    title: "Cloud",
    data: Cloud
  }];

export const socialLinks: SocialBadgeProps["links"] = [
    {
      name: "GitHub",
      url: "https://github.com/emenella",
      icon: IconPath + "github.svg",
    },
    {
      name: "Twitter",
      url: "https://x.com/emenella",
      icon: IconPath + "x.svg"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/emenella",
      icon: IconPath + "linkedin.svg"
    },
    {
      name: "Malt",
      url: "https://malt.fr/profile/emenella",
      icon: IconPath + "malt.svg"
    },
  ]
  
export const mail = {
    name: "Email",
    url: "mailto:menella.erwan@gmail.com",
    icon : IconPath + "mail.svg"
  }
  
export const projects: ProjetProps[] = [
    {
      title: "Portfolio",
      description: "My portfolio website, made with Next.js and Tailwind CSS.",
      image: ImgProjectPath + "project-1.png",
      technologies: [
        {
          name: "React",
          icon: IconPath + "react.svg"
        },
        {
          name: "Next.js",
          icon: IconPath + "nextdotjs.svg"
        },
        {
          name: "Tailwind CSS",
          icon: IconPath + "tailwindcss.svg"
        }
      ],
      links:
        {
          name: "GitHub",
          url: "",
          icon: IconPath + "github.svg"
        }
    },
    {
      title: "ft_transcendence",
      description: "A website for simple online multiplayer pong game.",
      image: ImgProjectPath + "project-2.png",
      technologies: [
        {
          name: "React",
          icon: IconPath + "react.svg"
        },
        {
          name: "Nest.js",
          icon: IconPath + "nestjs.svg"
        },
        {
          name: "PostgreSQL",
          icon: IconPath + "postgresql.svg"
        }
      ],
    },
    {
      title: "ft_irc",
      description: "A simple IRC server and client.",
      image: ImgProjectPath + "project-3.png",
      technologies: [
        {
          name: "C++",
          icon: IconPath + "cplusplus.svg"
        },
      ],
    }
  ]