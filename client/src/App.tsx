import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import HomeEn from "./pages/HomeEn";


function Router() {
  const [location, navigate] = useLocation();
  const isEnglish = location.startsWith('/en');

  return (
    <>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-40 flex gap-2">
        <button
          onClick={() => navigate('/')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            !isEnglish
              ? 'bg-primary text-primary-foreground'
              : 'bg-border text-foreground hover:bg-secondary'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          中文
        </button>
        <button
          onClick={() => navigate('/en')}
          className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
            isEnglish
              ? 'bg-primary text-primary-foreground'
              : 'bg-border text-foreground hover:bg-secondary'
          }`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          English
        </button>
      </div>

      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/en"} component={HomeEn} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook
// - Language switcher available in top-right corner for Chinese/English versions

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
