import { useState  } from "react";
import { useNavigate } from "react-router-dom";


interface Navigation {
    name: string,
    link: string,
    current: boolean
}

export interface NavProps {
    navigation: Navigation[]
}

export const NavBar = ({ navigation }: NavProps) => {
    const [nav, setNav] = useState<Navigation[]>(navigation);
    const navigate = useNavigate();
  
    const handleClick = (index: number) => {
      const newNav = nav.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            current: true,
          };
        } else {
          return {
            ...item,
            current: false,
          };
        }
      });
      // navigation on link click
        if (newNav[index].link !== "#") {
            navigate(newNav[index].link);
        }
        else {
            window.location.href = newNav[index].link;
        }
      setNav(newNav);
    };
  
    return (
      <nav className="bg-green-300">
        <div className="container mx-auto">
          <div className="flex items-center justify-center py-4">
            <ol className="flex space-x-4">
              {nav.map((item, index) => (
                <li
                  className="text-gray-800"
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <button
                    className={`${
                      item.current ? 'font-bold' : ''
                    } hover:text-blue-500`}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </nav>
    );
  };