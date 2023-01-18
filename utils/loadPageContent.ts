import fs from 'fs';
import matter from 'gray-matter';

export type LoadedContent = Awaited<ReturnType<typeof loadPageContent>>;

export async function loadPageContent() {
  const contentBasePath = `${process.cwd()}/content`;
  const contentPaths = {
    home: `${contentBasePath}/home.md`,
    projects: `${contentBasePath}/projects`,
    experience: `${contentBasePath}/experience`,
  };

  return {
    home: loadSingleFile(contentPaths.home),
    projects: loadFilesFromDirectory(contentPaths.projects),
    experience: loadFilesFromDirectory(contentPaths.experience),
  };
}

function loadSingleFile(filepath: string) {
  const markdownWithMetadata = fs.readFileSync(filepath, 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMetadata);
  return { frontmatter, content };
}

function loadFilesFromDirectory(dirpath: string) {
  const filenames = fs.readdirSync(dirpath, 'utf-8');
  return filenames.map(filename => loadSingleFile(`${dirpath}/${filename}`));
}

export default loadPageContent;
