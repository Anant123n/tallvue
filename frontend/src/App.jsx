import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import CarePage from './pages/CarePage';
import MeditatePage from './pages/MeditatePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          {/* Setup default redirect to Care for demonstration */}

          <Route index element={<Navigate to="/care" replace />} />
          <Route path="care" element={<CarePage />} />
          <Route path="meditate" element={<MeditatePage />} />

          {/* Placeholder for other routes */}
          <Route path="*" element={<div className="text-white p-8">Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
