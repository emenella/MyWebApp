import { school } from './interface';

export const School = ({ profile }: { profile: school[] }) => {
    return (
        <div className="bg-red-300 p-4 shadow-md rounded-md mb-5">
          <div className='w-full'>
            <h1 className="text-2xl font-bold">School</h1>
          </div>
          <div className="mb-4 text-lg text-black flex flex-wrap">
            {profile.map((school, index) => (
              <div key={index} className="bg-gray-200 border-gray-400 p-5 border border-gray-400 shadow-md rounded-md mb-5 w-1/4">
                  <img src={school.img} alt="School Logo" className="w-12 h-12 rounded-full mr-4"/>
                  <h2 className="text-lg font-bold">{school.name}</h2>
                  <p className="text-yellow-950">{school.degree}</p>
                  <p className="text-yellow-950">{school.date}</p>
                <div className="">
                  <p className="mt-2">{school.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  };