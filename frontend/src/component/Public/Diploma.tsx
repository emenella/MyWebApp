import { diploma } from './interface';

interface Props {
    diploma: diploma[];
}

export const Diploma = ({ diploma }: Props) => {
    return (
        <div className="bg-purple-400 border border-gray-400 p-4 rounded-md mb-5">
            <h1 className="text-2xl font-bold">Diploma</h1>
            {diploma.map((item, index) => { return(
                <div key={index} className="mb-4">
                    <h2 className="text-lg text-black">{item.title}</h2>
                    <div className="flex items-center mt-2">
                        <div className="mr-2">
                            <h3 className="text-yellow-950">{item.school.name}</h3>
                            <p className="text-yellow-950">{item.school.degree}</p>
                            <p className="text-yellow-950">{item.school.date}</p>
                        </div>
                        <div className="bg-gray-200 border-gray-400 p-5 rounded-md">
                            <p>{item.school.description}</p>
                        </div>
                    </div>
                    <p className="text-yellow-950 mt-2">Date: {item.date}</p>
                    {index < diploma.length - 1 ? <div className="border-t border-blue-300 mt-4"></div> : <></>}
                </div>
                )})}
            </div>
            );
        };
