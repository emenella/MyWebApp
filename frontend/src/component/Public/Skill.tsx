import { skill } from './interface';

interface Props {
  skills: skill[];

}

export const Skill = ({ skills }: Props) => {

  const languageToJsx = (skill: skill, index: number) => {
    return (
      <div key={index} className="items-center mb-4">
        <h2 className="text-lg font-bold">{skill.name}</h2>
        <div className="mt-2">
          <div className="mr-2">
            <div className="h-4 w-4/5 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-blue-800 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-600">{skill.level}%</p>
        </div>
      </div>
    )
  };

  const frameworkToJsx = (skill: skill, index: number) => {
    return (
      <div key={index} className="items-center mb-4">
        <h2 className="text-lg font-bold">{skill.name}</h2>
        <div className="mt-2">
          <div className="mr-2">
            <div className="h-4 w-4/5 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-blue-800 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-600">{skill.level}%</p>
        </div>
      </div>
    )
  };

  const toolToJsx = (skill: skill, index: number) => {
    return (
      <div key={index} className="items-center mb-4">
        <h2 className="text-lg font-bold">{skill.name}</h2>
        <div className="mt-2">
          <div className="mr-2">
            <div className="h-4 w-4/5 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-blue-800 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
          <p className="text-gray-600">{skill.level}%</p>
        </div>
      </div>
    )
  };


  const dataToJsx = (skills: skill[]) => {
    const languages = skills.filter((skill) => skill.type === 'language');
    const frameworks = skills.filter((skill) => skill.type === 'framework');
    const tools = skills.filter((skill) => skill.type === 'tool');

    return (
      <>
        <div className="flex flex-wrap">
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
            <h2 className="text-xl font-bold mb-2">Languages</h2>
            {languages.map((skill, index) => languageToJsx(skill, index))}
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
            <h2 className="text-xl font-bold mb-2">Frameworks</h2>
            {frameworks.map((skill, index) => frameworkToJsx(skill, index))}
          </div>
          <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2'>
            <h2 className="text-xl font-bold mb-2">Tools</h2>
            {tools.map((skill, index) => toolToJsx(skill, index))}
          </div>
        </div>
      </>
    );
  };

  return (
      <div className="bg-yellow-300 p-4 shadow-md rounded-md mb-5">
        <h1 className="text-2xl font-bold">Skill</h1>
        {dataToJsx(skills)}
    </div>
  );
};
