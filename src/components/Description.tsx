import React from 'react';
import { Typography } from '@material-ui/core';

const Description = () => (
  <>
    <Typography variant="h6">
      What is the Tech Radar?
    </Typography>

    <Typography variant="subtitle2">
      This visualization shows my personal view on the area, my skills and directions in which I intend to develop. Based on the <a href="https://www.thoughtworks.com/radar">pioneering
      work of ThoughtWorks</a> and <a href="https://github.com/zalando/tech-radar">Zalando&#39;s</a> and <a href="https://github.com/yaneek/tech-radar">Yaneek&#39;s</a> projects.
    </Typography>
    <Typography variant="subtitle2">
      The Tech Radar is a list of technologies, methodologies, complemented by an assessment result, called <em>ring
      assignment</em>. I use four rings with the following semantics:
    </Typography>

    <ul>
      <li>
        <Typography variant="body2">
          <strong>ADOPT</strong> &mdash; Technologies that have been used in production environment with success.
          Low risk and recommended to be widely used.
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          <strong>TRIAL</strong> &mdash; Technologies that I started to use, to solve a real problem.
          TRIAL technologies are slightly more risky.
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          <strong>ASSESS</strong> &mdash; Technologies that are promising and have clear potential value-add for me.
          I read, learn and monitor such technolologies. Sometimes I started a prototyping effort.
          ASSESS technologies have higher risks.
        </Typography>
      </li>
      <li>
        <Typography variant="body2">
          <strong>HOLD</strong> &mdash; This does not always mean that technology is bad it might as well just be
          outdated. I do not use or recommend HOLD technologies for new projects, but usage usually can be continued
          for existing projects.
        </Typography>
      </li>
    </ul>

    <Typography align="center">
      &copy; 2020 Tilmann Kuhn
    </Typography>
  </>
)

export default Description;
