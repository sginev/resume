import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faArchive, faBriefcase, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { LoadedContent } from '../utils/loadPageContent';

export function TheMain(props: LoadedContent) {
  function SectionTitle(props: PropsWithChildren<{ icon: IconProp }>) {
    return (
      <h2 className='section-title'>
        <span className='icon-holder'>
          <FontAwesomeIcon icon={props.icon} />
        </span>
        {props.children}
      </h2>
    );
  }

  return (
    <div className='main-wrapper'>
      <section className='section summary-section'>
        <SectionTitle icon={faUser}> Career Profile </SectionTitle>
        <div className='summary'>
          <ReactMarkdown>{props.home.frontmatter.introduction}</ReactMarkdown>
        </div>
      </section>

      <section className='section projects-section'>
        <SectionTitle icon={faArchive}> Projects </SectionTitle>
        <div className='intro'>
          <ReactMarkdown>{props.home.frontmatter.introProjects}</ReactMarkdown>
        </div>

        {props.projects.map(({ frontmatter, content }, index) => {
          return (
            <div className='item' key={index}>
              <div className='upper-row'>
                <h3 className='job-title'>{frontmatter.abstract}</h3>
                <div className='time'>{frontmatter.time}</div>
              </div>
              <div className='project-tagline'>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      </section>

      <section className='section experiences-section'>
        <SectionTitle icon={faBriefcase}> Experiences </SectionTitle>
        {props.experience.map(({ frontmatter, content }, index) => {
          return (
            <div className='item' key={index}>
              <div className='meta'>
                <div className='upper-row'>
                  <h3 className='job-title'>{frontmatter.title}</h3>
                  <div className='time'>{frontmatter.time}</div>
                </div>
                <div className='company'>{frontmatter.position}</div>
              </div>
              <div className='details'>
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          );
        })}
      </section>

      <section className='section experiences-section'>
        <SectionTitle icon={faBriefcase}> Miscellaneous </SectionTitle>
        <div className='item'>
          <div className='details'>
            <ReactMarkdown>{props.home.frontmatter.miscellaneous}</ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TheMain;
