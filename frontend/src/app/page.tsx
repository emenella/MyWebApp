import AvatarFlip from "../components/AvatarFlip"
import { List } from "../components/List"
import { skills } from "./skills"

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row place-content-center gap-5">
        <AvatarFlip image="/emenella.jpg" alt="Picture of emenella" imageHover="/emenella-1.jpg" height={300} width={200} />
        <div className="flex flex-col items-start place-content-center">
          <h1 className="text-2xl font-bold text-green-500 bg-cyan-900 shadow-xl">Erwan &quot;Emenella&quot; Menella</h1>
          <p className="text-lg text-red-400 bg-cyan-900 shadow-xl">Innovative coder from Arles, inspired by Van Gogh, shaping a new vision of the digital future.</p>
        </div>
      </div>
      <div className="flex flex-row place-content-center gap-5">
        {skills.map((skill, index) => (
          <List key={index} title={skill.title} content={skill.data} className="shadow-xl w-max h-max" />
        ))}
      </div>
    </div>
  )
}
