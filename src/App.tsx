import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PastPapers from "./pages/PastPapers";
import Compilations from "./pages/Compilations";
import Videos from "./pages/Videos";
import Faculty from "./pages/Faculty";
import Routine from "./pages/Routine";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/past-papers" element={<PastPapers />} />
          <Route path="/compilations" element={<Compilations />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/routine" element={<Routine />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
