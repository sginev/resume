import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TheFooter() {
  return (
    <footer className='footer'>
      <div className='text-center'>
        <small className='copyright'>
          Site template designed with <FontAwesomeIcon icon={faHeart} /> by
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
