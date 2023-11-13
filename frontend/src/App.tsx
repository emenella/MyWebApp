import { useState } from 'react'
import { NavBar, NavProps } from './component/common/NavBar'
import './index.css'
import { Public, DataPublic } from './component/Public/Public'
import Footer from './component/common/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { SkillType } from './component/Public/interface'
import { Login } from './component/Private/Auth'

const dataExample : DataPublic = {
  profile: {
    firstName: 'Erwan',
    lastName: 'Menella',
    age: 23,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: 'https://picsum.photos/200/300'
  },
  school: [
    {
      name: '42 Lyon Auvergne-Rhône-Alpes',
      degree: 'Computer Science',
      date: '2020 - 2025',
      description: "À 42, mon parcours a été marqué par une approche éducative novatrice axée sur l'apprentissage par projets et le peer-learning. J'ai eu l'occasion de travailler sur des projets variés, mettant en pratique mes compétences en développement. L'un de ces projets a impliqué l'utilisation de technologies telles que Git, Docker, et la création d'applications avec NodeJS, JavaScript/TypeScript, React, ainsi que Express/Nest.js.",
      img: 'https://picsum.photos/200/300'
    },
    {
      name: "BTS SEN - Systèmes électroniques et numériques",
      degree: "Brevet de Technicien Supérieur",
      date: "2018 - 2020",
      description: "Pendant mon BTS, j'ai participé activement au projet DART, où nous avons développé un système de fléchettes électronique en utilisant Raspberry Pi. Cette expérience m'a permis d'approfondir mes compétences en programmation en C++ et de me plonger dans les défis de la gestion du réseau.",
      img: "https://picsum.photos/200/300"
    }
  ],
  diplomas: [
    {
      title: 'BTS SEN - Systèmes électroniques et numériques',
      school: {
        name: "BTS SEN - Systèmes électroniques et numériques",
        degree: "Brevet de Technicien Supérieur",
        date: "2018 - 2020",
        description: "Pendant mon BTS, j'ai participé activement au projet DART, où nous avons développé un système de fléchettes électronique en utilisant Raspberry Pi. Cette expérience m'a permis d'approfondir mes compétences en programmation en C++ et de me plonger dans les défis de la gestion du réseau.",
        img: "https://picsum.photos/200/300"
      },
      date: '2020'
    },
    {
      title: 'Bachelor of Science',
      school: {
        name: 'MIT',
        degree: 'Computer Science',
        date: '2014 - 2016',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        img: 'https://picsum.photos/200/300'
      },
      date: '2016'
    }
  ],
  experiences: [
    {
      title: 'Fullstack Developer',
      company: 'Google',
      date: '2016 - 2018',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300'
    },
    {
      title: 'Frontend Developer',
      company: 'Facebook',
      date: '2018 - 2020',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300'
    }
  ],
  projects: [
    {
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300',
      link: 'https://picsum.photos/200/300'
    },
    {
      title: 'Project 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300',
      link: 'https://picsum.photos/200/300'
    },
    {
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300',
      link: 'https://picsum.photos/200/300'
    },
    {
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300',
      link: 'https://picsum.photos/200/300'
    },
  ],
  skills: [
    {
      type: SkillType.language,
      name: 'HTML',
      level: 90
    },
    {
      type: SkillType.language,
      name: 'CSS',
      level: 80
    },
    {
      type: SkillType.language,
      name: 'Javascript',
      level: 70
    },
    {
      type: SkillType.framework,
      name: 'React',
      level: 60
    },
    {
      type: SkillType.framework,
      name: 'Node',
      level: 50
    },
    {
      type: SkillType.framework,
      name: 'MongoDB',
      level: 40
    },
    {
      type: SkillType.language,
      name: 'Python',
      level: 30
    },
    {
      type: SkillType.language,
      name: 'C++',
      level: 20
    },
    {
      type: SkillType.language,
      name: 'Java',
      level: 10
    },
  ]
}

const navExample : NavProps["navigation"] = [{name:"CV", link:"/", current: true}, {name:"Contact", link:"/contact", current: false}];
//Component
const App = () => {
  const [data] = useState<DataPublic>(dataExample);
  const [nav] = useState<NavProps["navigation"]>(navExample);
  const mapComponent = new Map([["CV", <Public data={data} />]]);

  return (
    <div className='flex flex-col min-h-screen bg-blue-300' >
      <Router>
      <NavBar navigation={nav} />
        <div className='flex p-4 justify-center items-center'>
          <Routes>
            {nav.map((item, index) => (
              <Route key={index} path={item.link} element={mapComponent.get(item.name)} />
            ))}
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        
      </Router>
      <Footer />
    </div>
  )
}

export default App
