import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "MyProject — 途上国の防災・減災を支援するオープンツール集",
};

export default function Page() {
  return <Content />;
}
