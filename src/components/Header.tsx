import React from 'react';
import { Typography } from '@material-ui/core';

export class Header extends React.Component {
  render = () => (
    <>
      <Typography variant="h4">
        Technology Radar - Tilmann Kuhn
        <a className="social-icon" title="Fork me at github"
          href="https://github.com/tilm4nn/tech-radar" target="_BLANK" rel="noopener noreferrer">
          <img alt="github" src="./img/GitHub-Mark-32px.png"/>
        </a>
        <a className="social-icon" title="XING"
          href="https://www.xing.com/profile/Tilmann_Kuhn/" target="_BLANK" rel="noopener noreferrer" >
          <img alt="XING" src="./img/XING.png" height="32px" width="32px"/>
        </a>
      </Typography>

      {this.props.children}
    </>
  );
}

