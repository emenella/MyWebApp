import { useState } from 'react'
import { NavBar, NavProps } from './component/common/NavBar'
import './index.css'
import { Public, DataPublic } from './component/Public/Public'
import Footer from './component/common/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Project from './component/Public/Project'
import { SkillType } from './component/Public/interface'

const dataExample : DataPublic = {
  profile: {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    img: 'https://picsum.photos/200/300'
  },
  school: [
    {
      name: 'MIT',
      degree: 'Computer Science',
      date: '2012 - 2018',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      img: 'https://picsum.photos/200/300'
    }
  ],
  diplomas: [
    {
      title: 'Master of Science',
      school: {
        name: 'MIT',
        degree: 'Computer Science',
        date: '2012 - 2014',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        img: 'https://picsum.photos/200/300'
      },
      date: '2014'
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

const navExample : NavProps["navigation"] = [{name:"CV", link:"/", current: true}, {name:"Projects", link:"/projects", current: false}, {name:"Contact", link:"/contact", current: false}];

//Component
const App = () => {
  const [data] = useState<DataPublic>(dataExample);
  const [nav] = useState<NavProps["navigation"]>(navExample);

  return (
    <div className='h-full w-screen bg-blue-300' >
      <Router>
      <NavBar navigation={nav} />
        <Routes>
          <Route path="/" element={<Public data={data} />}/>
          <Route path="/projects" element={<Project projects={data.projects} />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
