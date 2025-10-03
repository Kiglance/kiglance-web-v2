import { Metadata } from 'next';
import ProjectClientPage from './projectClientPage';

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'Detailed view of the selected project',
};

const page = () => {
  return <ProjectClientPage />;
};

export default page;
