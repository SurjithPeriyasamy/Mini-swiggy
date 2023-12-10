import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "empty",
        location: "empty",
        avatar_url: "empty",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/surjithperiyasamy");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div>
        <UserClass userDetail={this.state.userInfo} />
      </div>
    );
  }
}

export default About;
