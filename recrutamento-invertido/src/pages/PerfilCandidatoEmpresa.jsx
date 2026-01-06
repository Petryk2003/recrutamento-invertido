import { useParams, Link } from 'react-router-dom';
import { candidatosMock } from '../data/mockData';
import { 
  ArrowLeft, MapPin, Briefcase, Mail, Phone, DollarSign, 
  Globe, Award, GraduationCap, Calendar, Download, Heart, Share2 
} from 'lucide-react';

export default function PerfilCandidatoEmpresa() {
  const { id } = useParams();
  const candidato = candidatosMock.find(c => c.id === parseInt(id));

  if (!candidato) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Candidato não encontrado</h2>
          <Link to="/empresa/buscar" className="text-primary-600 hover:text-primary-700">
            Voltar para busca
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Botão Voltar */}
        <Link 
          to="/empresa/buscar" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para busca
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Coluna Principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Card Principal com Foto e Info Básica */}
            <div className="card">
              <div className="flex items-start space-x-6">
                <img
                  src={candidato.foto}
                  alt={candidato.nome}
                  className="w-32 h-32 rounded-full flex-shrink-0"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {candidato.nome}
                      </h1>
                      <p className="text-xl text-gray-600 mb-3">{candidato.cargo}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {candidato.cidade}, {candidato.estado}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {candidato.experienciaAnos} anos de experiência
                        </div>
                      </div>
                    </div>

                    {/* Botões de Ação */}
                    <div className="flex space-x-2">
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50" title="Salvar candidato">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50" title="Compartilhar">
                        <Share2 className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {candidato.disponivelParaTrabalhoRemoto && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                        Disponível para Remoto
                      </span>
                    )}
                    {candidato.disponivelParaMudanca && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                        Aberto a Mudança
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Resumo Profissional */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sobre</h2>
              <p className="text-gray-700 leading-relaxed">{candidato.resumo}</p>
            </div>

            {/* Experiência Profissional */}
            <div className="card">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Experiência Profissional</h2>
              </div>

              {candidato.experiencia.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Nenhuma experiência cadastrada</p>
              ) : (
                <div className="space-y-6">
                  {candidato.experiencia.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 last:pb-0">
                      {/* Bullet point */}
                      <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full -ml-[9px]"></div>
                      
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{exp.cargo}</h3>
                        <p className="text-primary-600 font-medium">{exp.empresa}</p>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.dataInicio} - {exp.atual ? 'Presente' : exp.dataFim}
                        </div>
                        {exp.descricao && (
                          <p className="text-gray-700 mt-3">{exp.descricao}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Formação Acadêmica */}
            <div className="card">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Formação Acadêmica</h2>
              </div>

              {candidato.formacao.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Nenhuma formação cadastrada</p>
              ) : (
                <div className="space-y-4">
                  {candidato.formacao.map((form, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h3 className="font-bold text-gray-900">{form.curso}</h3>
                      <p className="text-primary-600">{form.instituicao}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-2">
                        <span>{form.nivel}</span>
                        <span>•</span>
                        <span>{form.status}</span>
                        {form.anoConclusao && (
                          <>
                            <span>•</span>
                            <span>{form.anoConclusao}</span>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Habilidades */}
            <div className="card">
              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900">Habilidades</h2>
              </div>

              {candidato.habilidades.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Nenhuma habilidade cadastrada</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {candidato.habilidades.map((hab, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{hab.nome}</span>
                      <span className={`text-sm px-2 py-1 rounded ${
                        hab.nivel === 'Avançado' ? 'bg-green-100 text-green-700' :
                        hab.nivel === 'Intermediário' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-200 text-gray-700'
                      }`}>
                        {hab.nivel}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Idiomas */}
            {candidato.idiomas && candidato.idiomas.length > 0 && (
              <div className="card">
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-primary-600 mr-2" />
                  <h2 className="text-xl font-bold text-gray-900">Idiomas</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {candidato.idiomas.map((idioma, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">{idioma.idioma}</span>
                      <span className="text-sm text-gray-600">{idioma.nivel}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Coluna Lateral */}
          <div className="space-y-6">
            {/* Card de Contato */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Entrar em Contato</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <a href={`mailto:${candidato.email}`} className="hover:text-primary-600">
                    {candidato.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <a href={`tel:${candidato.telefone}`} className="hover:text-primary-600">
                    {candidato.telefone}
                  </a>
                </div>
              </div>

              <button className="btn-primary w-full mb-2">
                Enviar Mensagem
              </button>
              <button className="btn-secondary w-full">
                Agendar Entrevista
              </button>
            </div>

            {/* Pretensão Salarial */}
            {candidato.pretensaoSalarial && (
              <div className="card">
                <div className="flex items-center mb-3">
                  <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-bold text-gray-900">Pretensão Salarial</h3>
                </div>
                <p className="text-2xl font-bold text-primary-600">
                  {candidato.pretensaoSalarial}
                </p>
              </div>
            )}

            {/* Currículo */}
            <div className="card">
              <div className="flex items-center mb-3">
                <Download className="w-5 h-5 text-gray-600 mr-2" />
                <h3 className="font-bold text-gray-900">Currículo</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Baixe o currículo completo do candidato
              </p>
              <button className="btn-secondary w-full flex items-center justify-center">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>

            {/* Estatísticas */}
            <div className="card bg-gradient-to-br from-primary-50 to-blue-50 border-primary-200">
              <h3 className="font-bold text-gray-900 mb-4">Sobre este Perfil</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Visualizações</span>
                  <span className="font-bold text-gray-900">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Empresas interessadas</span>
                  <span className="font-bold text-gray-900">8</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Último acesso</span>
                  <span className="font-bold text-gray-900">2 dias atrás</span>
                </div>
              </div>
            </div>

            {/* Candidatos Similares */}
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-4">Candidatos Similares</h3>
              
              <div className="space-y-3">
                {candidatosMock
                  .filter(c => c.id !== candidato.id && c.cargo === candidato.cargo)
                  .slice(0, 2)
                  .map(similar => (
                    <Link 
                      key={similar.id}
                      to={`/empresa/candidato/${similar.id}`}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={similar.foto}
                        alt={similar.nome}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">
                          {similar.nome}
                        </p>
                        <p className="text-xs text-gray-600 truncate">
                          {similar.cargo}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
