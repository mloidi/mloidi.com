import React, { useState, useContext } from 'react';
import { GoLocation } from 'react-icons/go';

import { dates } from '../lib/util.lib';
import { getStudies } from '../lib/Data';
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
} from './Elements';
import { Loading } from './Loading';

export const Education = () => {
  const { selectedColor } = useContext(DataContext);
  const [studies] = useState(getStudies());

  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <CardGrid>
        {studies ? (
          studies.map((study) => (
            <Card key={study.id} color={selectedColor}>
              <CardTitle color={selectedColor}>
                {study.placeURL ? (
                  <CardTitleLink
                    color={selectedColor}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={study.placeURL}
                  >
                    {study.place}
                  </CardTitleLink>
                ) : (
                  <CardTitleNoLink>{study.place}</CardTitleNoLink>
                )}
              </CardTitle>
              <br />
              <CardLocation>
                <Icon>
                  <GoLocation />
                </Icon>
                {study.location}
              </CardLocation>
              <CardItem>
                <CardItemTitle color={selectedColor}>
                  <CardItemRoleName>{`${study.title}`}</CardItemRoleName>
                  <CardItemRoleDates>
                    {` ${dates(null, null, study.finishDate)}`}
                  </CardItemRoleDates>
                </CardItemTitle>
              </CardItem>
            </Card>
          ))
        ) : (
          <Loading />
        )}
      </CardGrid>
    </div>
  );
};
