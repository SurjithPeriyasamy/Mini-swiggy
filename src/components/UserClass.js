import { Component } from "react";
import aboutBg from "../images/aboutBg.png";
class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, avatar_url, location } = this.props.userDetail;
    return (
      <div
        className="bg-cover max-w-screen-2xl bg-fixed bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${aboutBg}')` }}
      >
        <div className="bg-black h-screen bg-opacity-[0.85]">
          <div className="pt-20 flex flex-col items-center m-auto w-1/2 md:pt-32">
            <h3 className="font-semibold text-3xl text-white tracking-widest">
              {name}
            </h3>
            <img className="rounded-lg" src={avatar_url} alt="profile" />
            <h4 className="font-semibold  text-3xl text-white tracking-widest">
              {location}
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
export default UserClass;
