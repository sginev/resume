import Image from 'next/image';

import { faViber } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AvatarImage from '../../public/profile-picture.webp';
import { LoadedContent } from '../utils/loadPageContent';

export function TheSidebar(props: LoadedContent) {
  return (
    <div className='sidebar-wrapper'>
      <div className='profile-container'>
        <Image
          className='profile'
          src={AvatarImage}
          alt='Developer photo'
          width={160}
          height={160}
        />
        <h1 className='name'>Stefan Ginev</h1>
        <h3 className='tagline'>Software Developer</h3>
      </div>
      <div className='contact-container container-block'>
        <ul className='list-unstyled contact-list'>
          <li className='email'>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href='mailto: choephix@gmail.com'>choephix@gmail.com</a>
          </li>
          <li className='phone'>
            <FontAwesomeIcon icon={faPhone} />
            <a href='tel:+359886791663'>+359 886 791-663</a>
          </li>
          <li className='viber'>
            <FontAwesomeIcon icon={faViber} />
            <a href='tel:+359886791663'>+359 886 791-663</a>
          </li>
          <li className='website'>
            <FontAwesomeIcon icon={faGlobe} />
            <a href='https://sginev.github.io/portfolio' target='_blank'>
              sginev.github.io/portfolio
            </a>
          </li>
        </ul>
      </div>
      <div className='languages-container container-block'>
        <h2 className='container-block-title'>Languages</h2>
        <ul className='list-unstyled interests-list'>
          <li>
            <a href='https://certs.duolingo.com/qbgyunmd'>
              English <span className='lang-desc'>(Duolingo Cert)</span>
            </a>
          </li>
        </ul>
      </div>
      <div className='interests-container container-block'>
        <h2 className='container-block-title'>Technologies</h2>
        <ul className='list-unstyled interests-list'>
          {props.home.frontmatter.technologies?.map((label: string, index: number) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </div>
      <div className='education-container container-block'>
        <h2 className='container-block-title'>Education</h2>
        <div className='item'>
          <h4 className='degree'>Computer Science</h4>
          <h5 className='meta'>TU Varna</h5>
          <div className='time'>2007 - 2011</div>
        </div>
      </div>
    </div>
  );
}
