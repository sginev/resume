import { LoadedContent } from '@/utils/loadPageContent';
import { InnerContent } from './InnerContent';
import { Sidebar } from './Sidebar';

export function ResumeSheet(data: LoadedContent) {
  return (
    <div className='sheet'>
      <div className='top-detail' />
      <InnerContent {...data} />
      <Sidebar {...data} />
    </div>
  );
}
