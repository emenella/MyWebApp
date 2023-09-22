import { experience } from "./interface";

interface Props {
    experiences: experience[];
}

export const Experience = ({ experiences }: Props) => {
    return (
        <div className="bg-green-800 p-4 shadow-md rounded-md mb-5">
            <h1 className="text-2xl font-bold">Experience</h1>
            {experiences.map((experience, index) => (
                <div key={index} className="items-center mt-2">
                    <div className="mr-2">
                        <img src={experience.img} alt="School Logo" className="w-12 h-12 rounded-full mr-4"/>
                        <h2 className="text-lg font-bold">{experience.title}</h2>
                        <div className="mr-2">
                            <h3 className="text-yellow-950">{experience.company}</h3>
                            <p className="text-yellow-950">{experience.date}</p>
                        </div>
                    </div>
                    <div className="bg-gray-200 border border-gray-400 p-5 shadow-md rounded-md mb-5">
                        <p>{experience.description}</p>
                    </div>
                    {index < experiences.length - 1 ? <div className="border-t border-red-300 mt-4"></div> : <></>}
                </div>
            ))}
        </div>
            );
        };