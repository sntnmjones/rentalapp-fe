import Login from "~/components/login";
import type { Route } from "./login/+types/login";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "login" },
    { name: "description", content: "login page" },
  ];
}

export default function App() {
    return Login();
}