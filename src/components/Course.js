import React from 'react';

import Icon from './common/Icon';

const ItemCourse = ({ item }) => (
  <div className="text-gray-500 cursor-default">
    {item.roles &&
      Object.keys(item.roles).map(key => (
        <div
          className="border-b rounded border-gray-500 hover:border-black mb-2 p-2 hover:bg-gray-100"
          key={key}
        >
          <div className="lg:text-xl mb-1 text-gray-800">
            <div className="flex">
              <div className="w-8">
                <Icon icon="faLaptopCode" />
              </div>
              <div>
                {item.roles[key].titleUrl ? (
                  <a
                    className="border-b rounded hover:border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.roles[key].titleUrl}
                  >
                    {item.roles[key].title}
                  </a>
                ) : (
                  <React.Fragment>{item.roles[key].title}</React.Fragment>
                )}
                {' ('}
                {item.placeUrl ? (
                  <a
                    className="border-b rounded hover:border-black"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.placeUrl}
                  >
                    {item.place}
                  </a>
                ) : (
                  <React.Fragment>{item.place}</React.Fragment>
                )}
                {')'}
              </div>
            </div>
          </div>
          <div className="lg:flex flex-wrap lg:mt-4 text-sm lg:text-base">
            <div className="md:w-1/4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item.roles[key].appUrl}
              >
                <img
                  className="border rounded border-black"
                  src={item.roles[key].imageURL}
                  alt={item.roles[key].title}
                />
              </a>
            </div>
            <div className="mt-1 lg:mt-0 w-full lg:w-2/3 lg:ml-6">
              {item.roles[key].description}
              {item.roles[key].descriptionDetails &&
                item.roles[key].descriptionDetails.map(descriptionDetails => (
                  <p key={descriptionDetails}>
                    <Icon icon="faCaretRight" /> {descriptionDetails}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <div className="my-1 text-sm lg:text-base">Technologies used</div>
            <div className="md:flex md:flex-wrap mb-5 text-xs lg:text-sm">
              {item.roles[key].technologies.map(technology => (
                <div key={technology.id} className="md:w-1/5">
                  <Icon icon="faCheck" /> {technology.description}
                </div>
              ))}
            </div>
          </div>
          <div className="text-sm lg:text-base">
            {item.roles[key].appUrl ? (
              <React.Fragment>
                <strong>Finished project</strong> <Icon icon="faArrowRight" />{' '}
                <a
                  className="border-b rounded hover:border-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.roles[key].appUrl}
                >
                  {item.roles[key].appTitle}
                </a>
              </React.Fragment>
            ) : (
              <React.Fragment>{item.roles[key].appTitle}</React.Fragment>
            )}
          </div>
        </div>
      ))}
  </div>
);

export default ItemCourse;
