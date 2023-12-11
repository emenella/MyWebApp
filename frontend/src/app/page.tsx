import { AvatarFlip } from "../components/AvatarFlip";
import { List } from "../components/List";
import { SocialBadge } from "../components/SocialBadge";
import { SocialLink } from "../components/SocialLink";
import { ProjectList } from "../components/Project";
import { mail, socialLinks, skills, projects } from "./data";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-5 md:p-10 lg:p-16">
      <div className="flex flex-col md:flex-row place-content-center gap-5">
        <AvatarFlip
          image="/emenella.jpg"
          alt="Picture of emenella"
          imageHover="/emenella-1.jpg"
          height={300}
          width={400}
          className="md:justify-center"
        />
        <div className="flex flex-col items-center md:items-start gap-5">
          <h1 className="text-2xl font-bold text-green-300 bg-blue-900 shadow-xl p-3 md:p-0">
            Erwan &quot;Emenella&quot; Menella
          </h1>
          <p className="text-lg text-red-200 bg-blue-900 shadow-xl p-3 md:p-0">
            Innovative coder from Arles, inspired by Van Gogh, shaping a new vision of the digital
            future.
          </p>
          <SocialBadge links={socialLinks} className="grid grid-cols-4 gap-4 justify-start justify-items-stretch items-stretch" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">Skills :</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <List key={index} title={skill.title} content={skill.data} className="shadow-xl p-3 items-stretch" />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold">Projects :</h2>
        <ProjectList projets={projects} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-stretch items-stretch" highlight={true} />
      </div>
      <SocialLink links={[...socialLinks, mail]} className="flex place-content-center" />
    </div>
  );
}