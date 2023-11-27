const IconPath = "/icons/"
const ImgProjectPath = "/img/projects/"

const backend = [
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
  
  const frontend = [
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
  
  const cloud = [
    {
      title: "AWS",
      description: "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
      icon: IconPath + "amazonaws.svg"
    }
  ];

  
export const skills = [ {
    title: "Frontend",
    data: frontend
  }, 
  {
    title: "Backend",
    data: backend
  },
  {
    title: "Cloud",
    data: cloud
  }];