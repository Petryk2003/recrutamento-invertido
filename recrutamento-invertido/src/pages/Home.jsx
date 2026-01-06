import { Link } from 'react-router-dom';
import { Users, Briefcase, Search, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Recrutamento Invertido
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Uma nova forma de conectar talentos e empresas. Aqui, você não procura vagas - 
            <span className="font-semibold text-primary-700"> as empresas procuram por você!</span>
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/cadastro/candidato" 
              className="btn-primary text-lg px-8 py-3"
            >
              Sou Candidato
            </Link>
            <Link 
              to="/login/empresa" 
              className="btn-secondary text-lg px-8 py-3"
            >
              Sou Empresa
            </Link>
          </div>
        </div>

        {/* Como Funciona */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Como Funciona?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Para Candidatos */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Para Candidatos</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Crie seu perfil completo com currículo e experiências</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Defina suas habilidades e pretensão salarial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Seja encontrado por empresas que buscam seu perfil</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">✓</span>
                  <span>Receba propostas sem precisar se candidatar</span>
                </li>
              </ul>
              <Link 
                to="/cadastro/candidato" 
                className="btn-primary w-full mt-6"
              >
                Criar Meu Perfil
              </Link>
            </div>

            {/* Para Empresas */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Briefcase className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Para Empresas</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Acesse um banco de talentos qualificados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Use filtros avançados para encontrar candidatos ideais</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Veja perfis completos antes de entrar em contato</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Economize tempo com recrutamento direcionado</span>
                </li>
              </ul>
              <Link 
                to="/cadastro/empresa" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 w-full block text-center mt-6"
              >
                Cadastrar Empresa
              </Link>
            </div>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por Que Usar o TalentMatch?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Busca Eficiente</h3>
              <p className="text-gray-600">
                Filtros inteligentes que conectam rapidamente empresas aos talentos certos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mais Oportunidades</h3>
              <p className="text-gray-600">
                Candidatos recebem propostas de múltiplas empresas sem esforço
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparência</h3>
              <p className="text-gray-600">
                Perfis completos e informações claras para ambas as partes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
