import React, { useState } from 'react';
import { X, Store, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SaquaOnLogo } from './Logo';

interface MerchantModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export const MerchantModal: React.FC<MerchantModalProps> = ({
  isOpen,
  onClose,
  defaultPlan = 'Saqua Pro Destaque',
}) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [beachLocation, setBeachLocation] = useState('Praia de Itaúna');
  const [category, setCategory] = useState('Quiosque');
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#004F8A] text-white p-5 sm:p-6 relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <SaquaOnLogo variant="symbol" size="sm" inverted />
            <span className="text-[11px] font-bold tracking-widest text-[#4FA8D8] uppercase">
              Credenciamento Oficial de Comércio
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-display leading-snug">
            Cadastre Seu Estabelecimento no SAQUA ON
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Conecte seu quiosque, barraca, escola de surf ou pousada a milhares de turistas em Saquarema.
          </p>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 stroke-[2.5]" />
              </div>

              <h4 className="text-xl font-bold text-slate-800 mb-2">Solicitação Recebida com Sucesso!</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto mb-6">
                Parabéns, <strong>{contactName || 'Parceiro'}</strong>! Nossa equipe comercial de Saquarema entrará em
                contato pelo WhatsApp <strong>{phone || 'informado'}</strong> em até 24h úteis para ativar seu perfil no
                plano <strong>{selectedPlan}</strong>.
              </p>

              <div className="bg-[#FAF5EE] p-4 rounded-xl border border-[#004F8A]/10 text-left text-xs text-slate-700 space-y-1.5 mb-6">
                <p>
                  ✓ <strong>Comércio:</strong> {businessName}
                </p>
                <p>
                  ✓ <strong>Praia:</strong> {beachLocation} ({category})
                </p>
                <p>
                  ✓ <strong>Benefício:</strong> Cardápio digital e botão de WhatsApp direto ativados.
                </p>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full bg-[#004F8A] hover:bg-[#003866] text-white font-bold text-sm py-3 rounded-xl transition-colors cursor-pointer"
              >
                Concluir e Voltar à Navegação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Estabelecimento / Ponto Comercial *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Quiosque Onda Boa, Pousada Mar Azul..."
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#004F8A]/30 focus:border-[#004F8A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#004F8A]/30 focus:border-[#004F8A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(22) 99999-9999"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#004F8A]/30 focus:border-[#004F8A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Categoria</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#004F8A]/30 focus:border-[#004F8A]"
                  >
                    <option value="Quiosque">Quiosque de Praia</option>
                    <option value="Restaurante">Restaurante / Bar</option>
                    <option value="Escola de Surf">Escola de Surf / Aluguel</option>
                    <option value="Pousada">Pousada / Hotel</option>
                    <option value="Ambulante">Ambulante Credenciado</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Praia de Atuação</label>
                  <select
                    value={beachLocation}
                    onChange={(e) => setBeachLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#004F8A]/30 focus:border-[#004F8A]"
                  >
                    <option value="Praia de Itaúna">Praia de Itaúna (WSL)</option>
                    <option value="Praia da Vila">Praia da Vila</option>
                    <option value="Praia da Barrinha">Praia da Barrinha</option>
                    <option value="Praia de Jaconé">Praia de Jaconé</option>
                    <option value="Lagoa de Saquarema / Prainha">Lagoa de Saquarema & Prainha</option>
                    <option value="Outra região de Saquarema">Outra região de Saquarema</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Plano Escolhido</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { name: 'Onda Livre', price: 'Grátis' },
                    { name: 'Saqua Pro Destaque', price: 'R$ 49/mês' },
                    { name: 'Saqua Master WSL', price: 'R$ 99/mês' },
                  ].map((p) => {
                    const isSelected = selectedPlan === p.name;
                    return (
                      <button
                        key={p.name}
                        type="button"
                        onClick={() => setSelectedPlan(p.name)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#004F8A] text-white border-[#004F8A] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span className="block text-xs font-bold truncate">{p.name}</span>
                        <span className={`text-[11px] ${isSelected ? 'text-[#4FA8D8]' : 'text-slate-500'}`}>
                          {p.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Em conformidade com a LGPD e regulamentação turística de Saquarema.</span>
              </p>

              <button
                type="submit"
                className="w-full bg-[#004F8A] hover:bg-[#003866] text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Enviar Cadastro para Ativação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
