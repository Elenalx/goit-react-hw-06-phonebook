import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "./Loader/Loader";
import { Tweets } from '../pages/Tweets/Tweets';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
}

export default App;