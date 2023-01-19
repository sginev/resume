import { LoadedContent } from '@/utils/loadPageContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { ProfilePhoto } from './ProfilePhoto';

const SidebarHeader = ({ children }: PropsWithChildren) => <h2>{children}</h2>;
const SidebarListItem = (node: any) => (
  <li className={node.href ? 'link' : 'nolink'} title={node.note}>
    <FontAwesomeIcon icon={node.faIcon} />
    {node.href ? (
      <a
        href={node.href}
        target={node.href.startsWith('http') ? '_blank' : '_self'}
        rel='noreferrer'
      >
        {node.label}
      </a>
    ) : (
      <span>{node.label}</span>
    )}
  </li>
);

export function Sidebar(data: LoadedContent) {
  const showEducation = false;

  const hightlightSkill = (skill: any) =>
    skill.confidence > 3 && skill.priority > 3 && skill.categories.includes('web');
  const main_skills = data.skills.filter(hightlightSkill);
  const other_skills = data.skills.filter((skill: any) => !main_skills.includes(skill));

  const contactDetails = data.general.contactDetails.filter(node => node.visible);

  return (
    <div className='sidebar'>
      <ProfilePhoto {...data} />

      <div className='groups-wrapper'>
        <div className='group contact-details'>
          <ul>
            {contactDetails.map(node => (
              <SidebarListItem key={node.label} {...node} />
            ))}
          </ul>
        </div>

        <div className='group languages'>
          <SidebarHeader>Languages</SidebarHeader>
          <ul>
            <li className='link'>
              <FontAwesomeIcon icon={'fas fa-flag' as any} style={{ display: 'inline' }} />
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span dangerouslySetInnerHTML={{ __html: data.general.languages }} />
            </li>
          </ul>
        </div>

        <div className='group skills main'>
          <SidebarHeader>Main Skills</SidebarHeader>
          <ul>
            {main_skills.map(node => (
              <SidebarListItem key={node.label} {...node} />
            ))}
          </ul>
        </div>

        <div className='group skills other'>
          <SidebarHeader>Other Skills</SidebarHeader>
          <ul>
            {other_skills.map(node => (
              <SidebarListItem key={node.label} {...node} />
            ))}
          </ul>
        </div>

        {showEducation && (
          <div className='group education'>
            <SidebarHeader>Education</SidebarHeader>
            <div dangerouslySetInnerHTML={{ __html: data.general.education }} />
          </div>
        )}
      </div>
    </div>
  );
}
