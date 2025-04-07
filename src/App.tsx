
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import ProfileSetup from "./pages/ProfileSetup";
import ProductListing from "./pages/ProductListing";
import PaymentGateway from "./pages/PaymentGateway";
import OrderManagement from "./pages/OrderManagement";
import PricePrediction from "./pages/PricePrediction";
import About from "./pages/About";
import Layout from "./components/Layout";
import UseCaseDiagram from "./components/UseCaseDiagram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="auth" element={<Auth />} />
            <Route path="profile-setup" element={<ProfileSetup />} />
            <Route path="products" element={<ProductListing />} />
            <Route path="payment" element={<PaymentGateway />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="price-prediction" element={<PricePrediction />} />
            <Route path="about" element={<About />} />
            <Route path="use-case-diagram" element={<UseCaseDiagram />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
