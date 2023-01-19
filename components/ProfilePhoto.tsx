import { LoadedContent } from '@/utils/loadPageContent';
import Image from 'next/image';

import ProfilePhotoImage from '@/public/profile-photo.avif';

export function ProfilePhoto(data: LoadedContent) {
  return (
    <div
      className='profile gatsby-image-wrapper'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <Image
        aria-hidden='true'
        src={ProfilePhotoImage}
        alt=''
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          transitionDelay: '500ms',
        }}
      />
    </div>
  );
}
