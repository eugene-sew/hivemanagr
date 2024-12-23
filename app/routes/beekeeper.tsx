import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import Footer from "~/components/ui/custom/Footer";
import Header from "~/components/ui/custom/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "OneHive Africa" },
    { name: "description", content: "Hivemanager" },
  ];
};

export default function Beekeeper() {
  return (
    <div className="bg-white h-fit items-center w-screen grid">
      <Header />
      <Footer />
    </div>
  );
}
