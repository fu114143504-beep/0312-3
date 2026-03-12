import { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";
import { Mic, MicOff } from 'lucide-react';

export default function LivePractice() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const sessionRef = useRef<any>(null);

  const startSession = async () => {
    setIsConnecting(true);
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    
    try {
      const sessionPromise = ai.live.connect({
        model: "gemini-2.5-flash-native-audio-preview-09-2025",
        callbacks: {
          onopen: () => {
            setIsConnected(true);
            setIsConnecting(false);
            console.log("Connected to Live API");
          },
          onmessage: async (message: LiveServerMessage) => {
            console.log("Message received:", message);
            // Handle audio output here
          },
          onerror: (error) => {
            console.error("Live API error:", error);
            setIsConnected(false);
            setIsConnecting(false);
          },
          onclose: () => {
            setIsConnected(false);
            setIsConnecting(false);
            console.log("Disconnected from Live API");
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "你是一位委婉語老師，請用溫和、鼓勵的語氣與使用者練習委婉語對話。如果使用者說了不夠委婉的話，請引導他們換個說法。",
        },
      });
      sessionRef.current = await sessionPromise;
    } catch (error) {
      console.error("Failed to connect:", error);
      setIsConnecting(false);
    }
  };

  const stopSession = () => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
  };

  return (
    <div className="space-y-4">
      <button 
        onClick={isConnected ? stopSession : startSession}
        disabled={isConnecting}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold ${isConnected ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-emerald-600 text-white hover:bg-emerald-700'}`}
      >
        {isConnected ? <MicOff size={20} /> : <Mic size={20} />}
        {isConnecting ? '連接中...' : isConnected ? '結束對話' : '開始對話'}
      </button>
    </div>
  );
}
