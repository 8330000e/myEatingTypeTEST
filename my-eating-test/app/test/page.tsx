"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question, EatingType } from '@/types';

const QUESTIONS: Question[] = [
  { id: 1, type: "fog", text: "식사를 할 때 TV나 스마트폰을 보느라 무엇을 먹었는지 기억이 잘 안 날 때가 많다." },
  { id: 2, type: "fuel", text: "식사 메뉴를 고를 때 맛보다는 영양 성분이나 칼로리를 먼저 따진다." },
  { id: 3, type: "emotional", text: "기분이 우울하거나 스트레스를 받으면 특정 음식이 강렬하게 당긴다." },
  { id: 4, type: "intuitive", text: "배가 부르다는 느낌이 들면 맛있는 음식이 남아있어도 식사를 멈춘다." },
  { id: 5, type: "fog", text: "배가 고프지 않아도 습관적으로 간식을 찾거나 냉장고를 열어본다." },
  { id: 6, type: "fuel", text: "음식은 즐거움보다 하루를 버티기 위한 에너지원(연료)에 가깝다고 생각한다." },
  { id: 7, type: "emotional", text: "나에게 보상을 주고 싶을 때 '맛있는 음식을 먹는 것'이 가장 먼저 떠오른다." },
  { id: 8, type: "intuitive", text: "배고픔 신호가 확실히 오기 전까지는 굳이 식사 시간에 연연하지 않는다." },
  { id: 9, type: "fog", text: "무언가에 집중하면서 무의식적으로 음식을 집어 먹는 경우가 잦다." },
  { id: 10, type: "fuel", text: "바쁠 때는 맛보다는 간편하게 한 끼를 때울 수 있는 효율적인 식사를 선호한다." },
  { id: 11, type: "emotional", text: "일이 잘 풀리지 않은 날에는 자극적인 음식을 먹어야 스트레스가 풀린다." },
  { id: 12, type: "intuitive", text: "나는 내 몸이 지금 어떤 영양소나 음식을 원하는지 잘 알고 있다." },
];

export default function TestPage() {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [scores, setScores] = useState<Record<EatingType, number>>({
    fuel: 0, intuitive: 0, emotional: 0, fog: 0
  });

  const handleAnswer = (points: number) => {
    const currentType = QUESTIONS[step].type;
    const nextScores = { ...scores, [currentType]: scores[currentType] + points };

    if (step < QUESTIONS.length - 1) {
      setScores(nextScores);
      setStep(step + 1);
    } else {
      const winner = Object.keys(nextScores).reduce((a, b) => 
        nextScores[a as EatingType] > nextScores[b as EatingType] ? a : b
      ) as EatingType;
      router.push(`/result?type=${winner}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-emerald-50/50">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl">
        {/* Progress Bar */}
        <div className="mb-8 h-2 w-full rounded-full bg-gray-100">
          <div 
            className="h-2 rounded-full bg-emerald-500 transition-all duration-300" 
            style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>

        <h2 className="mb-10 text-center text-2xl font-bold text-gray-800 leading-tight">
          {QUESTIONS[step].text}
        </h2>

        <div className="flex flex-col gap-3">
          {[
            { label: "매우 그렇다", pts: 5 },
            { label: "그렇다", pts: 4 },
            { label: "보통이다", pts: 3 },
            { label: "아니다", pts: 2 },
            { label: "전혀 아니다", pts: 1 },
          ].map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleAnswer(opt.pts)}
              className="w-full rounded-2xl border-2 border-gray-50 py-4 px-6 text-left font-medium text-gray-700 transition-all hover:border-emerald-200 hover:bg-emerald-50 active:scale-95"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}