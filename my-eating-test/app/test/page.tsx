"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// 1. 12가지 정밀 분석 질문 데이터
const QUESTIONS = [
  { id: 1, q: "배가 고프지 않아도 습관적으로 입이 심심한가요?", options: [{ text: "거의 매일 그렇다", score: { fog: 3 } }, { text: "스트레스 받을 때 가끔 그렇다", score: { emotional: 3 } }, { text: "허기를 느낄 때만 먹는다", score: { intuitive: 3 } }, { text: "계획에 맞춰 먹는다", score: { fuel: 3 } }] },
  { id: 2, q: "식사를 할 때 주로 어떤 환경에서 드시나요?", options: [{ text: "폰이나 TV를 보며 먹는다", score: { fog: 3 } }, { text: "음식의 맛과 향에 집중한다", score: { intuitive: 3 } }, { text: "정해진 장소에서 먹는다", score: { fuel: 3 } }, { text: "편안한 분위기에서 즐긴다", score: { emotional: 2 } }] },
  { id: 3, q: "기분이 우울할 때 가장 먼저 드는 생각은?", options: [{ text: "맛있는 걸로 풀고 싶다", score: { emotional: 3 } }, { text: "아무거나 대충 때우고 싶다", score: { fog: 2 } }, { text: "건강하게 챙겨 먹어야지", score: { fuel: 3 } }, { text: "내 몸의 상태를 살핀다", score: { intuitive: 3 } }] },
  { id: 4, q: "음식을 고를 때 가장 중요한 기준은?", options: [{ text: "칼로리와 단백질 등 영양가", score: { fuel: 3 } }, { text: "지금 내 몸이 원하는 것", score: { intuitive: 3 } }, { text: "기분 좋아지는 힐링 푸드", score: { emotional: 3 } }, { text: "가장 빠르고 간편한 것", score: { fog: 3 } }] },
  { id: 5, q: "배가 어느 정도 차면 어떻게 하시나요?", options: [{ text: "즉시 식사를 멈춘다", score: { intuitive: 3 } }, { text: "앞에 있으면 다 먹는다", score: { fog: 3 } }, { text: "기분 좋을 때까지 계속 먹는다", score: { emotional: 3 } }, { text: "계획된 양은 다 먹는다", score: { fuel: 3 } }] },
  { id: 6, q: "마트에서 간식을 살 때 당신의 모습은?", options: [{ text: "무의식적으로 담고 있다", score: { fog: 3 } }, { text: "리스트에 있는 것만 산다", score: { fuel: 3 } }, { text: "보상용 디저트를 고른다", score: { emotional: 3 } }, { text: "신선한 재료를 고른다", score: { intuitive: 3 } }] },
  { id: 7, q: "주변에 음식이 있으면 배가 안 고파도 손이 가나요?", options: [{ text: "눈에 보이면 무조건 먹는다", score: { fog: 3 } }, { text: "배 안 고프면 절대 안 먹는다", score: { intuitive: 3 } }, { text: "영양에 도움 되면 먹는다", score: { fuel: 3 } }, { text: "허전할 때 손이 간다", score: { emotional: 3 } }] },
  { id: 8, q: "다이어트에 대한 당신의 생각은?", options: [{ text: "식단 기록은 필수다", score: { fuel: 3 } }, { text: "내 몸의 소리에 집중한다", score: { intuitive: 3 } }, { text: "스트레스 받으면 무너진다", score: { emotional: 3 } }, { text: "깊게 생각 안 하고 먹는다", score: { fog: 3 } }] },
  { id: 9, q: "나의 식사 속도는 어떤 편인가요?", options: [{ text: "기억 안 날 정도로 빠르다", score: { fog: 3 } }, { text: "정해진 시간 내에 먹는다", score: { fuel: 3 } }, { text: "충분히 음미하며 천천히 먹는다", score: { intuitive: 3 } }, { text: "기분에 따라 천차만별이다", score: { emotional: 2 } }] },
  { id: 10, q: "식사 후 주로 느껴지는 감정은?", options: [{ text: "안도감과 든든함", score: { fuel: 3 } }, { text: "후회되거나 더부룩함", score: { emotional: 2, fog: 2 } }, { text: "깔끔하고 기분 좋은 에너지", score: { intuitive: 3 } }, { text: "무엇을 먹었는지 잘 모름", score: { fog: 3 } }] },
  { id: 11, q: "남이 음식을 권할 때 어떻게 반응하나요?", options: [{ text: "성의를 봐서 그냥 먹는다", score: { fog: 2 } }, { text: "계획에 없으면 거절한다", score: { fuel: 3 } }, { text: "배고픔을 체크하고 정한다", score: { intuitive: 3 } }, { text: "맛있어 보이면 먹는다", score: { emotional: 3 } }] },
  { id: 12, q: "당신에게 음식은 어떤 의미인가요?", options: [{ text: "생존을 위한 효율적 연료", score: { fuel: 3 } }, { text: "내 몸을 조절해주는 친구", score: { intuitive: 3 } }, { text: "지친 마음을 달래는 위로", score: { emotional: 3 } }, { text: "습관적으로 찾게 되는 것", score: { fog: 3 } }] },
];

export default function TestPage() {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ fuel: 0, intuitive: 0, emotional: 0, fog: 0 });
  const router = useRouter();

  const handleAnswer = (score: any) => {
    const newScores = { ...scores };
    Object.keys(score).forEach((key) => {
      newScores[key as keyof typeof scores] += score[key];
    });
    setScores(newScores);

    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // 가장 점수가 높은 유형 결정
      const resultType = Object.keys(newScores).reduce((a, b) => 
        newScores[a as keyof typeof scores] > newScores[b as keyof typeof scores] ? a : b
      );
      router.push(`/result?type=${resultType}`);
    }
  };

  const progress = ((step + 1) / QUESTIONS.length) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-12">
      {/* 상단 프로그레스 바 */}
      <div className="max-w-md mx-auto w-full mb-12">
        <div className="flex justify-between items-end mb-3 font-black">
          <span className="text-emerald-600 text-2xl">{step + 1} <span className="text-slate-200 text-lg">/ 12</span></span>
          <span className="text-slate-400 text-xs">식습관 분석 중...</span>
        </div>
        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 질문 카드 */}
      <div className="max-w-md mx-auto w-full flex-grow flex flex-col justify-center">
        <h2 className="text-[26px] font-black text-slate-900 mb-10 leading-tight break-keep">
          {QUESTIONS[step].q}
        </h2>

        {/* 선택지 버튼 */}
        <div className="space-y-4">
          {QUESTIONS[step].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option.score)}
              className="w-full p-5 text-left bg-white border-2 border-slate-100 rounded-2xl text-slate-700 font-bold text-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all active:scale-[0.97] shadow-sm shadow-slate-100"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>

      {/* 하단 안내 */}
      <div className="max-w-md mx-auto w-full mt-12 text-center">
        <p className="text-slate-300 text-xs font-bold tracking-widest uppercase">
          Thinking about your eating habits
        </p>
      </div>
    </div>
  );
}