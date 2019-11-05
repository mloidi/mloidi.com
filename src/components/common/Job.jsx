import React from 'react';

import { diffDates, dates } from '../../lib/util.lib';
import Icon from './Icon';

const Job = ({ item }) => (
  <div className="border-b rounded border-gray-500 hover:border-black mb-2 p-2 text-gray-500 hover:bg-gray-100 cursor-default">
    <div className="flex text-sm lg:text-xl mb-1 text-gray-800">
      <div className="w-8">
        <Icon icon="faBriefcase" />
      </div>
      <div>
        {item.titleURL ? (
          <a
            className="border-b rounded hover:border-black"
            target="_blank"
            rel="noopener noreferrer"
            href={item.titleURL}
          >
            {item.title}
          </a>
        ) : (
          <React.Fragment>{item.title}</React.Fragment>
        )}
      </div>
    </div>
    {Object.keys(item.roles).map(key => (
      <div
        className="border-l rounded hover:border-black hover:text-gray-600 px-2 mb-4 text-xs lg:text-base"
        key={key}
      >
        <div className="flex flex-row text-gray-600 mb-2">
          <div className="w-1/2">{item.roles[key].title}</div>
          <div className="w-1/2 text-right">
            {dates(
              item.roles[key].fromDate,
              item.roles[key].untilDate,
              item.roles[key].finishDate
            )}
            {diffDates(
              item.roles[key].fromDate,
              item.roles[key].untilDate,
              item.roles[key].finishDate
            )}
          </div>
        </div>
        <div>
          {item.roles[key].description.map(description => (
            <div key={description}>
              <Icon icon="faCaretRight" /> {description}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Job;
