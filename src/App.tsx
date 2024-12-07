import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

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
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
