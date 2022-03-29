import React from "react";
import { Container } from "reactstrap";
import AppRouter from "../router/AppRouter";
import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <TopNavigation />
      <main className="main">
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
        App
      </main>
      <Footer />
    </>
  );
};

export default Layout;
