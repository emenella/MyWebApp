import { AvatarFlip } from "../components/AvatarFlip"
import { List } from "../components/List"
import { SocialBadge } from "../components/SocialBadge"
import { SocialLink } from "../components/SocialLink"
import { Projet } from "../components/Projet"
import { mail, socialLinks, skills, projects } from "./data"

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row place-content-center gap-5">
        <AvatarFlip image="/emenella.jpg" alt="Picture of emenella" imageHover="/emenella-1.jpg" height={300} width={200} />
        <div className="flex flex-col items-start place-content-center gap-5">
          <h1 className="text-2xl font-bold text-green-500 bg-cyan-900 shadow-xl">Erwan &quot;Emenella&quot; Menella</h1>
          <p className="text-lg text-red-400 bg-cyan-900 shadow-xl">Innovative coder from Arles, inspired by Van Gogh, shaping a new vision of the digital future.</p>
          <SocialBadge links={socialLinks} className="flex gap-x-3" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">Skills :</h2>
        <div className="flex flex-row place-content-center items-stretch gap-5">
          {skills.map((skill, index) => (
            <List key={index} title={skill.title} content={skill.data} className="shadow-xl" />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">Projects :</h2>
        <div className="flex flex-row place-content-center items-stretch gap-5">
          {projects.map((project, index) => (
            <Projet key={index} title={project.title} description={project.description} image={project.image} technologies={project.technologies} links={project.links} className="shadow-xl" />
          ))}
        </div>
      </div>
      <SocialLink links={[... socialLinks, mail]} className="flex place-content-center" />
    </div>
  )
}
