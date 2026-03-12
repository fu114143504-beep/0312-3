import { useState } from 'react';
import { motion } from 'motion/react';
import { FlipHorizontal } from 'lucide-react';

const dialogue = [
  { speaker: 'Xiaoming', text: '聽說這部電影很有趣，我們晚上一起去看，好不好？' },
  { speaker: 'Xiaomei', text: '但是時間有一點晚，我跟我父母討論討論。' },
  { speaker: 'Xiaoming', text: '那你打算什麼時候跟我一起去？' },
  { speaker: 'Xiaomei', text: '可能這個週末，但是我明天不會來學校，等你決定了，再給我打電話。' },
  { speaker: 'Xiaomei', text: '不好意思，我媽媽打給我，他好像不舒服，我要去一下醫院。' },
  { speaker: 'Xiaoming', text: '那你小心，搭車去比較好，下星期再一起去看電影吧。' },
];

export default function ChineseLessonCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] p-4">
      <motion.div
        className="relative w-full max-w-2xl h-[500px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-8 border border-stone-200"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-2xl font-bold mb-6 text-stone-800 border-b pb-4">中文對話練習</h2>
          <div className="space-y-4 text-lg">
            {dialogue.map((line, index) => (
              <p key={index} className="leading-relaxed">
                <span className="font-bold text-emerald-700">{line.speaker}: </span>
                <span className="text-stone-700">{line.text}</span>
              </p>
            ))}
          </div>
          <div className="absolute bottom-4 right-4 text-stone-400 flex items-center gap-2">
            <FlipHorizontal size={20} />
            <span>點擊翻轉</span>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full bg-stone-900 rounded-2xl shadow-xl p-4"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <iframe
            className="w-full h-full rounded-xl"
            src="https://www.youtube.com/embed/lb9Bnupe8_4"
            title="Chinese Learning Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="no-referrer"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
