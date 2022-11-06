import { Route, Routes, useNavigate } from "react-router-dom";

import Counter from "./Components/Counter1";
import Error404Page from "./Components/Error404Page";
import Header from "./Components/Header";

import { ErrorBoundary } from "react-error-boundary";
import TestError from "./Components/TestError";


const ErrorBoundaryFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div id="wholepage">
      <p>{error.message}</p>
      <button className="errorpage" onClick={() => resetErrorBoundary()}>Restart application</button>
    </div>
  );
};
const App = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <ErrorBoundary
        FallbackComponent={ErrorBoundaryFallback}
        onReset={() => navigate("/")}
      >
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/testerror" element={<TestError />} />
          <Route path="/test404page" element={<Error404Page />} />

          <Route path="*" element={<Error404Page />} />
        </Routes>
      </ErrorBoundary>
    </>
  )
};
export default App;
