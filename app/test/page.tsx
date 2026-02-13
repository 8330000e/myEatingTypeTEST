"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "@/data/questions";
import { calculateResult } from "@/utils/calculate"; // 이전에 만든 계산 함수

export default function TestPage() {
  const [step, setStep] = useState(0);
  // 점수(scores) 대신 선택한 답변의 인덱스를 숫자로 저장합니다.
  const [answers, setAnswers] = useState<number[]>([]);
  const router = useRouter();

  const handleAnswer = (answerIndex: number) => {
    // 1. 현재 선택한 답변 번호를 배열에 추가
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    // 2. 다음 질문으로 이동하거나 결과 페이지로 이동
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      // 모든 질문이 끝났을 때 계산 함수 실행
      const { psy, beh } = calculateResult(newAnswers);
      // 결과 페이지로 psy와 beh 값을 쿼리로 전달
      router.push(`/result?psy=${psy}&beh=${beh}`);
    }
  };

  const progress = ((step + 1) / QUESTIONS.length) * 100;
  const currentQuestion = QUESTIONS[step];

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-12">
      {/* 상단 프로그레스 바 */}
      <div className="max-w-md mx-auto w-full mb-12">
        <div className="flex justify-between items-end mb-3 font-black">
          <span className="text-emerald-600 text-2xl">
            {step + 1} <span className="text-slate-200 text-lg">/ 12</span>
          </span>
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
        {/* sub 텍스트 추가 */}
        <p className="text-emerald-500 font-bold text-sm mb-2">{currentQuestion.sub}</p>
        <h2 className="text-[26px] font-black text-slate-900 mb-10 leading-tight break-keep">
          {currentQuestion.question}
        </h2>

        {/* 선택지 버튼 */}
        <div className="space-y-4">
          {currentQuestion.answers.map((answerText, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)} // 몇 번째 버튼인지 idx를 넘김
              className="w-full p-5 text-left bg-white border-2 border-slate-100 rounded-2xl text-slate-700 font-bold text-lg hover:border-emerald-500 hover:bg-emerald-50 transition-all active:scale-[0.97] shadow-sm shadow-slate-100"
            >
              {answerText}
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