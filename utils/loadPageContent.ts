import fs from 'fs';
import matter from 'gray-matter';

export type LoadedContent = Awaited<ReturnType<typeof loadPageContent>>;

export async function loadPageContent() {
  const contentBasePath = `${process.cwd()}/content`;
  const contentPaths = {
    general: `${contentBasePath}/general.yaml`,
    home: `${contentBasePath}/home.md`,

    projects: `${contentBasePath}/projects`,
    experience: `${contentBasePath}/experience`,

    skills: `${contentBasePath}/skills.yaml`,
  };

  // console.log(`Skills:`, loadSingleFile(contentPaths.skills));

  return {
    general: loadSingleFile<{
      firstName: string;
      lastName: string;
      professionalTitle: string;
      profilePicture: string;
      introduction: string;
      projectsPrologue: string;
      miscellaneous: string;
      education: string;
      languages: string;
      contactDetails: {
        visible: boolean;
        typelabel: string;
        label: string;
        href: string;
        faIcon: string;
      }[];
      copyright: string[];
    }>(contentPaths.general).frontmatter,

    home: loadSingleFile(contentPaths.home),

    projects: loadFilesFromDirectory<{
      title: string;
      abstract: string;
      priority: number;
      position: number;
      tags: string[];
      links: { label: string; url: string; linkType: string }[];
    }>(contentPaths.projects),

    experience: loadFilesFromDirectory<{
      title: string;
      logo: string;
      time: string;
      role: string;
      priority: number;
      position: number;
    }>(contentPaths.experience),

    skills: loadSingleFile<
      {
        priority: number;
        note: string;
        label: string;
        href: string;
        faIcon: string;
        confidence: number;
        categories: string[];
      }[]
    >(contentPaths.skills).frontmatter,
  };
}

function loadSingleFile<T extends { [key: string]: any }>(filepath: string) {
  const markdownWithMetadata = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(markdownWithMetadata);
  return { frontmatter: data as T, content };
}

function loadFilesFromDirectory<T extends { [key: string]: any }>(dirpath: string) {
  const filenames = fs.readdirSync(dirpath, 'utf-8');
  return filenames.map(filename => loadSingleFile<T>(`${dirpath}/${filename}`));
}

export default loadPageContent;
