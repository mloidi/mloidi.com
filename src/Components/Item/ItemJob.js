import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCaretRight } from '@fortawesome/free-solid-svg-icons';

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

const ItemJob = props => (
  <BoxDiv {...props}>
    <React.Fragment>
      <Box {...props}>
        <BoxTitle>
          <Icon {...props}>
            <FontAwesomeIcon icon={faBriefcase} />
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
        {Object.keys(props.item.roles).map(key => (
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
        ))}
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default ItemJob;
