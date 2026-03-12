import { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCcw, PlayCircle } from 'lucide-react';

const dialogue = [
  { speaker: 'Xiaoming', text: '聽說這部電影很有趣，我們晚上一起去看，好不好？' },
  { speaker: 'Xiaomei', text: '但是時間有一點晚，我跟我父母討論討論。' },
  { speaker: 'Xiaoming', text: '那你打算什麼時候跟我一起去？' },
  { speaker: 'Xiaomei', text: '可能這個週末，但是我明天不會來學校，等你決定了，再給我打電話。' },
  { speaker: 'Xiaomei', text: '不好意思，我媽媽打給我，他好像不舒服，我要去一下醫院。' },
  { speaker: 'Xiaoming', text: '那你小心，搭車去比較好，下星期再一起去看電影吧。' },
];

export default function LessonCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative w-full max-w-2xl h-[500px] perspective-1000">
        <motion.div
          className="w-full h-full relative preserve-3d cursor-pointer"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-8 border border-stone-100 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-stone-800">課文對話</h2>
              <RotateCcw className="text-stone-400" size={20} />
            </div>
            <div className="space-y-6">
              {dialogue.map((line, index) => (
                <div key={index} className="flex gap-4">
                  <span className={`font-bold w-24 ${line.speaker === 'Xiaoming' ? 'text-blue-600' : 'text-emerald-600'}`}>
                    {line.speaker}:
                  </span>
                  <p className="text-lg text-stone-700 flex-1">{line.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-xl p-8 border border-stone-100 rotate-y-180 flex flex-col items-center justify-center">
            <div className="flex justify-between items-center w-full mb-6">
              <h2 className="text-2xl font-bold text-stone-800">教學影片</h2>
              <RotateCcw className="text-stone-400" size={20} />
            </div>
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-stone-900">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/lb9Bnupe8_4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <p className="mt-4 text-stone-500 flex items-center gap-2">
              <PlayCircle size={16} /> 點擊影片播放
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
