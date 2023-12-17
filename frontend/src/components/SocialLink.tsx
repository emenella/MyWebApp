import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
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
            <Card className={props.className}>
                <CardHeader>
                </CardHeader>
                <CardContent className="grid place-content-center">
                    <SocialBadge links={props.links} className="grid grid-cols-5 gap-4 max-w-xl" responsive="hidden sm:inline"/>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
    )
}