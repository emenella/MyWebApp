import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GetSkillDocument, GetSkillQuery } from "@/types/generated"
import { useQuery } from "@apollo/client"
import { getClient } from "@/lib/client"

interface SkillProps {
    className?: string,
}

async function getData(lang: string) {
    try {
      const client = getClient();
      const { data } = await client.query<GetSkillQuery>({
        query: GetSkillDocument,
        variables: { lang: lang},
      });
      
      return data
    } catch (e) {
      console.log(e)
    }
}

export default async function Skill(props: SkillProps) {
    
    const { i18n } = await serverSideTranslations()
    console.log(i18n.language)
    // const data = await getData(i18n.language)

    // console.log(data)
    
    return (
       <div className={props.className}>
            <Tabs>
                <TabsList>
                </TabsList>
            </Tabs>
       </div>
    )
}