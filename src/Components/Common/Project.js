import React from 'react';

import { lastElementInArray } from '../../lib/util';
import Icon from './Icon';
import {
  BoxDiv,
  Box,
  BoxTitle,
  BoxRole,
  BoxRoleDetail,
  IconDiv,
  Title,
  Link,
  BoxDetail,
  Line,
  Technologies,
  TechnologiesTitle,
  Technology
} from '../Style/Style';

const ItemProject = props => (
  <BoxDiv {...props}>
    <React.Fragment>
      <Box {...props}>
        <BoxTitle>
          <IconDiv {...props}>
            <Icon icon="faCoffee" />
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
        {/* {Object.keys(props.item.roles).map(key => (
          <BoxRole key={key} {...props}>
            <BoxDetail>
              <BoxRoleDetail>
                <Icon icon="faCaretRight" /> {props.item.roles[key].description}
              </BoxRoleDetail>
            </BoxDetail>
          </BoxRole>
        ))} */}
        <BoxRole>
          <BoxDetail>
            <BoxRoleDetail>{props.item.description}</BoxRoleDetail>
          </BoxDetail>
          <BoxDetail>
            <TechnologiesTitle>Technologies used</TechnologiesTitle>
            <Technologies>
              {props.item.technologies.map(technology => (
                <React.Fragment>
                  <Technology key={technology.id}>
                    {technology.description}
                  </Technology>
                  <div>
                    {lastElementInArray(technology.line, props.item.maxTech)
                      ? '|'
                      : ''}
                  </div>
                </React.Fragment>
              ))}
            </Technologies>
          </BoxDetail>
        </BoxRole>
        <Line />
      </Box>
    </React.Fragment>
  </BoxDiv>
);

export default ItemProject;
