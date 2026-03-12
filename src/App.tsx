/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen } from 'lucide-react';
import Flashcard from './components/Flashcard';
import { flashcards } from './data/flashcards';
import DialogueFlashcardLesson from './components/DialogueFlashcardLesson';
import ChineseLessonCard from './components/ChineseLessonCard';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <header className="border-b border-stone-200 bg-white p-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <BookOpen className="text-emerald-600" size={28} />
          <h1 className="text-3xl font-bold tracking-tight">委婉語教室</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">什麼是委婉語？</h2>
          <p className="text-lg text-stone-700 max-w-3xl">
            委婉語（Euphemism）是用來代替可能引起冒犯、尷尬或不愉快詞彙的溫和說法。
            透過學習這些表達方式，您可以讓溝通變得更加圓滑與得體。
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">互動練習卡</h2>
          <ChineseLessonCard />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">對話練習單元</h2>
          <DialogueFlashcardLesson />
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">學習單元</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flashcards.map((card) => (
              <Flashcard key={card.id} data={card} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
