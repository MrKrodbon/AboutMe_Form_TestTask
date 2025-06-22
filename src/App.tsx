import AppRoutes from "./components/AppRoutes/AppRoutes";
import Header from "./components/Header/Header";
import { Toast } from "./components/Toast/Toast";

function App() {
  return (
    <div className="w-full">
      <Toast />
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
