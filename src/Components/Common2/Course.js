import React from 'react';

import { diffDates, dates } from '../../lib/util';
import Icon from './Icon';
import {
  BoxDiv,
  Box,
  BoxRole,
  BoxRoleTitle,
  BoxRoleLeftC,
  BoxRoleRight,
  BoxRoleDetail,
  IconDiv,
  Title,
  Link,
  BoxDetail,
  Line,
  Technologies,
  TechnologiesTitle,
  Technology,
  ImageArea,
  ProjectDetailArea
} from '../Style/Style';

const ItemCourse = props => (
  <BoxDiv>
    <React.Fragment>
      {props.item.roles &&
        Object.keys(props.item.roles).map(key => (
          <Box key={key}>
            <BoxRole key={key}>
              <BoxRoleTitle>
                <BoxRoleLeftC>
                  <IconDiv>
                    <Icon icon="faLaptopCode" />
                  </IconDiv>
                  <Title>
                    {props.item.roles[key].titleUrl ? (
                      <Link
                        itemRole
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.item.roles[key].titleUrl}
                      >
                        {props.item.roles[key].title}
                      </Link>
                    ) : (
                      <React.Fragment>
                        {props.item.roles[key].title}
                      </React.Fragment>
                    )}
                    {' ('}
                    {props.item.placeUrl ? (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={props.item.placeUrl}
                      >
                        {props.item.place}
                      </Link>
                    ) : (
                      <React.Fragment>{props.item.place}</React.Fragment>
                    )}
                    {')'}
                  </Title>
                </BoxRoleLeftC>
                <BoxRoleRight>
                  {dates(
                    props.item.roles[key].fromDate,
                    props.item.roles[key].untilDate,
                    props.item.roles[key].finishDate
                  )}
                  {diffDates(
                    props.item.roles[key].fromDate,
                    props.item.roles[key].untilDate,
                    props.item.roles[key].finishDate
                  )}
                </BoxRoleRight>
              </BoxRoleTitle>
              <BoxDetail>
                <ProjectDetailArea>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.item.roles[key].appUrl}
                    isLink="true"
                  >
                    <ImageArea
                      src={props.item.roles[key].imageURL}
                      alt={props.item.roles[key].title}
                    />
                  </Link>
                  <div>
                    <BoxRoleDetail>
                      {props.item.roles[key].description}
                      {props.item.roles[key].descriptionDetails &&
                        props.item.roles[key].descriptionDetails.map(
                          descriptionDetails => (
                            <p key={descriptionDetails}>
                              <Icon icon="faCaretRight" /> {descriptionDetails}
                            </p>
                          )
                        )}
                    </BoxRoleDetail>
                    <BoxDetail>
                      <TechnologiesTitle>Technologies used</TechnologiesTitle>
                      <Technologies>
                        {props.item.roles[key].technologies.map(technology => (
                          <Technology key={technology.id}>
                            <Icon icon="faCheck" /> {technology.description}
                          </Technology>
                        ))}
                      </Technologies>
                    </BoxDetail>
                  </div>
                </ProjectDetailArea>
              </BoxDetail>
              <BoxDetail>
                {props.item.roles[key].appUrl ? (
                  <React.Fragment>
                    <strong>Finished project</strong>{' '}
                    <Icon icon="faArrowRight" />{' '}
                    <Link
                      itemRole
                      target="_blank"
                      rel="noopener noreferrer"
                      href={props.item.roles[key].appUrl}
                    >
                      {props.item.roles[key].appTitle}
                    </Link>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {props.item.roles[key].appTitle}
                  </React.Fragment>
                )}
              </BoxDetail>
            </BoxRole>
            <Line />
          </Box>
        ))}
    </React.Fragment>
  </BoxDiv>
);

export default ItemCourse;
