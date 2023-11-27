import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { SocialBadge } from "./SocialBadge"

export interface SocialLinkProps {
    links: {
        name: string
        url: string
        icon: string
    }[]
    className?: string
}

export const SocialLink = (props: SocialLinkProps) => {
    return (
        <div className={props.className}>
            <Card>
                <CardHeader>
                    <CardTitle>Contact me</CardTitle>
                </CardHeader>
                <CardContent>
                    <SocialBadge links={props.links} className="flex flex-row gap-3 justify-start"/>
                </CardContent>
            </Card>
        </div>
    )
}