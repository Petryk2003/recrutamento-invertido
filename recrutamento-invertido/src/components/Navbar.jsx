import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, User, Briefcase } from 'lucide-react';

export default function Navbar() {
  const { usuario, tipoUsuario, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">TalentMatch</span>
            </Link>
          </div>

          {/* Menu de Navegação */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                {/* Menu para Candidato */}
                {tipoUsuario === 'candidato' && (
                  <>
                    <Link 
                      to="/candidato/dashboard" 
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/candidato/perfil" 
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Meu Perfil
                    </Link>
                  </>
                )}

                {/* Menu para Empresa */}
                {tipoUsuario === 'empresa' && (
                  <>
                    <Link 
                      to="/empresa/dashboard" 
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/empresa/buscar" 
                      className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Buscar Candidatos
                    </Link>
                  </>
                )}

                {/* Informações do Usuário */}
                <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
                  <div className="flex items-center space-x-2">
                    <User className="w-5 h-5 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {usuario?.nome || usuario?.nomeEmpresa}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors"
                    title="Sair"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/login/candidato" 
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login Candidato
                </Link>
                <Link 
                  to="/login/empresa" 
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login Empresa
                </Link>
                <Link 
                  to="/cadastro/candidato" 
                  className="btn-primary"
                >
                  Cadastrar-se
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
