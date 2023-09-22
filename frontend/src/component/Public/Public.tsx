import { Diploma } from "./Diploma";
import { Experience } from "./Experience";
import { profile, diploma, experience, project, skill, school } from "./interface";
import { Profile } from "./Profile";
import { School } from "./School";
import { Skill } from "./Skill";


export interface DataPublic {
    profile: profile
    school: school[]
    diplomas: diploma[]
    experiences: experience[]
    projects: project[]
    skills: skill[]
}

export const Public = ({data}: { data: DataPublic }) => {
    return (
        <div className="flex flex-col bg-gray-200 border border-gray-400 p-5 w-3/4">
            <Profile profile={data.profile}></Profile>
            <School profile={data.school}></School>
            <Diploma diploma={data.diplomas}></Diploma>
            <Experience experiences={data.experiences}></Experience>
            <Skill skills={data.skills}></Skill>
        </div>
        );
    };