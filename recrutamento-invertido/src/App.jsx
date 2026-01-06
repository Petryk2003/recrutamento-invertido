import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';

// Páginas Públicas
import Home from './pages/Home';
import LoginCandidato from './pages/LoginCandidato';
import LoginEmpresa from './pages/LoginEmpresa';
import CadastroCandidato from './pages/CadastroCandidato';

// Páginas do Candidato
import DashboardCandidato from './pages/DashboardCandidato';
import PerfilCandidato from './pages/PerfilCandidato';

// Páginas da Empresa
import DashboardEmpresa from './pages/DashboardEmpresa';
import BuscarCandidatos from './pages/BuscarCandidatos';
import PerfilCandidatoEmpresa from './pages/PerfilCandidatoEmpresa';

// Componente de Rota Protegida
function ProtectedRoute({ children, requiredType }) {
  const { isAuthenticated, tipoUsuario } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  
  if (requiredType && tipoUsuario !== requiredType) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function AppContent() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          {/* Rotas Públicas */}
          <Route path="/" element={<Home />} />
          <Route path="/login/candidato" element={<LoginCandidato />} />
          <Route path="/login/empresa" element={<LoginEmpresa />} />
          <Route path="/cadastro/candidato" element={<CadastroCandidato />} />
          
          {/* Rotas do Candidato */}
          <Route 
            path="/candidato/dashboard" 
            element={
              <ProtectedRoute requiredType="candidato">
                <DashboardCandidato />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/candidato/perfil" 
            element={
              <ProtectedRoute requiredType="candidato">
                <PerfilCandidato />
              </ProtectedRoute>
            } 
          />
          
          {/* Rotas da Empresa */}
          <Route 
            path="/empresa/dashboard" 
            element={
              <ProtectedRoute requiredType="empresa">
                <DashboardEmpresa />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/empresa/buscar" 
            element={
              <ProtectedRoute requiredType="empresa">
                <BuscarCandidatos />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/empresa/candidato/:id" 
            element={
              <ProtectedRoute requiredType="empresa">
                <PerfilCandidatoEmpresa />
              </ProtectedRoute>
            } 
          />
          
          {/* Rota 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
