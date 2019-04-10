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
  BoxDetail
} from '../style/Style';

const ItemStudy = props => (
  <BoxDiv>
    <React.Fragment>
      <Box>
        <BoxTitle>
          <IconDiv>
            <Icon icon="faGraduationCap" />
          </IconDiv>
          <Title>
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
        <BoxRole>
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
                  <BoxRoleDetailLine>
                    <Icon icon='faCaretRight' />{' '}
                    {props.item.descriptionDetails[key]}
                  </BoxRoleDetailLine>
                </BoxRoleDetail>
              ))}
          </BoxDetail>
        </BoxRole>
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default ItemStudy;
