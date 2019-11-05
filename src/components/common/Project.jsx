import React from 'react';

import Icon from './Icon';

const ItemProject = ({ item }) => (
  <div className="text-gray-500 cursor-default">
    <div className="border-b rounded border-gray-500 hover:border-black mb-2 p-2 hover:bg-gray-100">
      <div className="lg:text-xl mb-1 text-gray-800">
        <div className="flex">
          <div className="w-8">
            <Icon icon="faLaptopCode" />
          </div>
          <div>
            {item.titleUrl ? (
              <a
                className="border-b rounded hover:border-black"
                target="_blank"
                rel="noopener noreferrer"
                href={item.titleUrl}
              >
                {item.title}
              </a>
            ) : (
              <React.Fragment>{item.title}</React.Fragment>
            )}
          </div>
        </div>
      </div>
      <div className="lg:flex flex-wrap lg:mt-4 text-sm lg:text-base">
        <div className="md:w-1/4">
          <a target="_blank" rel="noopener noreferrer" href={item.appUrl}>
            <img
              className="border rounded border-black"
              src={item.imageURL}
              alt={item.title}
            />
          </a>
        </div>
        <div className="mt-1 lg:mt-0 w-full lg:w-2/3 lg:ml-6">
          {item.description}
          {item.descriptionDetails &&
            item.descriptionDetails.map(descriptionDetails => (
              <p key={descriptionDetails}>
                <Icon icon="faCaretRight" /> {descriptionDetails}
              </p>
            ))}
        </div>
      </div>
      <div>
        <div className="my-1 text-sm lg:text-base">Technologies used</div>
        <div className="md:flex md:flex-wrap mb-5 text-xs lg:text-sm">
          {item.technologies.map(technology => (
            <div key={technology.id} className="md:w-1/5">
              <Icon icon="faCheck" /> {technology.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ItemProject;
