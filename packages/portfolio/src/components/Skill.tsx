import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GetSkillDocument, GetSkillQuery, GetSkillQueryHookResult, GetSkillQueryResult, GetSkillQueryVariables } from "@/types/generated"
import { getClient } from "@/lib/client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { config } from "process"


interface SkillProps {
    className?: string,
    lang: string
}

// type ElementType<T> = T extends Array<infer U> ? U : T;

type SkillData = GetSkillQuery["skills"]

interface SkillCardProps {
  skill: SkillData["data"][number] // Ensure this type aligns with the actual data structure

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

function SkillCard(props: SkillCardProps) {
  return (
    <Card>
      <CardContent>{props.skill.attributes.Description}</CardContent>
    </Card>
  )
}

export default async function Skill(props: SkillProps) {
    
    const data = await getData(props.lang);

    const skills = data?.skills?.data.map((value) => value)
    
    return (
       <div className={props.className}>
            <Tabs defaultValue={skills![0].attributes?.Title?.toLowerCase()}>
                <TabsList>
                  {skills?.map((value, index) => <TabsTrigger value={value?.attributes?.Title?.toLowerCase() || ""}>{value?.attributes?.Title}</TabsTrigger>)}
                </TabsList>
              {skills?.map((value, index) => <TabsContent value={value?.attributes?.Title?.toLowerCase() || ""}><SkillCard skill={value}></SkillCard></TabsContent>)}
            </Tabs>
       </div>
    )
}