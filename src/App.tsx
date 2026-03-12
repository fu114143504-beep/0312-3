/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BookOpen, MessageSquare } from 'lucide-react';
import LivePractice from './components/LivePractice';
import Flashcard from './components/Flashcard';
import { flashcards } from './data/flashcards';

export default function App() {
  const [activeTab, setActiveTab] = useState<'learn' | 'practice'>('learn');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <header className="border-b border-stone-200 bg-white p-4">
        <h1 className="text-2xl font-bold tracking-tight">委婉語教室</h1>
      </header>
      
      <nav className="flex space-x-4 p-4">
        <button 
          onClick={() => setActiveTab('learn')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === 'learn' ? 'bg-stone-900 text-white' : 'bg-stone-200'}`}
        >
          <BookOpen size={18} /> 學習
        </button>
        <button 
          onClick={() => setActiveTab('practice')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${activeTab === 'practice' ? 'bg-stone-900 text-white' : 'bg-stone-200'}`}
        >
          <MessageSquare size={18} /> 練習
        </button>
      </nav>

      <main className="p-4">
        {activeTab === 'learn' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flashcards.map((card) => (
              <Flashcard key={card.id} data={card} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">語音練習</h2>
            <p>點擊下方按鈕開始與 AI 進行委婉語練習對話。</p>
            <LivePractice />
          </div>
        )}
      </main>
    </div>
  );
}
