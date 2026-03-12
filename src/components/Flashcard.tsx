import { useState } from 'react';
import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { FlashcardData } from '../data/flashcards';

interface FlashcardProps {
  data: FlashcardData;
  key?: string;
}

export default function Flashcard({ data }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-TW';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="w-full h-96 perspective-1000">
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-white p-6 rounded-2xl shadow-md border border-stone-200 flex flex-col justify-center items-center text-center">
          <h3 className="text-sm font-semibold text-stone-500 mb-2">{data.unit}</h3>
          <p className="text-3xl font-bold mb-2">{data.front.chinese}</p>
          <p className="text-lg text-stone-600 mb-6">{data.front.pinyin}</p>
          <button 
            onClick={(e) => { e.stopPropagation(); speak(data.front.chinese); }}
            className="p-3 bg-stone-100 rounded-full hover:bg-stone-200"
          >
            <Volume2 size={24} />
          </button>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full backface-hidden bg-stone-900 text-white p-6 rounded-2xl shadow-md flex flex-col justify-center items-center text-center rotate-y-180">
          <p className="text-xl mb-4">{data.back.english}</p>
          <p className="text-sm text-stone-400 mb-4">{data.back.context}</p>
          <iframe 
            width="100%" 
            height="150" 
            src={data.back.videoUrl} 
            title="Context Video" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
