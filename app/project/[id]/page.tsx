import ProjectDetail from "@/components/ProjectDetail";
import { PRODUCTS } from "@/data/products";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
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
