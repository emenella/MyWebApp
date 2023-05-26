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
            <div className="h-4 w-80 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-blue-500 rounded-full"
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
            <div className="h-4 w-80 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-blue-500 rounded-full"
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
            <div className="h-4 w-80 bg-gray-200 rounded-full">
              <div
                className="h-4 bg-blue-500 rounded-full"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-xl font-bold mb-2">Languages</h2>
            {languages.map((skill, index) => languageToJsx(skill, index))}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Frameworks</h2>
            {frameworks.map((skill, index) => frameworkToJsx(skill, index))}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Tools</h2>
            {tools.map((skill, index) => toolToJsx(skill, index))}
          </div>
        </div>
      </>
    );
  };

  return (
      <div className="bg-yellow-300 border border-gray-400 p-4 rounded-md mb-10">
        <h1 className="text-2xl font-bold">Skill</h1>
        {dataToJsx(skills)}
    </div>
  );
};
