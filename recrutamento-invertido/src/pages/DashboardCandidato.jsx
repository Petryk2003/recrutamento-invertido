import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { User, Briefcase, Eye, TrendingUp, Edit, FileText } from 'lucide-react';

export default function DashboardCandidato() {
  const { usuario } = useAuth();

  // Estatísticas mockadas
  const estatisticas = {
    visualizacoes: 42,
    empresasInteressadas: 8,
    perfilCompleto: 75
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header do Dashboard */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Olá, {usuario?.nome?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Bem-vindo ao seu painel de controle
          </p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Visualizações do Perfil</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{estatisticas.visualizacoes}</p>
                <p className="text-sm text-green-600 mt-1">+12% esta semana</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Empresas Interessadas</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{estatisticas.empresasInteressadas}</p>
                <p className="text-sm text-green-600 mt-1">+3 novas</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Perfil Completo</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{estatisticas.perfilCompleto}%</p>
                <p className="text-sm text-orange-600 mt-1">Complete mais 25%</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Completar Perfil */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Complete seu Perfil
              </h2>
              <p className="text-gray-600 mb-4">
                Quanto mais completo seu perfil, maiores as chances de ser encontrado por empresas!
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">Informações básicas</span>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Completo</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <span className="text-gray-700">Experiência profissional</span>
                  </div>
                  <Link to="/candidato/perfil" className="text-sm text-primary-600 font-medium hover:text-primary-700">
                    Adicionar
                  </Link>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <span className="text-gray-700">Formação acadêmica</span>
                  </div>
                  <Link to="/candidato/perfil" className="text-sm text-primary-600 font-medium hover:text-primary-700">
                    Adicionar
                  </Link>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <span className="text-gray-700">Habilidades e competências</span>
                  </div>
                  <Link to="/candidato/perfil" className="text-sm text-primary-600 font-medium hover:text-primary-700">
                    Adicionar
                  </Link>
                </div>
              </div>
            </div>

            {/* Atividade Recente */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Atividade Recente
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">Seu perfil foi visualizado</p>
                    <p className="text-sm text-gray-600">Tech Solutions Ltda visualizou seu perfil</p>
                    <p className="text-xs text-gray-500 mt-1">Há 2 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">Interesse de empresa</p>
                    <p className="text-sm text-gray-600">Agência Digital XYZ demonstrou interesse</p>
                    <p className="text-xs text-gray-500 mt-1">Há 1 dia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 font-medium">Perfil em destaque</p>
                    <p className="text-sm text-gray-600">Seu perfil apareceu em 15 buscas esta semana</p>
                    <p className="text-xs text-gray-500 mt-1">Há 3 dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-6">
            {/* Card de Perfil */}
            <div className="card">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={usuario?.foto}
                  alt={usuario?.nome}
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900">{usuario?.nome}</h3>
                  <p className="text-sm text-gray-600">{usuario?.cargo || 'Cargo não informado'}</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span>{usuario?.cidade}, {usuario?.estado}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{usuario?.experienciaAnos} anos de experiência</span>
                </div>
              </div>

              <Link 
                to="/candidato/perfil" 
                className="btn-primary w-full flex items-center justify-center"
              >
                <Edit className="w-4 h-4 mr-2" />
                Editar Perfil
              </Link>
            </div>

            {/* Dicas */}
            <div className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                💡 Dica do Dia
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Candidatos com perfis completos têm 3x mais chances de serem contatados por empresas!
              </p>
              <Link 
                to="/candidato/perfil" 
                className="text-sm font-medium text-primary-600 hover:text-primary-700"
              >
                Complete seu perfil agora →
              </Link>
            </div>

            {/* Upload de Currículo */}
            <div className="card">
              <div className="flex items-center mb-3">
                <FileText className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="font-bold text-gray-900">Currículo</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Adicione seu currículo para que empresas possam conhecer melhor sua experiência
              </p>
              <button className="btn-secondary w-full">
                Upload de Currículo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
