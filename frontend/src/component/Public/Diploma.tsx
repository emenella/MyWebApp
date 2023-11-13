import { diploma } from './interface';

interface Props {
    diploma: diploma[];
}

export const Diploma = ({ diploma }: Props) => {
    return (
        <div className="bg-purple-400 flex flex-wrap p-4 shadow-md rounded-md mb-5">
            <div className='w-full'>
                <h1 className="text-2xl font-bold">Diploma</h1>
            </div>
            {diploma.map((item, index) => { return(
                <div key={index} className="bg-gray-200 border border-gray-400 bg-green-200 shadow-md rounded-md p-4 mb-5 w-1/4">
                    <h2 className="text-lg text-black">{item.title}</h2>
                    <div className="flex items-center mt-2">
                        <div className="mr-2">
                            <h3 className="text-yellow-950">{item.school.name}</h3>
                            <p className="text-yellow-950">{item.school.degree}</p>
                            <p className="text-yellow-950">{item.school.date}</p>
                        </div>
                    </div>
                    <p className="text-yellow-950 mt-2">Date: {item.date}</p>
                </div>
                )})}
            </div>
            );
        };
