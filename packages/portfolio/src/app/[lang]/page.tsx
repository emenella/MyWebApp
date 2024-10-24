import { SocialBadge } from "@/components/SocialBadge";
import { ProjectList } from "@/components/Project";
import { projects } from "@/app/data";
import { getClient, PreloadQuery } from "@/lib/client";
import { GetTitleDocument, GetTitleQuery, GetSocialDocument, GetSkillDocument } from "@/types/generated";
import { getUrlImage } from "@/lib/strapi";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { AvatarFlip } from "@/components/AvatarFlip";
import { List } from "@/components/List";
import Skill from "@/components/Skill";


interface HomeProps {
    params: {
      lang: string
    }
}

async function getData(lang: string) {
  try {
    const client = getClient();
    const { data } = await client.query<GetTitleQuery>({
      query: GetTitleDocument,
      variables: { lang: lang},
    });
    
    return data
  } catch (e) {
    console.log(e)
  }
}

export default async function Home(props: HomeProps) {

  const data = await getData(props.params.lang)

  return (
    <div className="flex flex-col gap-5">
        <div className="md:flex md:justify-center text-center gap-5 pt-5">
          <AvatarFlip
            src={getUrlImage(data?.title?.data?.attributes?.Avatar?.data?.attributes?.url || "")}
            imageHover={getUrlImage(data?.title?.data?.attributes?.ReverseAvatar?.data?.attributes?.url || "")}
            alt="Picture of emenella"
            height={200}
            width={200}
            className="rounded-full overflow-hidden shadow-md mx-auto max-w-full md:mx-0 md:min-w-[200px] md:min-h-[200px]"
          />
          <div className="flex flex-col items-center place-content-center gap-5">
            <h1 className="text-2xl font-bold text-green-11 bg-blue-1 shadow-xl p-3 md:p-0">
              {data?.title?.data?.attributes?.Title}
            </h1>
            <p className="text-lg shadow-xl text-red-11 bg-blue-1 p-3 md:p-0">
              {data?.title?.data?.attributes?.Subtitle}
            </p>
            <PreloadQuery query={GetSocialDocument}>
              <Suspense fallback={<Skeleton className="w-[100px] h-[50px] rounded-full" />}>
                <SocialBadge className="grid grid-cols-4 gap-4 justify-start justify-items-stretch items-stretch" responsive="hidden sm:inline md:hidden lg:inline" />
              </Suspense>
            </PreloadQuery>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 m-5">
          <h2 className="text-2xl font-bold">Projects :</h2>
          <ProjectList projets={projects} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-stretch items-stretch" highlight={true} />
          <h2 className="text-2xl font-bold">Skills :</h2>
          <PreloadQuery query={GetSkillDocument}>
            <Suspense>
              <Skill lang={props.params.lang}/>
            </Suspense>
          </PreloadQuery>
        </div>
    </div>
  );
}