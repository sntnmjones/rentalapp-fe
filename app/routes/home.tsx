import type { Route } from "./+types/home";
import { Home } from "../components/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dank App" },
    { name: "description", content: "Hello" },
  ];
}

// I guess it doesn't matter what you call this function ¯\_(ツ)_/¯
export default function App() {
  return <Home />;
}
