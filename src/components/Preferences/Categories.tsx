import React, { useState } from "react";
import { Filter } from "./Filter";

export const Categories = ({ initState }: { initState: Record<string, boolean> }) => {
  const [categories, setCategories] = useState<Record<string, boolean>>(initState);
  return (
    <Filter list={categories} defaultList={initState} setFilter={(categories) => setCategories(categories)} type="object" />
  );
};
