import { AvatarFlip } from "@/components/AvatarFlip";
import { List } from "@/components/List";
import { SocialBadge } from "@/components/SocialBadge";
import { SocialLink } from "@/components/SocialLink";
import { ProjectList } from "@/components/Project";
import { mail, socialLinks, skills, projects } from "@/app/data";
import initTranslations from '@/app/i18n';


interface HomeProps {
    params: {
      lang: string
    }
}

const i18nNamespaces = ['common'];

export default async function Home(props: HomeProps) {

  const { t } = await initTranslations(props.params.lang, i18nNamespaces);

  return (
    <div className="flex flex-col gap-5 p-5 md:p-10 lg:p-16">
        <div className="md:flex md:justify-center text-center gap-5">
          <AvatarFlip
            image="/emenella.jpg"
            alt="Picture of emenella"
            imageHover="/emenella-1.jpg"
            height={300}
            width={300}
            className="mx-auto max-w-full md:mx-0 md:min-w-[300px] md:min-h-[300px]"
          />
          <div className="flex flex-col items-center place-content-center gap-5">
            <h1 className="text-2xl font-bold text-green-11 bg-blue-1 shadow-xl p-3 md:p-0">
              Erwan &quot;Emenella&quot; Menella
            </h1>
            <p className="text-lg shadow-xl text-red-11 bg-blue-1 p-3 md:p-0">
              {t('homepage.description')}
            </p>
            <SocialBadge links={socialLinks} className="grid grid-cols-4 gap-4 justify-start justify-items-stretch items-stretch" responsive="hidden sm:inline md:hidden lg:inline" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-2xl font-bold">Skills :</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <List key={index} id={index} title={skill.title} content={skill.data} className="shadow-xl p-3 justify-items-stretch items-stretch" />
            ))}
            </div>
            <h2 className="text-2xl font-bold">Projects :</h2>
            <ProjectList projets={projects} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-stretch items-stretch" highlight={true} />
            <h2 className="text-2xl font-bold">Contact :</h2>
            <SocialLink links={[...socialLinks, mail]} className="w-max shadow-xl"/>
        </div>
    </div>
  );
}