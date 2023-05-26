import { profile } from './interface';

export const Profile = ({ profile }: { profile: profile }) => {
    return (
      <div className="bg-yellow-100 border border-gray-400 p-4 rounded-md mb-5">
        <div className="flex items-center">
          <div className="w-20 h-20 mr-4">
            <img className="rounded-full" src={profile.img} alt="profile" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              {profile.firstName} {profile.lastName}
            </h1>
            <p className="text-gray-600">{profile.age} ans</p>
          </div>
        </div>
        <p className="mt-10">{profile.text}</p>
      </div>
    );
  };
  