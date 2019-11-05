import React from 'react';

import ProgressBar from './ProgressBar';
import Icon from './Icon';

const SkillLevel = props => (
  <div className="flex flex-row">
      <div className="text-xl w-20 mx-2 my-2 text-gray-500 text-right">
        {props.skill.icon ? (
          <Icon icon={props.skill.icon} />
        ) : (
          <div className="text-sm">{props.skill.description}</div>
        )}
      </div>
      <ProgressBar level={props.skill.level} />
  </div>
);

export default SkillLevel;
