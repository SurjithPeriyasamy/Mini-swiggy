import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, avatar_url, location } = this.props.userDetail;
    return (
      <div>
        <h3>{name}</h3>
        <img src={avatar_url} alt="profile" />
        <h4>{location}</h4>
      </div>
    );
  }
}
export default UserClass;
