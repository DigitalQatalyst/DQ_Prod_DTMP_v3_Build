/**
 * Main Application Module
 * 
 * Using MSAL v3.x which is stable and doesn't have cache corruption issues.
 */

import "./index.css";
import "./styles/theme.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { AppRouter } from "./AppRouter";
import { createRoot } from "react-dom/client";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://9609a7336af8.ngrok-free.app/services-api",
  }),
  cache: new InMemoryCache(),
});

// Create a QueryClient instance for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);

  // Check if authentication is enabled
  const authEnabled = import.meta.env.VITE_ENABLE_AUTH !== 'false';

  console.log('🚀 Starting Digital Workspace...');
  console.log('Authentication enabled:', authEnabled);

  // If authentication is disabled, render app directly
  if (!authEnabled) {
    console.log('Authentication disabled - rendering app without MSAL');
    root.render(
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <AppRouter />
        </ApolloProvider>
      </QueryClientProvider>
    );
  } else {
    // Authentication logic would go here (currently disabled)
    console.log('Authentication is enabled but not implemented in this simplified version');
  }
}
