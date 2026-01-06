import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, MapPin, Lock, AlertCircle, CheckCircle } from 'lucide-react';

export default function CadastroCandidato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    cidade: '',
    estado: '',
    cargo: '',
    resumo: '',
  });
  
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState(false);
  const { cadastrar } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');
    setSucesso(false);

    // Validações
    if (!formData.nome || !formData.email || !formData.senha) {
      setErro('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    if (formData.senha !== formData.confirmarSenha) {
      setErro('As senhas não coincidem');
      return;
    }

    if (formData.senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres');
      return;
    }

    // Criar conta
    const dadosCandidato = {
      nome: formData.nome,
      email: formData.email,
      telefone: formData.telefone,
      cidade: formData.cidade,
      estado: formData.estado,
      cargo: formData.cargo,
      resumo: formData.resumo,
      foto: `https://i.pravatar.cc/150?u=${formData.email}`,
      experienciaAnos: 0,
      formacao: [],
      experiencia: [],
      habilidades: [],
      idiomas: [],
      disponivelParaTrabalhoRemoto: false,
      disponivelParaMudanca: false,
    };

    const sucesso = cadastrar(dadosCandidato, 'candidato');
    
    if (sucesso) {
      setSucesso(true);
      setTimeout(() => {
        navigate('/candidato/dashboard');
      }, 1500);
    }
  };

  const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Cadastro - Candidato
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login/candidato" className="font-medium text-primary-600 hover:text-primary-500">
              Faça login aqui
            </Link>
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-sm rounded-lg border border-gray-200">
          {erro && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-800">
              <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">{erro}</span>
            </div>
          )}

          {sucesso && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-800">
              <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
              <span className="text-sm">Cadastro realizado com sucesso! Redirecionando...</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Informações Básicas */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-600" />
                Informações Básicas
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label htmlFor="cidade" className="block text-sm font-medium text-gray-700 mb-2">
                      Cidade
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="cidade"
                        name="cidade"
                        type="text"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="input-field pl-10"
                        placeholder="Sua cidade"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="estado" className="block text-sm font-medium text-gray-700 mb-2">
                      Estado
                    </label>
                    <select
                      id="estado"
                      name="estado"
                      value={formData.estado}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="">Selecione</option>
                      {estados.map(estado => (
                        <option key={estado} value={estado}>{estado}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Informações Profissionais */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informações Profissionais
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="cargo" className="block text-sm font-medium text-gray-700 mb-2">
                    Cargo/Área de Interesse
                  </label>
                  <input
                    id="cargo"
                    name="cargo"
                    type="text"
                    value={formData.cargo}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Ex: Desenvolvedor Full Stack, Designer UX/UI"
                  />
                </div>

                <div>
                  <label htmlFor="resumo" className="block text-sm font-medium text-gray-700 mb-2">
                    Resumo Profissional
                  </label>
                  <textarea
                    id="resumo"
                    name="resumo"
                    rows={4}
                    value={formData.resumo}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Conte um pouco sobre sua experiência e objetivos profissionais..."
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Este resumo será exibido para as empresas que visualizarem seu perfil
                  </p>
                </div>
              </div>
            </div>

            {/* Segurança */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2 text-primary-600" />
                Senha de Acesso
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-2">
                    Senha *
                  </label>
                  <input
                    id="senha"
                    name="senha"
                    type="password"
                    required
                    value={formData.senha}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>

                <div>
                  <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700 mb-2">
                    Confirmar Senha *
                  </label>
                  <input
                    id="confirmarSenha"
                    name="confirmarSenha"
                    type="password"
                    required
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Digite a senha novamente"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="btn-primary w-full text-lg"
              >
                Criar Conta
              </button>
            </div>

            <p className="text-xs text-center text-gray-500">
              Ao criar uma conta, você concorda com nossos{' '}
              <a href="#" className="text-primary-600 hover:text-primary-500">Termos de Uso</a>
              {' '}e{' '}
              <a href="#" className="text-primary-600 hover:text-primary-500">Política de Privacidade</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
