import React from "react";
import styled from "styled-components";

export const Banner = () => {
  return (
    <Layout>
      <h1>Новости для каждого</h1>
      <h4>
        Сохраняйте хорошее настроение с утра: о плохом можно читать позже. Мы помечаем новости, чтобы помочь вам в этом
      </h4>
    </Layout>
  );
};

const Layout = styled.div``;
