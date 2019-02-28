import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGraduationCap,
  // faLaptopCode,
  faBriefcase,
  faCaretRight
} from '@fortawesome/free-solid-svg-icons';

import { diffDates, dates } from '../../lib/dateUtil';
import { job, study } from '../Common';
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

const Item = props => (
  <BoxDiv {...props}>
    <React.Fragment>
      <Box {...props}>
        <BoxTitle>
          <Icon {...props}>
            {props.item.type === job && <FontAwesomeIcon icon={faBriefcase} />}
            {props.item.type === study && (
              <FontAwesomeIcon icon={faGraduationCap} />
            )}
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
        {props.item.type === job ? (
          Object.keys(props.item.roles).map(key => (
            <BoxRole key={key} {...props}>
              <BoxRoleTitle>
                <BoxRoleLeft>{props.item.roles[key].title}</BoxRoleLeft>
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
                </BoxRoleDetail>
              </BoxDetail>
            </BoxRole>
          ))
        ) : (
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
                  <BoxRoleDetail>
                    <FontAwesomeIcon icon={faCaretRight} />{' '}
                    {props.item.descriptionDetails[key]}
                  </BoxRoleDetail>
                ))}
            </BoxDetail>
          </BoxRole>
        )}
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default Item;
