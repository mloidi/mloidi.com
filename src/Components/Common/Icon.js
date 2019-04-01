import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faCoffee,
  faLaptopCode,
  faGraduationCap,
  faBriefcase,
  faArrowRight,
  faCaretRight,
  faCertificate,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faJava,
  faHtml5,
  faCss3,
  faJs,
  faAngular,
  faReact,
  faBootstrap,
  faNode
} from '@fortawesome/free-brands-svg-icons';

const Icon = props => (
  <React.Fragment>
    {props.icon === 'faTwitter' ? (
      <FontAwesomeIcon icon={faTwitter} />
    ) : props.icon === 'faGithub' ? (
      <FontAwesomeIcon icon={faGithub} />
    ) : props.icon === 'faLinkedin' ? (
      <FontAwesomeIcon icon={faLinkedin} />
    ) : props.icon === 'faEnvelope' ? (
      <FontAwesomeIcon icon={faEnvelope} />
    ) : props.icon === 'faJava' ? (
      <FontAwesomeIcon icon={faJava} />
    ) : props.icon === 'faHtml5' ? (
      <FontAwesomeIcon icon={faHtml5} />
    ) : props.icon === 'faCss3' ? (
      <FontAwesomeIcon icon={faCss3} />
    ) : props.icon === 'faJs' ? (
      <FontAwesomeIcon icon={faJs} />
    ) : props.icon === 'faAngular' ? (
      <FontAwesomeIcon icon={faAngular} />
    ) : props.icon === 'faReact' ? (
      <FontAwesomeIcon icon={faReact} />
    ) : props.icon === 'faBootstrap' ? (
      <FontAwesomeIcon icon={faBootstrap} />
    ) : props.icon === 'faNode' ? (
      <FontAwesomeIcon icon={faNode} />
    ) : props.icon === 'faCaretRight' ? (
      <FontAwesomeIcon icon={faCaretRight} />
    ) : props.icon === 'faLaptopCode' ? (
      <FontAwesomeIcon icon={faLaptopCode} />
    ) : props.icon === 'faArrowRight' ? (
      <FontAwesomeIcon icon={faArrowRight} />
    ) : props.icon === 'faGraduationCap' ? (
      <FontAwesomeIcon icon={faGraduationCap} />
    ) : props.icon === 'faBriefcase' ? (
      <FontAwesomeIcon icon={faBriefcase} />
    ) : props.icon === 'faUser' ? (
      <FontAwesomeIcon icon={faUser} />
    ) : props.icon === 'faCertificate' ? (
      <FontAwesomeIcon icon={faCertificate} />
    ) : props.icon === 'faCheck' ? (
      <FontAwesomeIcon icon={faCheck} />
    ) : props.icon === 'faCoffee' ? (
      <FontAwesomeIcon icon={faCoffee} />
    ) : (
      <div />
    )}
  </React.Fragment>
);
export default Icon;
