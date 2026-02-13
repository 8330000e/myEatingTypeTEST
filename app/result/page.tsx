"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import KakaoShare from "@/components/KakaoShare";
import { supabase } from "@/lib/supabaseClient";
import { RESULTS } from "@/data/results";

export default function ResultPage({ searchParams }: { searchParams: { psy: string, beh: string } }) {
  // 1. 데이터 가져오기 (기본값 설정)
  const psy = searchParams.psy || "INTUITIVE";
  const beh = searchParams.beh || "CLOCK";
  const finalResult = RESULTS[psy]?.[beh] || RESULTS.INTUITIVE.CLOCK;

  const isSaved = useRef(false);

  useEffect(() => {
    const saveData = async () => {
      if (isSaved.current) return;

      const { error } = await supabase
        .from('test_results')
        .insert([{ result_type: finalResult.name }]); // 객체 전체보다 이름을 저장하는 것이 보통 더 안전합니다.

      if (error) {
        console.error("데이터 저장 실패:", error);
      } else {
        console.log("✅ 데이터 저장 성공!");
        isSaved.current = true;
      }
    };

    saveData();
  }, [finalResult]); // 의존성 배열 추가

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 pb-24">
      <div className="max-w-md mx-auto space-y-8">

        {/* 결과 보고서 카드 */}
        <section className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: finalResult.mainColor }} />
          <h2 className="text-base font-bold opacity-60 mb-1" style={{ color: finalResult.mainColor }}>
            {finalResult.psychologyType} & {finalResult.behaviorPattern}
          </h2>
          <h1 className="text-3xl font-black text-slate-900 mb-6">{finalResult.name}</h1>
          <p className="text-slate-600 leading-relaxed break-keep">{finalResult.description}</p>
        </section>

        {/* 능력치 분석 */}
        <section className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
          <h3 className="text-slate-900 font-bold mb-8 flex items-center justify-between">
            <span>📊 식습관 능력치 지표</span>
            <span className="text-[10px] text-slate-400 font-normal">문항 분석 결과</span>
          </h3>
          <div className="space-y-7">
            {Object.entries(finalResult.stats).map(([key, value]) => {
              // 한글 라벨 매핑
              const labels: Record<string, string> = {
                emotionalControl: '정서 조절력',
                regularity: '식사 규칙성',
                bodyAwareness: '신체 인지력',
                efficiency: '영양 효율성',
                mindfulness: '식사 집중도'
              };
              return (
                <div key={key} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-slate-600">{labels[key] || key}</span>
                    <span className="text-lg font-black" style={{ color: finalResult.mainColor }}>{value}%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${value}%`,
                        backgroundColor: finalResult.mainColor
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 솔루션 섹션: 처방전 */}
        <section className="rounded-3xl p-7 border border-white/50 shadow-inner" style={{ backgroundColor: finalResult.lightColor }}>
          <h3 className="font-black mb-5 flex items-center gap-2 text-lg" style={{ color: finalResult.textColor }}>
            📍 맞춤 건강 처방전
          </h3>
          <div className="space-y-6">
            {/* 처방 1: 조언 */}
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: finalResult.mainColor }}>1</div>
              <p className="text-[14px] font-semibold leading-snug opacity-90 break-keep" style={{ color: finalResult.textColor }}>
                {finalResult.advice}
              </p>
            </div>
            {/* 처방 2: 분석 */}
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: finalResult.mainColor }}>2</div>
              <p className="text-[14px] font-semibold leading-snug opacity-90 break-keep" style={{ color: finalResult.textColor }}>
                {finalResult.analysis}
              </p>
            </div>
            {/* 처방 3: 해결법 */}
            <div className="flex gap-4 items-start">
              <div className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: finalResult.mainColor }}>3</div>
              <p className="text-[14px] font-semibold leading-snug opacity-90 break-keep" style={{ color: finalResult.textColor }}>
                {finalResult.prescription}
              </p>
            </div>
          </div>
        </section>

        {/* 💌 제작자의 진심이 담긴 설문 섹션 */}
        <section className="bg-white rounded-[2rem] p-8 border-2 border-dashed border-indigo-100 relative shadow-sm">
          {/* 포인트 아이콘 */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-50 px-4 py-1">
            <span className="text-3xl">✉️</span>
          </div>

          <div className="text-center space-y-5 pt-2">
            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-800 tracking-tight">
                1/2제작자의 작은 부탁
              </h3>
              <p className="text-[13px] text-slate-500 font-medium">
                더 나은 분석을 위해 데이터와 사투 중입니다..!
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-[14px] text-slate-700 leading-relaxed font-semibold break-keep">
                테스트가 즐거우셨다면 <span className="text-indigo-600 underline decoration-2 underline-offset-4">딱 1분의 설문</span>으로 제작자를 응원해 주시겠어요?
              </p>
            </div>

            {/* 🔥 아주 두껍고 눈에 띄는 버튼 */}
            <Link
              href={`/feedback?animal=${finalResult.name}&psy=${finalResult.psychologyType}&beh=${finalResult.behaviorPattern}`}
              className="inline-flex items-center justify-center w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] text-lg font-black shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all"
            >
              설문 참여하고 응원하기
            </Link>

            <p className="text-[11px] text-slate-400 font-medium">
              보내주신 소중한 데이터는 제작 중인 입맛에 맞는 메뉴을 찾아주는 앱서비스의 중요한 데이터로 사용됩니다!
            </p>
          </div>
        </section>

        {/* 💬 카톡 공유 & 다시하기 섹션 */}
        <div className="grid grid-cols-2 gap-3 cursor-pointer">
          {/* 1. 이 부분을 컴포넌트로 교체합니다 */}
          <KakaoShare type={finalResult.name} />


          {/* 2. 다시하기 버튼 */}
          <Link
            href="/"
            className="flex items-center justify-center py-5 bg-slate-900 text-white rounded-[2rem] font-bold text-lg hover:bg-slate-800 shadow-md transition-all active:scale-95"
          >
            다시하기
          </Link>
        </div>

      </div>
    </div>
  );
}