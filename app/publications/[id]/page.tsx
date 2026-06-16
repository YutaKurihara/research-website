import type { Metadata } from "next";
import { publications } from "@/lib/data";
import { notFound } from "next/navigation";
import PublicationDetail from "@/components/PublicationDetail";

export function generateStaticParams() {
  return publications.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const pub = publications.find((p) => p.id === id);
  if (!pub) return {};
  return { title: pub.title };
}

export default async function PublicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pub = publications.find((p) => p.id === id);
  if (!pub) notFound();

  return <PublicationDetail pub={pub} />;
}
