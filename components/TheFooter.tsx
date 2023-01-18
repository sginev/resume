import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function TheFooter() {
  return (
    <footer className='footer'>
      <div className='text-center'>
        <small className='copyright'>
          This website is built with
          <a href='https://nextjs.org/' target='_blank' rel='noreferrer'>
            {' Next.js 13 '}
          </a>
          and
          <a href='https://tina.io' target='_blank' rel='noreferrer'>
            {' TinaCMS '}
          </a>
        </small>
      </div>

      <div className='text-center'>
        <small className='copyright'>
          Template designed with <FontAwesomeIcon icon={faHeart} /> by
          <a href='http://themes.3rdwavemedia.com' target='_blank' rel='noreferrer'>
            {' Xiaoying Riley '}
          </a>
          for developers
        </small>
      </div>
    </footer>
  );
}

export default TheFooter;
