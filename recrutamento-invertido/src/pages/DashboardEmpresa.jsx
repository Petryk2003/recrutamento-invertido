import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { Search, Users, Eye, TrendingUp, Briefcase } from 'lucide-react';

export default function DashboardEmpresa() {
  const { usuario } = useAuth();

  // Estatísticas mockadas
  const estatisticas = {
    buscasRealizadas: 23,
    candidatosVisualizados: 87,
    candidatosSalvos: 12
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header do Dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Olá, {usuario?.nome}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Encontre os melhores talentos para sua empresa
          </p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Buscas Realizadas</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{estatisticas.buscasRealizadas}</p>
                <p className="text-sm text-blue-600 mt-1">Este mês</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Candidatos Visualizados</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{estatisticas.candidatosVisualizados}</p>
                <p className="text-sm text-green-600 mt-1">+18 esta semana</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Candidatos Salvos</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{estatisticas.candidatosSalvos}</p>
                <p className="text-sm text-purple-600 mt-1">Para contato</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ações Rápidas */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Ações Rápidas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  to="/empresa/buscar" 
                  className="p-4 border-2 border-primary-200 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200">
                      <Search className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Buscar Candidatos</h3>
                      <p className="text-sm text-gray-600">Use filtros avançados</p>
                    </div>
                  </div>
                </Link>

                <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200">
                      <Users className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Candidatos Salvos</h3>
                      <p className="text-sm text-gray-600">{estatisticas.candidatosSalvos} salvos</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200">
                      <Briefcase className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Minhas Vagas</h3>
                      <p className="text-sm text-gray-600">Gerenciar vagas</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all group cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200">
                      <TrendingUp className="w-6 h-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Relatórios</h3>
                      <p className="text-sm text-gray-600">Ver análises</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Buscas Recentes */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Buscas Recentes
              </h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Desenvolvedor Full Stack</p>
                    <p className="text-sm text-gray-600">São Paulo, SP • 5+ anos • React, Node.js</p>
                  </div>
                  <span className="text-sm text-gray-500">15 resultados</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Designer UX/UI</p>
                    <p className="text-sm text-gray-600">Rio de Janeiro, RJ • 3+ anos • Figma</p>
                  </div>
                  <span className="text-sm text-gray-500">8 resultados</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium text-gray-900">Gerente de Projetos</p>
                    <p className="text-sm text-gray-600">Qualquer local • 5+ anos • Scrum, PMP</p>
                  </div>
                  <span className="text-sm text-gray-500">12 resultados</span>
                </div>
              </div>
            </div>

            {/* Candidatos Recomendados */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Candidatos em Destaque
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Candidato"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Ana Carolina Silva</h3>
                    <p className="text-sm text-gray-600">Desenvolvedora Full Stack</p>
                    <p className="text-sm text-gray-500 mt-1">São Paulo, SP • 5 anos de experiência</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Node.js</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">PostgreSQL</span>
                    </div>
                  </div>
                  <Link to="/empresa/candidato/1" className="btn-secondary text-sm">
                    Ver Perfil
                  </Link>
                </div>

                <div className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all cursor-pointer">
                  <img
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Candidato"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">Pedro Henrique Santos</h3>
                    <p className="text-sm text-gray-600">Designer UX/UI</p>
                    <p className="text-sm text-gray-500 mt-1">Rio de Janeiro, RJ • 3 anos de experiência</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Figma</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Adobe XD</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">User Research</span>
                    </div>
                  </div>
                  <Link to="/empresa/candidato/2" className="btn-secondary text-sm">
                    Ver Perfil
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-6">
            {/* Card de Perfil da Empresa */}
            <div className="card">
              <div className="text-center mb-4">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-10 h-10 text-primary-600" />
                </div>
                <h3 className="font-bold text-gray-900">{usuario?.nome}</h3>
                <p className="text-sm text-gray-600">{usuario?.setor}</p>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <p>{usuario?.tamanho}</p>
                <p>{usuario?.cidade}, {usuario?.estado}</p>
              </div>

              <button className="btn-secondary w-full">
                Editar Perfil
              </button>
            </div>

            {/* Dicas */}
            <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💡 Dica para Recrutadores
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Use múltiplos filtros combinados para encontrar candidatos mais qualificados e alinhados com suas necessidades!
              </p>
              <Link 
                to="/empresa/buscar" 
                className="text-sm font-medium text-green-700 hover:text-green-800"
              >
                Fazer uma busca avançada →
              </Link>
            </div>

            {/* Plano */}
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3">Plano Atual</h3>
              <div className="p-4 bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg mb-3">
                <p className="text-lg font-bold text-primary-700">Plano Profissional</p>
                <p className="text-sm text-gray-600 mt-1">Buscas ilimitadas</p>
              </div>
              <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                Fazer upgrade →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
