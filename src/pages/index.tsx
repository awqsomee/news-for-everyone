import styled from "styled-components";
import { Container } from "../components/Container";
import { Banner } from "../components/News/Banner";
import { NewsList } from "../components/News/NewsList";

export default function Page() {
  return (
    <Container>
      <Banner />
      <NewsList />
    </Container>
  );
}
