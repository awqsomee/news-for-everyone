import React, { useState } from "react";
import { Filter } from "./Filter";
import styled from "styled-components";

export const Categories = ({ initState }: { initState: Record<string, boolean> }) => {
  const [categories, setCategories] = useState<Record<string, boolean>>(initState);
  return (
    <Layout>
      <Filter
        list={categories}
        defaultList={initState}
        setFilter={(categories) => setCategories(categories)}
        type="object"
      />
    </Layout>
  );
};

const Layout = styled.div`
  & + div {
    margin-top: 24px;
  }
`;
