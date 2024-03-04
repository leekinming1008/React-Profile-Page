import "./Profile.css";
import Skill from "./Skill";

interface ProfileProps {
  imageUrl: string;
  bio: string;
}

const Profile = ({ imageUrl, bio }: ProfileProps) => {
  return (
    <div className="Profile">
      <h1>Personal Information</h1>
      <div className="Intro">
        <div className="u-container-layout u-container-layout-1">
          <h2 className="u-text u-text-3">About me</h2>
          <p className="u-text u-text-default u-text-4">{bio}</p>
        </div>
        <div>
          <img src={imageUrl}></img>
        </div>
        <div className="u-container-layout u-container-layout-3">
          <h2 className="u-text u-text-6">Details</h2>
          <p className="u-text u-text-7">
            <span id="item">Name: </span>
            <br />
            <p>Lee Kin Ming Angus</p>
            <br />
            <span id="item">Position: </span>
            <br />
            <p>FrontEnd & Backend Developer</p>
            <br />
          </p>
        </div>
      </div>
      <div>
        <p>Skills:</p>
        <Skill src="https://cdn-icons-png.flaticon.com/512/919/919854.png" />
        <Skill src="https://cdn-icons-png.flaticon.com/512/74/74897.png" />
        <Skill src="https://cdn-icons-png.flaticon.com/512/919/919852.png" />
        <Skill src="https://cdn-icons-png.flaticon.com/512/5968/5968238.png" />
        <Skill src="https://cdn-icons-png.flaticon.com/512/919/919826.png" />
        <Skill src="https://cdn-icons-png.flaticon.com/512/524/524545.png" />
      </div>
    </div>
  );
};

export default Profile;
