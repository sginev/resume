import { LoadedContent } from '@/utils/loadPageContent';

export function ProfilePhoto(data: LoadedContent) {
  return (
    <div
      className='profile gatsby-image-wrapper'
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div aria-hidden='true' style={{ width: '100%', paddingBottom: '173.82812499999997%' }}></div>
      <img
        aria-hidden='true'
        src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wEEEAAJAAsACwANABEADQASABQAFAASABgAGgAYABoAGAAkACEAHgAeACEAJAA2ACcAKQAnACkAJwA2AFEAMwA7ADMAMwA7ADMAUQBHAFYARwBCAEcAVgBHAIAAZQBZAFkAZQCAAJQAfAB2AHwAlACzAKAAoACzAOEA1QDhASUBJQGKEQAJAAsACwANABEADQASABQAFAASABgAGgAYABoAGAAkACEAHgAeACEAJAA2ACcAKQAnACkAJwA2AFEAMwA7ADMAMwA7ADMAUQBHAFYARwBCAEcAVgBHAIAAZQBZAFkAZQCAAJQAfAB2AHwAlACzAKAAoACzAOEA1QDhASUBJQGK/8IAEQgAFwANAwEiAAIRAQMRAf/EABgAAAIDAAAAAAAAAAAAAAAAAAAHAgUG/9oACAEBAAAAAGbZ5ialP//EABUBAQEAAAAAAAAAAAAAAAAAAAIE/9oACAECEAAAADR//8QAFAEBAAAAAAAAAAAAAAAAAAAAA//aAAgBAxAAAABQ/8QAIxAAAgEDAwQDAAAAAAAAAAAAAQIDBAURABJRITFSgRNBcf/aAAgBAQABPwC+XKsheNKcQAlSxaXOMA4wAPvVouLVVBFK6bGO4MvcBlOD66dNXu5U0lVHBA6maPcW8VA5POrTfqBKb4pJAhjJAJBw48hjnUTCQFmGSWIJ/e+p6oRELtz7xr//xAAXEQADAQAAAAAAAAAAAAAAAAABEBJR/9oACAECAQE/ABVHF//EABkRAAIDAQAAAAAAAAAAAAAAAAECEBETQf/aAAgBAwEBPwAhc1Pbj//Z'
        alt=''
        style={{
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center center',
          opacity: '0',
          transitionDelay: '500ms',
        }}
      />
      <picture>
        <source
          srcSet='https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;dpr=0.25&amp;fm=jpg&amp;w=256 64w,
https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;dpr=0.5&amp;fm=jpg&amp;w=256 128w,
https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;dpr=1&amp;fm=jpg&amp;w=256 256w'
          sizes='(max-width: 256px) 100vw, 256px'
        />
        <img
          sizes='(max-width: 256px) 100vw, 256px'
          srcSet='https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;dpr=0.25&amp;fm=jpg&amp;w=256 64w,
https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;dpr=0.5&amp;fm=jpg&amp;w=256 128w,
https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;dpr=1&amp;fm=jpg&amp;w=256 256w'
          src='https://www.datocms-assets.com/29155/1591230938-1591222991-profile-picture-professional-a-portrait-edited.png?auto=compress%2Cformat&amp;fm=jpg&amp;w=256'
          alt=''
          loading='lazy'
          style={{
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center center',
            opacity: '1',
            transition: 'opacity 500ms ease 0s',
          }}
        />
      </picture>
    </div>
  );
}
