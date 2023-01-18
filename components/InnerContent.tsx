import { LoadedContent } from '@/utils/loadPageContent';
import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

const Spacer = () => <div className='spacer' />;
const ItemSpacer = () => <div className='item-spacer' />;
const StorySection = ({ children, title }: PropsWithChildren<{ title: string }>) => (
  <div className='section'>
    <h1>{title}</h1>
    {children}
    <Spacer />
  </div>
);

//// Defining the sections separately here allows us to order them via the headless CMS
const StorySections = {
  careerProfile: ({ data }: { data: LoadedContent }) => (
    <StorySection title='Career Profile'>
      <ItemSpacer />
      <div className='item'>
        <ReactMarkdown className='text'>{data.general.introduction}</ReactMarkdown>
      </div>
    </StorySection>
  ),
  projects: ({ data }: { data: LoadedContent }) => (
    <StorySection title='Projects'>
      {
        // <div className='item'>
        //   <ReactMarkdown className='text'>{data.general.projectsPrologue}</ReactMarkdown>
        // </div>
      }
      {data.projects
        .filter(node => node.frontmatter.priority > 0)
        .map((node, i) => (
          <div
            key={node.frontmatter.title}
            className='item' /*onClick={ () => selectProject( node.id ) }*/
          >
            <ItemSpacer />
            <div className='upper-row'>
              <h3 className='title'>{node.frontmatter.abstract}</h3>
            </div>
            <div className='details'>
              {node.frontmatter.links.map(link => (
                <a key={link.label} href={link.url} target='_blank' rel='noreferrer'>
                  Link to: {link.label}
                </a>
              ))}
              {node.frontmatter.links.length ? <p>-</p> : null}
            </div>
            <ReactMarkdown className='project-tagline'>{node.content}</ReactMarkdown>
          </div>
        ))}
    </StorySection>
  ),
  experiences: ({ data }: { data: LoadedContent }) => (
    <StorySection title='Experiences'>
      {data.experience.map((node, i) => (
        <div key={node.frontmatter.title} className='item'>
          <ItemSpacer />
          <div className='xp-header'>
            <div className='logo'>
              <img className='logo' width={200} src={node.frontmatter.logo} />
            </div>
            <h3 className='company'>{node.frontmatter.title}</h3>
            <div className='job-title'>{node.frontmatter.role}</div>
            <div className='time'>({node.frontmatter.time})</div>
          </div>
          <ReactMarkdown className='description'>{node.content}</ReactMarkdown>
          <ItemSpacer />
        </div>
      ))}
    </StorySection>
  ),
  miscellaneous: ({ data }: { data: LoadedContent }) => (
    <StorySection title='Miscellaneous'>
      <ItemSpacer />
      <div className='item'>
        <div className='text' dangerouslySetInnerHTML={{ __html: data.general.miscellaneous }} />
      </div>
    </StorySection>
  ),
};

export function InnerContent(data: LoadedContent) {
  const sections = [
    'careerProfile',
    'experiences',
    'projects',
    'miscellaneous',
  ] as (keyof typeof StorySections)[];
  return (
    <div className='content'>
      <div className='header'>
        <div>
          <h1 className='name'>
            {data.general.firstName} {data.general.lastName}
          </h1>
          <h3 className='job'>{data.general.professionalTitle}</h3>
        </div>
      </div>
      <div className='story'>{sections.map(key => StorySections[key]({ data }))}</div>
    </div>
  );
}
