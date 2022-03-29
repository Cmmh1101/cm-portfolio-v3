import React from "react";
import { Container } from "reactstrap";
import AppRouter from "../router/AppRouter";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <main className="main">
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
        App
      </main>
    </>
  );
};

export default Layout;
