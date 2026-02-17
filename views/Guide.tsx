import React, { useState } from 'react';
import { DATA } from '../constants';
import { Header } from '../components/Header';
import { Tag, AlertCircle, ShoppingBag, ChevronDown, ChevronUp, Star } from 'lucide-react';
import { Language } from '../types';

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Guide: React.FC<Props> = ({ language, setLanguage }) => {
  const { guides } = DATA[language]; // guides is now SouvenirGuide[]
  const [activeRegionId, setActiveRegionId] = useState<'HK' | 'MO' | 'CN'>('HK');
  const [expandedItemId, setExpandedItemId] = useState<string | null>(null);

  const activeGuide = guides.find(g => g.id === activeRegionId) || guides[1];

  const toggleItem = (id: string) => {
    setExpandedItemId(prev => prev === id ? null : id);
  };

  return (
    <div className="min-h-screen pb-24 bg-muji-bg">
      <Header 
        title={DATA[language].nav.GUIDE} 
        subtitle={language === 'en' ? "Shopping & Tax" : "必買伴手禮 & 退稅"} 
        language={language}
        setLanguage={setLanguage}
      />

      {/* Region Selector */}
      <div className="sticky top-[72px] z-20 bg-muji-bg/95 backdrop-blur-sm px-4 py-3 border-b border-muji-border">
         <div className="flex bg-white rounded-lg p-1 shadow-sm border border-muji-border">
           {guides.map((g) => (
             <button
               key={g.id}
               onClick={() => {
                 setActiveRegionId(g.id);
                 setExpandedItemId(null); // Close expanded items when switching region
               }}
               className={`flex-1 py-1.5 text-xs font-bold rounded-md transition-all ${
                 activeRegionId === g.id 
                 ? 'bg-muji-accent text-white shadow-sm' 
                 : 'text-muji-muted hover:bg-stone-50'
               }`}
             >
               {g.name}
             </button>
           ))}
         </div>
      </div>

      <div className="px-4 py-4 space-y-6 animate-fadeIn">
        
        {/* Souvenir List */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-muji-accent">
             <ShoppingBag size={18} />
             <h3 className="font-serif font-bold text-sm">
               {language === 'en' ? 'MUST BUY' : '精選伴手禮'}
             </h3>
          </div>
          <div className="grid gap-3">
            {activeGuide.souvenirs.map((item) => {
              const isExpanded = expandedItemId === item.id;
              
              return (
                <div 
                  key={item.id} 
                  onClick={() => toggleItem(item.id)}
                  className={`bg-white rounded-xl border transition-all cursor-pointer overflow-hidden ${
                    isExpanded 
                    ? 'border-muji-accent shadow-md ring-1 ring-muji-accent/10' 
                    : 'border-muji-border/50 shadow-sm hover:border-muji-accent/50'
                  }`}
                >
                   <div className="p-4">
                     <div className="flex justify-between items-start">
                       <div>
                         <h4 className={`font-bold text-base transition-colors ${isExpanded ? 'text-muji-accent' : 'text-muji-text'}`}>
                           {item.name}
                         </h4>
                         {item.tags && (
                           <div className="flex gap-1 mt-1">
                             {item.tags.map(tag => (
                               <span key={tag} className="text-[10px] bg-stone-100 text-muji-muted px-1.5 py-0.5 rounded">
                                 {tag}
                               </span>
                             ))}
                           </div>
                         )}
                       </div>
                       {isExpanded ? <ChevronUp size={18} className="text-muji-muted" /> : <ChevronDown size={18} className="text-muji-muted" />}
                     </div>
                     
                     <p className="text-sm text-muji-muted mt-2 leading-relaxed">
                       {item.description}
                     </p>

                     {/* Expanded Content */}
                     <div 
                        className={`transition-all duration-300 ease-in-out ${
                          isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}
                     >
                       <div className="pt-3 border-t border-dashed border-muji-border/50 space-y-3">
                         
                         {/* Image Section */}
                         {item.imageUrl && (
                           <div className="rounded-lg overflow-hidden shadow-sm border border-muji-border/50 mb-3">
                             <img 
                               src={item.imageUrl} 
                               alt={item.name} 
                               className="w-full h-40 object-cover"
                             />
                           </div>
                         )}

                         {item.mustBuy && (
                           <div>
                             <h5 className="flex items-center gap-1.5 text-xs font-bold text-muji-text mb-2">
                               <Star size={12} className="text-orange-400 fill-orange-400" />
                               {language === 'en' ? 'Recommended Items' : '必買推薦'}
                             </h5>
                             <ul className="space-y-1.5">
                               {item.mustBuy.map((prod, idx) => (
                                 <li key={idx} className="flex items-start gap-2 text-sm text-muji-text bg-muji-bg px-2 py-1.5 rounded-md border border-muji-border/30">
                                   <span className="text-muji-accent font-bold">•</span>
                                   {prod}
                                 </li>
                               ))}
                             </ul>
                           </div>
                         )}
                       </div>
                     </div>
                   </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tax Refund Info */}
        <div className="bg-white rounded-xl overflow-hidden border border-muji-border shadow-sm">
           <div className="bg-stone-100 px-4 py-3 border-b border-stone-200 flex items-center gap-2">
             <AlertCircle size={16} className="text-muji-accent" />
             <h3 className="font-bold text-muji-text text-sm">{activeGuide.taxInfo.title}</h3>
           </div>
           <div className="p-5">
             <p className="text-sm text-muji-text mb-4 leading-relaxed font-medium">
               {activeGuide.taxInfo.content}
             </p>
             
             {activeGuide.taxInfo.steps && (
               <div className="space-y-3">
                 {activeGuide.taxInfo.steps.map((step, i) => (
                   <div key={i} className="flex gap-3 text-sm text-muji-muted">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-muji-bg border border-muji-border flex items-center justify-center text-[10px] font-bold text-muji-accent">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                   </div>
                 ))}
               </div>
             )}
           </div>
        </div>

      </div>
    </div>
  );
};
