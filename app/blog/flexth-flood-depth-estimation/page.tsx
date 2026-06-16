import type { Metadata } from "next";
import Content from "./content";

export const metadata: Metadata = {
  title: "FLEXTH — 衛星浸水マップから浸水深を推定し、欠測域を補完するフレームワーク",
};

export default function Page() {
  return <Content />;
}
