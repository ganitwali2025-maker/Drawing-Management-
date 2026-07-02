import React, { useState } from 'react';
import { PaymentItem } from '../types';
import { CreditCard, ShieldCheck, CheckCircle, Download, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface PaymentsTabProps {
  payments: PaymentItem[];
  onUpgradeSuccess: () => void;
  isProUser: boolean;
}

export const PaymentsTab: React.FC<PaymentsTabProps> = ({ payments, onUpgradeSuccess, isProUser }) => {
  const [selectedPlan, setSelectedPlan] = useState<'free' | 'pro'>('pro');
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Credit card form states
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCVC] = useState('');

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'SKILLSET3D') {
      setPromoApplied(true);
    }
  };

  const handleUpgrade = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSuccessMessage(true);
      onUpgradeSuccess();
    }, 1500);
  };

  const getPrice = () => {
    if (selectedPlan === 'free') return 0;
    return promoApplied ? 39.00 : 49.00;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-display font-bold text-gray-900">Billing & Subscriptions</h2>
        <p className="text-sm text-gray-500 mt-1">Manage active workspace tiers, download transactional invoices, and update billing details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Plan Upgrade Selection */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 font-display flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-600" /> Subscription Plans
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Free Plan Card */}
              <div 
                onClick={() => setSelectedPlan('free')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  selectedPlan === 'free' 
                    ? 'border-indigo-500 ring-2 ring-indigo-50/70 bg-indigo-50/20' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-gray-700">Basic Tier</span>
                  {selectedPlan === 'free' && <CheckCircle className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-3 font-display">$0 <span className="text-xs text-gray-400 font-normal">/ month</span></p>
                <p className="text-xs text-gray-400 mt-2">Access up to 3 core books, study plan trackers, and standard public forums.</p>
              </div>

              {/* Pro Plan Card */}
              <div 
                onClick={() => setSelectedPlan('pro')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden ${
                  selectedPlan === 'pro' 
                    ? 'border-indigo-500 ring-2 ring-indigo-50/70 bg-indigo-50/20' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <span className="absolute top-0 right-0 bg-gradient-to-l from-violet-600 to-indigo-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                  Popular
                </span>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-gray-800">Pro Masterclass</span>
                  {selectedPlan === 'pro' && <CheckCircle className="w-4 h-4 text-indigo-600" />}
                </div>
                <p className="text-2xl font-bold text-gray-900 mt-3 font-display">
                  ${getPrice()} <span className="text-xs text-gray-400 font-normal">/ month</span>
                </p>
                <p className="text-xs text-gray-500 mt-2">Unlimited books, complete interactive 3D SVG catalogs, live class streams, and detailed report metrics.</p>
              </div>
            </div>

            {/* Billing details form */}
            {selectedPlan === 'pro' && !isProUser && (
              <form onSubmit={handleUpgrade} className="mt-6 border-t border-gray-50 pt-6 space-y-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-gray-400" /> Enter Billing Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-3">
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Card Number</label>
                    <input 
                      type="text" 
                      placeholder="4242 4242 4242 4242"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">CVC Code</label>
                    <input 
                      type="password" 
                      placeholder="***"
                      maxLength={3}
                      value={cardCvc}
                      onChange={(e) => setCardCVC(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">Promo Code</label>
                    <div className="flex gap-1.5">
                      <input 
                        type="text" 
                        placeholder="SKILLSET3D"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-2 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 uppercase"
                      />
                      <button 
                        type="button"
                        onClick={handleApplyPromo}
                        className="px-2.5 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl text-[10px] font-bold text-gray-700 transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>

                {promoApplied && (
                  <p className="text-[10px] text-emerald-600 font-bold">✓ Coupon code SKILLSET3D applied! You save $10.00/mo!</p>
                )}

                {successMessage ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl flex items-center gap-2.5 text-xs font-semibold"
                  >
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span>Fantastic! Your upgrade is active. Thank you for supporting SkillSet.</span>
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-bold rounded-xl text-xs transition-all shadow-md active:scale-95 disabled:opacity-50"
                  >
                    {isProcessing ? 'Validating credentials...' : `Subscribe for $${getPrice()}.00/mo`}
                  </button>
                )}
              </form>
            )}

            {isProUser && (
              <div className="mt-6 border-t border-gray-50 pt-6 p-4 bg-indigo-50/40 rounded-2xl border border-indigo-100 text-indigo-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  <div>
                    <h4 className="font-bold">Pro Account Status: Active</h4>
                    <p className="text-[10px] text-indigo-500 mt-0.5">Next billing date is July 15, 2026</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-white border border-indigo-200 text-indigo-700 rounded-full font-bold uppercase text-[9px] tracking-wider shadow-sm">
                  Pro Active
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Transaction List */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 font-display flex items-center gap-1.5">
            <TrendingUp className="w-4.5 h-4.5 text-indigo-600" /> Invoices & History
          </h3>

          <div className="space-y-3.5">
            {payments.map((pay) => (
              <div key={pay.id} className="flex justify-between items-center pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                <div>
                  <h4 className="text-xs font-bold text-gray-800 truncate max-w-[140px]">{pay.description}</h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-gray-400 font-bold">{pay.invoiceId}</span>
                    <span className="h-1 w-1 bg-gray-300 rounded-full" />
                    <span className="text-[9px] text-gray-400">{pay.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-gray-900">${pay.amount.toFixed(2)}</span>
                  <button className="p-1.5 rounded-lg border border-gray-100 hover:bg-gray-50 text-gray-500 transition-colors">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
