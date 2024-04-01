import { Suspense, StrictMode } from "react";
import "./App.css";
import { LoadingSpinner } from "./Components";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./muiTheme";

function App() {
  return (
    <div className="App">
      <StrictMode>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme={true} />
          <Suspense fallback={<LoadingSpinner />}>
            <RouterProvider router={appRouter} />
          </Suspense>
        </ThemeProvider>
      </StrictMode>
    </div>
  );
}

export default App;
