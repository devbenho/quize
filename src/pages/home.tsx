import { Sidebar } from "../components/sidebar";
import { AppLayout } from "../layouts/hydrogen/layout";
import { StudentHomePage } from "./student-home-page";

export const Home = () => {
  return (
    <AppLayout>
      <Sidebar />
      <StudentHomePage />
    </AppLayout>
  );
};
