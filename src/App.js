import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import Root from "./Root";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root />
    </QueryClientProvider>
  );
}

export default App;
