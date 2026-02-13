"use client";

import { useEffect, useState } from "react"; // useState, useEffect 추가
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
  const [totalParticipants, setTotalParticipants] = useState<number | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      // supabase에서 데이터 개수만 가져오기 (head: true를 쓰면 데이터를 안 가져오고 개수만 셉니다)
      const { count, error } = await supabase
        .from('test_results')
        .select('*', { count: 'exact', head: true });

      if (!error && count !== null) {
        // 기본 시작 인원(예: 1240)이 있다면 합쳐서 보여줄 수도 있습니다.
        setTotalParticipants(count);
      }
    };

    fetchCount();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center px-6 py-12">
      {/* 상단 꾸미기 요소 */}
      <div className="mb-8 animate-bounce">
        <span className="text-7xl">🍱</span>
      </div>

      {/* 메인 타이틀 영역 */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold tracking-widest uppercase mb-2">
          Psychology & PATTERN
        </div>
        <h1 className="text-4xl font-black text-slate-900 leading-tight tracking-tighter">
          식습관으로 보는<br />
          <span className="text-emerald-500">동물 유형</span> 테스트
        </h1>
        <p className="text-slate-500 font-medium leading-relaxed break-keep max-w-[280px] mx-auto">
          무의식적인 식사 습관 속에 숨겨진<br />
          당신의 진짜 모습을 찾아보세요.
        </p>
      </div>

      {/* 카드 프리뷰 영역 (재미 요소) */}
      {/* <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-12">
        {[
          { e: "🐼", t: "직관적" },
          { e: "🐝", t: "효율적" },
          { e: "🐹", t: "감성적" },
          { e: "🦥", t: "무의식" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-3">
            <span className="text-2xl">{item.e}</span>
            <span className="text-sm font-bold text-slate-600">{item.t}</span>
          </div>
        ))}
      </div> */}

      {/* 🚀 메인 액션 버튼 */}
      <div className="w-full max-w-sm space-y-4">
        <Link 
          href="/test" 
          className="group relative flex items-center justify-center w-full py-6 bg-slate-900 text-white rounded-[2.5rem] text-xl font-black transition-all hover:bg-emerald-600 active:scale-95 shadow-xl shadow-slate-200"
        >
          테스트 시작하기
          <svg 
            className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7" />
          </svg>
        </Link>
        
        <p className="text-center text-slate-400 text-xs font-medium">
          현재까지 **<span className="text-blod-600">
              {totalParticipants !== null ? totalParticipants.toLocaleString() : "..."}
            </span>**이 참여했습니다
        </p>
      </div>

      {/* 하단 푸터 느낌 */}
      <footer className="mt-20 text-center">
        <p className="text-slate-300 text-[11px] font-bold tracking-widest uppercase">
          Developed by jeminai with ㄱㅏ
        </p>
      </footer>
    </div>
  );
}