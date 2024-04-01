import { Suspense } from "react";
import "./App.css";
import { LoadingSpinner } from "./Components";
import { appRouter } from "./appRouter";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./muiTheme";
import { ApiProvider } from "./Api";
import AppHeader from "./Components/AppHeader";

function App() {
  return (
    <div className="App">
      <ApiProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme={true} />
          <Suspense fallback={<LoadingSpinner />}>
            <AppHeader />
            <RouterProvider router={appRouter} />
          </Suspense>
        </ThemeProvider>
      </ApiProvider>
    </div>
  );
}

export default App;
