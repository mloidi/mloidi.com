import React, { useState, useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

import { diffDates, dates } from '../lib/util.lib';
import { getWorks } from '../lib/Data';
import { DataContext } from '../globalState';
import {
  Icon,
  SectionTitle,
  CardGrid,
  Card,
  CardTitle,
  CardTitleLink,
  CardTitleNoLink,
  CardLocation,
  CardItem,
  CardItemTitle,
  CardItemRoleName,
  CardItemRoleDates,
  Description,
  Text,
} from './Elements';
import { Loading } from './Loading';

export const EmploymentHistory = () => {
  const { selectedColor } = useContext(DataContext);
  const [works] = useState(getWorks());

  return (
    <div>
      <SectionTitle>Employment history</SectionTitle>
      <CardGrid>
        {works ? (
          works.map((work) => (
            <Card key={work.id} color={selectedColor}>
              <CardTitle color={selectedColor}>
                {work.companyURL ? (
                  <CardTitleLink
                    color={selectedColor}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={work.companyURL}
                  >
                    {work.company}
                  </CardTitleLink>
                ) : (
                  <CardTitleNoLink>{work.company}</CardTitleNoLink>
                )}
              </CardTitle>
              <br />
              <CardLocation>
                <Icon>
                  <GoLocation />
                </Icon>
                {work.location}
              </CardLocation>
              {work.roles &&
                work.roles.map((role) => (
                  <CardItem key={role.id}>
                    <CardItemTitle color={selectedColor}>
                      <CardItemRoleName>{`${role.title}`}</CardItemRoleName>
                      <CardItemRoleDates>
                        {`  ${dates(role.startDate, role.endDate)} (${diffDates(
                          role.startDate,
                          role.endDate
                        )})`}
                      </CardItemRoleDates>
                    </CardItemTitle>
                    <br />
                    {role.descriptions &&
                      role.descriptions.map((description) => (
                        <Description key={description.id}>
                          <Icon>
                            <FiChevronRight />
                          </Icon>
                          <Text>{description.text}</Text>
                        </Description>
                      ))}
                    <br />
                  </CardItem>
                ))}
            </Card>
          ))
        ) : (
          <Loading />
        )}
      </CardGrid>
    </div>
  );
};
