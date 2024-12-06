import { Metadata } from 'next';
import productsData from '../../data/products.json';
import CategoryPageContent from '../../components/CategoryPageContent';

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(productsData).map((category) => ({
    category,
  }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const resolvedParams = await props.params;
  const categoryData = productsData[resolvedParams.category as keyof typeof productsData];
  return {
    title: categoryData?.title || 'Category Not Found',
  };
}

export default async function CategoryPage(props: PageProps): Promise<JSX.Element> {
  const resolvedParams = await props.params;
  return <CategoryPageContent category={resolvedParams.category} />;
}