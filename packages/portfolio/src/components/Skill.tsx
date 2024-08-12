import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface SkillProps {
    className?: string,

}

export default function Skill(props: SkillProps) {
    
    
    return (
       <div className={props.className}>
            <Tabs>
                <TabsList>
                </TabsList>
            </Tabs>
       </div>
    )
}