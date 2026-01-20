import { Metadata } from 'next';
import ProjectClientPage from './projectClientPage';
import { projects } from '../../../../data/static';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  const project = projects.find((proj) => proj.id === Number(id));

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

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <ProjectClientPage projectId={id} />;
};

export default page;
