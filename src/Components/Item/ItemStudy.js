import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  faCaretRight
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

const ItemStudy = props => (
  <BoxDiv {...props}>
    <React.Fragment>
      <Box {...props}>
        <BoxTitle>
          <Icon {...props}>
            <FontAwesomeIcon icon={faGraduationCap} />
          </Icon>
          <Title {...props}>
            {props.item.titleURL ? (
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={props.item.titleURL}
              >
                {props.item.title}
              </Link>
            ) : (
              <React.Fragment>{props.item.title}</React.Fragment>
            )}
          </Title>
        </BoxTitle>
        <BoxRole {...props}>
          <BoxRoleTitle>
            <BoxRoleLeft>{props.item.place}</BoxRoleLeft>
            <BoxRoleRight>
              {dates(
                props.item.fromDate,
                props.item.untilDate,
                props.item.finishDate
              )}
              {diffDates(
                props.item.fromDate,
                props.item.untilDate,
                props.item.finishDate
              )}
            </BoxRoleRight>
          </BoxRoleTitle>
          <BoxDetail>
            {props.item.description}
            {props.item.descriptionDetails &&
              Object.keys(props.item.descriptionDetails).map(key => (
                <BoxRoleDetail key={key}>
                  <FontAwesomeIcon icon={faCaretRight} />{' '}
                  {props.item.descriptionDetails[key]}
                </BoxRoleDetail>
              ))}
          </BoxDetail>
        </BoxRole>
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default ItemStudy;
