import React from 'react';

import { diffDates, dates } from '../../lib/util';
import Icon from './Icon';
import {
  BoxDiv,
  Box,
  BoxTitle,
  BoxRole,
  BoxRoleTitle,
  BoxRoleLeft,
  BoxRoleRight,
  BoxRoleDetail,
  BoxRoleDetailLine,
  IconDiv,
  Title,
  Link,
  BoxDetail,
  Line
} from '../Style/Style';

const ItemJob = props => (
  <BoxDiv {...props}>
    <React.Fragment>
      <Box {...props}>
        <BoxTitle>
          <IconDiv {...props}>
            <Icon icon="faBriefcase" />
          </IconDiv>
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
              {props.item.roles[key].description.map(description => (
                <BoxRoleDetail key={description}>
                  <BoxRoleDetailLine>
                    <Icon icon="faCaretRight" /> {description}
                  </BoxRoleDetailLine>
                </BoxRoleDetail>
              ))}
            </BoxDetail>
          </BoxRole>
        ))}
        <Line />
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default ItemJob;
