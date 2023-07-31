import React from "react";

import FullLayout from "@/src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material";
import theme from "@/src/theme/theme";
import { Grid } from "@mui/material";
import ProductPerfomance from "../../src/components/dashboard/AllProducts";

const allorders = () => {
  return (
    <ThemeProvider theme={theme}>
      <style jsx global>
        {`
          footer {
            display: none;
          }
        `}
      </style>
      <FullLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ProductPerfomance />
          </Grid>
        </Grid>
      </FullLayout>
    </ThemeProvider>
  );
};

export default allorders;
