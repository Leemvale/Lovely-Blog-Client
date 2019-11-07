import React, { Component } from 'react';

import Profile from 'components/profile/Profile';
import { userService } from 'services/user.service';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    const { id } = this.props.match.params
    userService.getUserProfile(id).then(
      (profile) => {
        this.setState({ user: profile.user });
      }
    )
  }

  render() {
    return (
      this.state.user ? <Profile user={ this.state.user } /> : '' 
    );
  }
}

export default ProfileContainer
