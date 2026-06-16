import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "FwDET — 衛星画像から浸水深を推定するツールの解説",
};

export default function Page() {
  return <Content />;
}
