import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { dialogueFlashcards } from '../data/dialogueFlashcards';

export default function DialogueFlashcardLesson() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCard = dialogueFlashcards[currentIndex];

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  const nextCard = () => {
    if (currentIndex < dialogueFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="w-full max-w-2xl h-96 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full h-full bg-white p-8 rounded-3xl shadow-lg border border-stone-200 flex flex-col justify-center items-center text-center"
          >
            <div className={`mb-4 px-4 py-1 rounded-full text-sm font-semibold ${currentCard.speaker === 'Xiaoming' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
              {currentCard.speaker === 'Xiaoming' ? '小明 (Xiaoming)' : '小美 (Xiaomei)'}
            </div>
            <p className="text-4xl font-bold mb-4">{currentCard.chinese}</p>
            <p className="text-xl text-stone-500 mb-2">{currentCard.pinyin}</p>
            <p className="text-lg text-stone-700 mb-8">{currentCard.english}</p>
            <button 
              onClick={() => speak(currentCard.chinese)}
              className="p-4 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
            >
              <Volume2 size={28} />
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={prevCard}
          disabled={currentIndex === 0}
          className="p-3 bg-stone-200 rounded-full disabled:opacity-50"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-lg font-medium">
          {currentIndex + 1} / {dialogueFlashcards.length}
        </span>
        <button 
          onClick={nextCard}
          disabled={currentIndex === dialogueFlashcards.length - 1}
          className="p-3 bg-stone-200 rounded-full disabled:opacity-50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
