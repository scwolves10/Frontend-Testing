import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CryptoTracker from "./CryptoTracker";
import "./style.css";
import Dashboard from "./components/dashboard/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <Dashboard />


    </div>
  );
}
export default App;