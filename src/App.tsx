import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import "react-tooltip/dist/react-tooltip.css";

// Create a client for tanstack provider
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Refetch data on window focus
      refetchOnWindowFocus: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
