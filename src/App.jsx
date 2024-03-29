import * as React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./pages/PublicRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import GuestRouter from "./pages/GuestRouter";
import AuthGuard from "./_utils/AuthGuard";
import Profile from './pages/Profile';
import Layout from './pages/Layout';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/*" element={<GuestRouter />} />
          
          <Route element={<Layout />}>
            <Route path="/profile" element={<AuthGuard><Profile /></AuthGuard>} />
          </Route>

          <Route
            path="/family/*"
            element={
              <AuthGuard>
                <PublicRouter />
              </AuthGuard>
            }
          />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
