import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faCaretRight,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import { diffDates, dates } from '../../lib/dateUtil';
import {
  BoxDiv,
  Box,
  BoxTitle,
  BoxRole,
  BoxRoleTitle,
  BoxRoleLeft,
  BoxRoleRight,
  BoxRoleDetail,
  Icon,
  Title,
  Link,
  BoxDetail
} from './ItemStyle';

const ItemCourse = props => (
  <BoxDiv {...props}>
    <React.Fragment>
      <Box {...props}>
        <BoxTitle>
          <Icon {...props}>
            <FontAwesomeIcon icon={faLaptopCode} />
          </Icon>
          <Title {...props}>
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
          </Title>
        </BoxTitle>
        {props.item.roles &&
          Object.keys(props.item.roles).map(key => (
            <BoxRole key={key} {...props}>
              <BoxRoleTitle>
                <BoxRoleLeft>
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
                </BoxRoleLeft>
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
                <BoxRoleDetail>
                  <FontAwesomeIcon icon={faCaretRight} />{' '}
                  {props.item.roles[key].description}
                  {props.item.roles[key].descriptionDetails &&
                    props.item.roles[key].descriptionDetails.map(
                      descriptionDetails => (
                        <p key={descriptionDetails}>
                          <FontAwesomeIcon
                            className="icon"
                            icon={faCaretRight}
                          />{' '}
                          {descriptionDetails}
                        </p>
                      )
                    )}
                </BoxRoleDetail>
              </BoxDetail>
              <BoxDetail>
                {props.item.roles[key].appUrl ? (
                  <React.Fragment>
                    Finish projects <FontAwesomeIcon icon={faArrowRight} />{' '}
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
          ))}
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default ItemCourse;
