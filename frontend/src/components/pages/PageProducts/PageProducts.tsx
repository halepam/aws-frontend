import Products from "~/components/pages/PageProducts/components/Products";
import Box from "@mui/material/Box";

export default function PageProducts() {
  return (
    <Box py={3}>
      <p>Listing products</p>
      <Products />
    </Box>
  );
}
