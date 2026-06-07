import { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetail";
import { PRODUCTS } from "@/data/products";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PRODUCTS.find((p) => p.id === id);
  if (!project) return { title: "Not Found | ESTATE ARCHITECTS" };
  return {
    title: `${project.title} | ESTATE ARCHITECTS`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image }],
    },
  };
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

export default async function Page({ params }: ProjectPageProps) {
  const { id } = await params;
  return <ProjectDetail projectId={id} />;
}
