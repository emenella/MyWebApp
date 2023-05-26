import { school } from './interface';

export const School = ({ profile }: { profile: school[] }) => {
    return (
        <div className="bg-red-300 border border-gray-400 p-4 rounded-md mb-5">
            <h1 className="text-2xl font-bold">School</h1>
          {profile.map((school, index) => (
            <div key={index} className="mb-4 text-lg text-black flex">
                <div className="mr-2">
                  <img src={school.img} alt="School Logo" className="w-12 h-12 rounded-full mr-4"/>
                  <h2 className="text-lg font-bold">{school.name}</h2>
                  <p className="text-yellow-950">{school.degree}</p>
                  <p className="text-yellow-950">{school.date}</p>
                </div>
                <div className="bg-gray-200 border-gray-400 p-5 rounded-md">
                  <p className="mt-2">{school.description}</p>
                </div>
              {index < profile.length - 1 ? <div className="border-t border-blue-300 mt-4"></div> : <></>}
            </div>
          ))}
        </div>
      );
  };