import React from 'react';

import { diffDates, dates } from '../../lib/util.lib';
import Icon from './Icon';

const ItemStudy = ({ item }) => (
  <div className="border-b rounded border-gray-500 hover:border-black mb-2 p-2 text-gray-500 hover:bg-gray-100 cursor-default">
    <div className="flex text-xl mb-1 text-gray-800">
      <div className="w-8">
        <Icon icon="faGraduationCap" />
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
    <div className="border-l rounded hover:border-black hover:text-gray-600 px-2 mb-4">
      <div className="flex flex-row text-gray-600 mb-2">
        <div className="w-1/2">{item.place}</div>
        <div className="w-1/2 text-right">
          {dates(item.fromDate, item.untilDate, item.finishDate)}
          {diffDates(item.fromDate, item.untilDate, item.finishDate)}
        </div>
      </div>
      <div>
        {item.description}
        {item.descriptionDetails &&
          Object.keys(item.descriptionDetails).map(key => (
            <div key={key}>
              <Icon icon="faCaretRight" /> {item.descriptionDetails[key]}
            </div>
          ))}
      </div>
    </div>
  </div>
);

export default ItemStudy;
