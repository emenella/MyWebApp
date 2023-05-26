export interface diploma {
    title: string
    school: school
    date: string
}

export interface school {
    name: string
    degree: string
    date: string
    description: string
    img: string
}

export interface experience {
    title: string
    company: string
    date: string
    description: string
    img: string
}

export interface profile {
    firstName: string
    lastName: string
    age: number
    img: string
    text: string
}

export interface project {
    title: string
    description: string
    img: string
    link: string
}

export enum SkillType {
    language = 'language',
    framework = 'framework',
    tool = 'tool',
}

export interface skill {
    type: SkillType
    name: string
    level: number
}