import { project } from "./interface";

interface Props {
  projects: project[];
}

const Project = ({ projects }: Props) => {
    return (
      <div className="bg-pink-200 shadow-md p-4 rounded-md">
        <h1 className="text-2xl font-bold">Projects</h1>
        {projects.map((project, index) => (
          <div key={index}>
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
    );
  };

export default Project;

