import type { Metadata } from "next";
import PublicationsList from "@/components/PublicationsList";

export const metadata: Metadata = { title: "Publications" };

export default function PublicationsPage() {
  return <PublicationsList />;
}
