import styled from 'styled-components';

import { job, study } from '../Common';

export const BoxDiv = styled.div`
  display: grid;
  grid-template-columns: auto 2rem;
  margin-bottom: 3rem;
`;

export const Box = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  border-top: 0.5rem solid
    ${props =>
      props.item.type === job
        ? '#005d04'
        : props.item.type === study
        ? '#00265d'
        : 'pink'};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: white;
`;

export const BoxTitle = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
`;

export const BoxRole = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding: 1rem 0.5rem 1rem 0.5rem;
  text-align: left;
  border-left: 0.1rem dashed
    ${props =>
      props.item.type === job
        ? '#005d04'
        : props.item.type === study
        ? '#00265d'
        : 'pink'};
  border-right: 0.1rem dashed
    ${props =>
      props.item.type === job
        ? '#005d04'
        : props.item.type === study
        ? '#00265d'
        : 'pink'};
  border-bottom: 0.1rem dashed
    ${props =>
      props.item.type === job
        ? '#005d04'
        : props.item.type === study
        ? '#00265d'
        : 'pink'};
  &:hover {
    background-color: #ececec;
    /* cursor: pointer; */
  }
`;

export const BoxRoleTitle = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const BoxRoleLeft = styled.div`
  text-align: left;
`;

export const BoxRoleRight = styled.div`
  text-align: right;
`;

export const BoxRoleDetail = styled.div`
  font-size: 0.9rem;
  text-align: left;
  color: grey;
`;

export const Icon = styled.div`
  color: white;
  border: 1px solid
    ${props =>
      props.item.type === job
        ? '#005d04'
        : props.item.type === study
        ? '#00265d'
        : 'pink'};
  background-color: ${props =>
    props.item.type === job
      ? '#005d04'
      : props.item.type === study
      ? '#00265d'
      : 'pink'};
  padding: 0 0.5rem 0.5rem 0.5rem;
  width: 1rem;
  text-align: center;
  font-size: 1rem;
`;

export const Title = styled.div`
  color: white;
  border: 1px solid
    ${props =>
      props.item.type === job
        ? '#005d04'
        : props.item.type === study
        ? '#00265d'
        : 'pink'};
  background-color: ${props =>
    props.item.type === job
      ? '#005d04'
      : props.item.type === study
      ? '#00265d'
      : 'pink'};
  padding: 0 0.5rem 0.5rem 0.5rem;
  text-align: left;
  font-size: 1rem;
`;

export const Link = styled.a`
  color: ${props => (props.itemRole ? 'black' : 'white')};
  text-decoration: none;
  border-bottom: 2px solid ${props => (props.itemRole ? '#005d04' : 'white')};
`;

export const BoxDetail = styled.div`
  margin: 2rem 0 0 0;
  padding: 1rem 1rem 1rem 1rem;
`;
