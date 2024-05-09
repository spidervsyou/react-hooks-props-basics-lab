import React from 'react';
import Links from './Links';

class About extends React.Component {
  render() {
    const { bio } = this.props;

    return (
      <div>
        {bio && bio !== '' && <p>{bio}</p>}
        <Links github={this.props.github} linkedin={this.props.linkedin} />
      </div>
    );
  }
}

export default About;
