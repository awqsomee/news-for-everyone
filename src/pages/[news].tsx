import { useRouter } from "next/router";
import { Box } from "../components/Box";

export default function News() {
  const router = useRouter();
  return (
    <Box>
      <h1>Страница находится в разработке</h1>
      <p>Id новости: {router.query.news}</p>
    </Box>
  );
}
