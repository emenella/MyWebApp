import { project } from "./interface";

interface Props {
  projects: project[];
}

const Project = ({ projects }: Props) => {
    return (
        <div className="bg-pink-200 shadow-md p-5 rounded-md mb-5">
          <div className='w-full'>
            <h1 className="text-2xl font-bold">Projects</h1>
          </div>
          <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-200 border border-gray-400 bg-green-200 shadow-md rounded-md p-4 mb-5">
              <h2 className="text-lg font-bold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <img className="mb-4" src={project.img} alt={project.title} />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 font-semibold hover:underline"
              >
                Voir le projet
              </a>
            </div>
          ))}
          </div>
        </div>
    );
  };

export default Project;

