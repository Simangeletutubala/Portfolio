import React, { useState } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, ShoppingBag, Plus, Minus, ArrowRight, RotateCcw, Trophy, Sparkles, ExternalLink, Code2 } from 'lucide-react';

interface ProjectDemoModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#0B132B]/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-heading">{project.title}</h3>
                <span className="text-xs text-sky-400 font-mono px-2 py-0.5 rounded bg-sky-950/50 border border-sky-800/40">
                  Interactive Live Demo
                </span>
              </div>
              <p className="text-xs text-slate-400">{project.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>View Source</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Demo Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {project.demoType === 'mathspark' && <MathSparkSimulator />}
          {project.demoType === 'freshbite' && <FreshBiteSimulator />}
          {project.demoType === 'fitnesstracker' && <FitnessTrackerSimulator />}

          {/* Project Architecture & Transferable Highlights */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <h4 className="font-semibold text-sky-300 mb-2 font-heading flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Architectural Decisions
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-sky-400 mt-0.5">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-slate-900/50 border border-slate-800 rounded-xl">
              <h4 className="font-semibold text-emerald-300 mb-2 font-heading flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Transferable Competencies
              </h4>
              <ul className="space-y-1.5 text-slate-400">
                {project.transferableStrengths.map((str, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-0.5">•</span>
                    <span>{str}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800/80 bg-slate-950/60 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>Built with:</span>
            <span className="text-slate-300 font-mono">{project.technologies.join(' · ')}</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- 1. MathSpark Simulator --- */
const MathSparkSimulator: React.FC = () => {
  const [numerator, setNumerator] = useState<number>(3);
  const [denominator, setDenominator] = useState<number>(4);
  const [quizAnswer, setQuizAnswer] = useState<number | ''>('');
  const [feedback, setFeedback] = useState<{ status: 'correct' | 'incorrect' | null; text: string }>({
    status: null,
    text: ''
  });
  const [streak, setStreak] = useState<number>(3);

  // Grade 4 challenge: 12 x 4
  const factorA = 12;
  const factorB = 4;
  const correctAnswer = factorA * factorB;

  const handleCheck = () => {
    if (Number(quizAnswer) === correctAnswer) {
      setFeedback({
        status: 'correct',
        text: 'Awesome work! Notice how (10 × 4) = 40 plus (2 × 4) = 8 gives 48!'
      });
      setStreak(s => s + 1);
    } else {
      setFeedback({
        status: 'incorrect',
        text: 'Try breaking it down: What is 10 × 4? And what is 2 × 4? Add them together!'
      });
    }
  };

  const handleResetQuiz = () => {
    setQuizAnswer('');
    setFeedback({ status: null, text: '' });
  };

  return (
    <div className="space-y-6">
      <div className="p-4 bg-sky-950/30 border border-sky-900/40 rounded-xl">
        <h4 className="text-sm font-semibold text-sky-200 mb-1">Visual Pedagogical Framework: Grade 4 Fractions</h4>
        <p className="text-xs text-slate-300">
          MathSpark transforms abstract division into physical spatial blocks. Adjust the fraction below to see how learners interact with concrete models before symbolic equations.
        </p>
      </div>

      {/* Visual Fraction Segmenter */}
      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Interactive Fraction Model</span>
            <div className="text-2xl font-bold text-white font-mono flex items-center gap-2 mt-1">
              <span>{numerator}</span>
              <span className="text-slate-500">/</span>
              <span>{denominator}</span>
              <span className="text-sm font-sans text-sky-400 font-normal ml-2">
                ({((numerator / denominator) * 100).toFixed(0)}% shaded)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Numerator:</span>
              <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                <button
                  onClick={() => setNumerator(Math.max(1, numerator - 1))}
                  className="p-1 hover:text-white text-slate-400 disabled:opacity-30"
                  disabled={numerator <= 1}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-white font-mono">{numerator}</span>
                <button
                  onClick={() => setNumerator(Math.min(denominator, numerator + 1))}
                  className="p-1 hover:text-white text-slate-400 disabled:opacity-30"
                  disabled={numerator >= denominator}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Denominator:</span>
              <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700">
                <button
                  onClick={() => {
                    const next = Math.max(2, denominator - 1);
                    setDenominator(next);
                    if (numerator > next) setNumerator(next);
                  }}
                  className="p-1 hover:text-white text-slate-400 disabled:opacity-30"
                  disabled={denominator <= 2}
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-2 text-white font-mono">{denominator}</span>
                <button
                  onClick={() => setDenominator(Math.min(8, denominator + 1))}
                  className="p-1 hover:text-white text-slate-400 disabled:opacity-30"
                  disabled={denominator >= 8}
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Blocks representation */}
        <div className="grid gap-2 p-3 bg-slate-950/60 rounded-lg border border-slate-800" style={{ gridTemplateColumns: `repeat(${denominator}, 1fr)` }}>
          {Array.from({ length: denominator }).map((_, index) => {
            const isFilled = index < numerator;
            return (
              <div
                key={index}
                className={`h-16 rounded-md flex flex-col items-center justify-center transition-all duration-300 font-mono text-xs font-semibold ${
                  isFilled
                    ? 'bg-sky-500 text-slate-950 shadow-md shadow-sky-500/20 scale-[1.02]'
                    : 'bg-slate-800 text-slate-500 border border-dashed border-slate-700'
                }`}
              >
                <span>1/{denominator}</span>
                <span className="text-[10px] font-normal opacity-80">{isFilled ? 'Active' : 'Empty'}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Step-by-Step Problem Solver */}
      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded font-medium">
              Grade 4 Multiplication Quest
            </span>
            <span className="text-xs text-slate-400">Decomposition Strategy</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-amber-400 font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>Streak: {streak}</span>
          </div>
        </div>

        <div className="p-4 bg-slate-950/60 rounded-lg border border-slate-800">
          <p className="text-sm text-slate-200 mb-3 font-medium">
            Solve: <span className="font-mono text-sky-400 text-base font-bold">12 × 4 = ?</span>
          </p>
          <div className="grid sm:grid-cols-2 gap-3 text-xs text-slate-400 mb-4 bg-slate-900 p-3 rounded border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 font-bold">1</span>
              <span>Tens decomposition: <strong>10 × 4 = 40</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-sky-400 font-bold">2</span>
              <span>Units decomposition: <strong>2 × 4 = 8</strong></span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              value={quizAnswer}
              onChange={(e) => setQuizAnswer(e.target.value === '' ? '' : Number(e.target.value))}
              placeholder="Your answer..."
              className="px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-sm focus:outline-none focus:border-sky-500 w-36"
            />
            <button
              onClick={handleCheck}
              disabled={quizAnswer === ''}
              className="px-4 py-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 font-medium text-xs rounded-lg transition-colors flex items-center gap-1.5"
            >
              <span>Verify Answer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleResetQuiz}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Reset"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {feedback.status && (
            <div
              className={`mt-3 p-3 rounded-lg text-xs flex items-start gap-2 ${
                feedback.status === 'correct'
                  ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40'
                  : 'bg-rose-950/40 text-rose-300 border border-rose-800/40'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{feedback.text}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* --- 2. FreshBite Simulator --- */
const FreshBiteSimulator: React.FC = () => {
  interface MenuItem {
    id: string;
    name: string;
    restaurant: string;
    price: number;
    category: string;
    prepTime: string;
  }

  const MENU: MenuItem[] = [
    { id: 'm1', name: 'Mediterranean Grain Bowl', restaurant: 'Harvest Green', price: 11.5, category: 'Healthy', prepTime: '15 min' },
    { id: 'm2', name: 'Wood-Fired Margherita Pizza', restaurant: 'Basilico Artisan', price: 14.0, category: 'Italian', prepTime: '20 min' },
    { id: 'm3', name: 'Crispy Korean Chicken Sliders', restaurant: 'Seoul Street Bistro', price: 13.5, category: 'Street Food', prepTime: '18 min' },
    { id: 'm4', name: 'Cold-Pressed Citrus Tonic', restaurant: 'Harvest Green', price: 4.5, category: 'Beverage', prepTime: '5 min' }
  ];

  const [cart, setCart] = useState<{ [id: string]: number }>({ m1: 1, m4: 2 });
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'complete'>('cart');
  const [address, setAddress] = useState('14 Park Road, Rosebank');

  const addToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const copy = { ...prev };
      if (copy[id] > 1) {
        copy[id] -= 1;
      } else {
        delete copy[id];
      }
      return copy;
    });
  };

  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = MENU.find(m => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 3.5 : 0;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal + deliveryFee + tax;

  return (
    <div className="space-y-6">
      <div className="p-4 bg-sky-950/30 border border-sky-900/40 rounded-xl">
        <h4 className="text-sm font-semibold text-sky-200 mb-1">State Architecture: Real-Time E-Commerce Cart & Ordering</h4>
        <p className="text-xs text-slate-300">
          Demonstrates synchronous cart state recalculation, item quantity mutation, delivery fee thresholds, and step-based checkout flow.
        </p>
      </div>

      {checkoutStep === 'complete' ? (
        <div className="p-8 bg-slate-900 border border-emerald-800/40 rounded-xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-white font-heading">Order #FB-8842 Confirmed!</h4>
            <p className="text-xs text-slate-400 mt-1">Delivering to {address} in ~25 minutes</p>
          </div>
          <div className="p-4 bg-slate-950/60 rounded-lg max-w-sm mx-auto text-xs text-left space-y-2 border border-slate-800">
            <div className="flex justify-between text-slate-300">
              <span>Paid Total:</span>
              <span className="font-mono font-bold text-emerald-400">${grandTotal.toFixed(2)}</span>
            </div>
            <div className="text-[11px] text-slate-500">Order dispatched via FreshBite Dispatch API</div>
          </div>
          <button
            onClick={() => {
              setCart({ m1: 1 });
              setCheckoutStep('cart');
            }}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Start New Order
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-5 gap-6">
          {/* Menu Catalog */}
          <div className="md:col-span-3 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-medium text-slate-200">Available Menu Items</span>
              <span>4 Restaurants active</span>
            </div>
            <div className="space-y-2">
              {MENU.map(item => {
                const inCartQty = cart[item.id] || 0;
                return (
                  <div
                    key={item.id}
                    className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between hover:border-slate-700 transition-colors"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{item.name}</span>
                        <span className="text-[10px] text-slate-400 px-1.5 py-0.5 rounded bg-slate-800">{item.category}</span>
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.restaurant} · <span className="font-mono text-sky-400">${item.price.toFixed(2)}</span> · {item.prepTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {inCartQty > 0 && (
                        <span className="text-xs text-sky-400 font-mono font-semibold px-2">
                          {inCartQty} in cart
                        </span>
                      )}
                      <button
                        onClick={() => addToCart(item.id)}
                        className="px-2.5 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs rounded-md transition-colors flex items-center gap-1"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cart & Checkout Panel */}
          <div className="md:col-span-2 p-4 bg-slate-900/90 border border-slate-800 rounded-xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-sm font-bold text-white flex items-center gap-2 font-heading">
                  <ShoppingBag className="w-4 h-4 text-sky-400" /> Current Basket
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {Object.values(cart).reduce((a, b) => a + b, 0)} items
                </span>
              </div>

              {/* Items in cart */}
              <div className="py-3 space-y-2 max-h-44 overflow-y-auto">
                {Object.keys(cart).length === 0 ? (
                  <p className="text-xs text-slate-500 py-4 text-center">Your basket is empty. Add delicious meals from the left!</p>
                ) : (
                  Object.entries(cart).map(([id, qty]) => {
                    const item = MENU.find(m => m.id === id);
                    if (!item) return null;
                    return (
                      <div key={id} className="flex items-center justify-between text-xs py-1">
                        <div className="truncate pr-2">
                          <p className="text-slate-200 truncate">{item.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">${(item.price * qty).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700 shrink-0">
                          <button onClick={() => removeFromCart(id)} className="p-1 hover:text-white text-slate-400">
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-white font-mono">{qty}</span>
                          <button onClick={() => addToCart(id)} className="p-1 hover:text-white text-slate-400">
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Calculations */}
            <div className="pt-3 border-t border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="font-mono text-slate-200">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Est. Delivery</span>
                <span className="font-mono text-slate-200">${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Sales Tax (8%)</span>
                <span className="font-mono text-slate-200">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-white pt-2 border-t border-slate-800">
                <span>Order Total</span>
                <span className="font-mono text-sky-400">${grandTotal.toFixed(2)}</span>
              </div>

              {checkoutStep === 'cart' ? (
                <button
                  onClick={() => setCheckoutStep('shipping')}
                  disabled={subtotal === 0}
                  className="w-full mt-3 py-2 bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Proceed to Delivery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="space-y-2 pt-2">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Delivery address..."
                    className="w-full px-2.5 py-1.5 bg-slate-950 border border-slate-700 rounded text-xs text-white"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCheckoutStep('cart')}
                      className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs rounded hover:bg-slate-700"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => setCheckoutStep('complete')}
                      className="flex-1 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs rounded transition-colors"
                    >
                      Place Order (${grandTotal.toFixed(2)})
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* --- 3. Fitness Challenge Tracker Simulator --- */
const FitnessTrackerSimulator: React.FC = () => {
  interface Challenge {
    id: string;
    title: string;
    goal: number;
    unit: string;
    current: number;
    participants: number;
    daysLeft: number;
  }

  const [activeChallenge, setActiveChallenge] = useState<Challenge>({
    id: 'c1',
    title: '30-Day Step Expedition',
    goal: 300000,
    unit: 'steps',
    current: 184500,
    participants: 48,
    daysLeft: 12
  });

  const [logInput, setLogInput] = useState<string>('8500');
  const [recentLogs, setRecentLogs] = useState<{ day: string; amount: number }[]>([
    { day: 'Today', amount: 8500 },
    { day: 'Yesterday', amount: 10200 },
    { day: '2 days ago', amount: 9400 }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { rank: 1, name: 'Simangele T. (You)', progress: 61.5, badge: 'On Track' },
    { rank: 2, name: 'Kamohelo M.', progress: 58.2, badge: 'Challenger' },
    { rank: 3, name: 'David K.', progress: 54.0, badge: 'Consistent' },
    { rank: 4, name: 'Naledi P.', progress: 49.8, badge: 'Rising' }
  ]);

  const handleLogProgress = () => {
    const val = Number(logInput);
    if (!val || val <= 0) return;
    const newCurrent = Math.min(activeChallenge.goal, activeChallenge.current + val);
    setActiveChallenge(prev => ({ ...prev, current: newCurrent }));
    setRecentLogs(prev => [{ day: 'Just now', amount: val }, ...prev.slice(0, 2)]);
    const updatedPct = Number(((newCurrent / activeChallenge.goal) * 100).toFixed(1));
    setLeaderboard(prev => [
      { ...prev[0], progress: updatedPct },
      ...prev.slice(1)
    ]);
    setLogInput('');
  };

  const percentage = Math.min(100, Math.round((activeChallenge.current / activeChallenge.goal) * 100));

  return (
    <div className="space-y-6">
      <div className="p-4 bg-sky-950/30 border border-sky-900/40 rounded-xl">
        <h4 className="text-sm font-semibold text-sky-200 mb-1">Full-Stack Data Modeling: Activity Stream & Leaderboard Computation</h4>
        <p className="text-xs text-slate-300">
          Demonstrates cumulative aggregation queries, dynamic ranking algorithms, streak calculations, and visual progress meters.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Challenge Progress Card */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Active Challenge</span>
            <span className="text-xs text-sky-400 font-mono bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
              {activeChallenge.daysLeft} days remaining
            </span>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white font-heading">{activeChallenge.title}</h4>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold font-mono text-emerald-400">
                {activeChallenge.current.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                / {activeChallenge.goal.toLocaleString()} {activeChallenge.unit}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-slate-400">
              <span>Goal Completion</span>
              <span className="font-mono text-slate-200 font-bold">{percentage}%</span>
            </div>
            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-500 to-emerald-400 transition-all duration-500 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Log Entry Form */}
          <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 space-y-2">
            <label className="text-xs text-slate-300 font-medium block">Log Activity Entry</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={logInput}
                onChange={(e) => setLogInput(e.target.value)}
                placeholder="Enter steps..."
                className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white font-mono text-xs focus:outline-none focus:border-sky-500"
              />
              <button
                onClick={handleLogProgress}
                className="px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs rounded-lg transition-colors"
              >
                Log Steps
              </button>
            </div>
          </div>

          {/* Recent Logs */}
          <div className="text-xs space-y-1">
            <span className="text-slate-500 block">Recent activity logs:</span>
            {recentLogs.map((log, i) => (
              <div key={i} className="flex justify-between text-slate-400 py-0.5 border-b border-slate-800/40 last:border-0">
                <span>{log.day}</span>
                <span className="font-mono text-slate-300">+{log.amount.toLocaleString()} steps</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Leaderboard */}
        <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-sm font-bold text-white flex items-center gap-1.5 font-heading">
              <Trophy className="w-4 h-4 text-amber-400" /> Community Leaderboard
            </span>
            <span className="text-xs text-slate-400 font-mono">{activeChallenge.participants} Challengers</span>
          </div>

          <div className="space-y-2">
            {leaderboard.map((item) => (
              <div
                key={item.rank}
                className={`p-2.5 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                  item.rank === 1
                    ? 'bg-sky-950/30 border-sky-800/60 text-white'
                    : 'bg-slate-950/40 border-slate-800/80 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[11px] ${
                    item.rank === 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.rank}
                  </span>
                  <div>
                    <span className="font-medium text-slate-100">{item.name}</span>
                    <span className="block text-[10px] text-slate-500">{item.badge}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-sky-400">{item.progress}%</span>
                  <div className="w-16 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-sky-400 rounded-full" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-500 pt-2 text-center">
            Rankings recalculate instantly upon asynchronous activity sync.
          </p>
        </div>
      </div>
    </div>
  );
};
