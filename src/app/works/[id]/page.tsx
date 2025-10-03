import { Metadata } from 'next';
import ProjectClientPage from './projectClientPage';
import { projects } from '../../../../data/static';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const projectId = params.id;

  const project = projects.find((proj) => proj.id === Number(projectId));

  if (!project) {
    return {
      title: {
        absolute: 'Kiglance',
      },
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

const page = () => {
  return <ProjectClientPage />;
};

export default page;
