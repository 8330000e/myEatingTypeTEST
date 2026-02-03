"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

const RESULTS = {
  fuel: {
    title: "에너지 뿜뿜 꿀벌",
    expertTitle: "기능적 식사자 (Functional Eater)",
    emoji: "🐝",
    color: "bg-yellow-400",
    lightColor: "bg-yellow-50",
    textColor: "text-yellow-900",
    analysis: "음식을 즐거움보다는 신체 기능을 유지하기 위한 '필수 연료'로 인식하는 유형입니다. 계획적이고 효율적이지만, 식사가 주는 정서적 만족감이 다소 낮을 수 있습니다.",
    tips: ["식사 시간 중 최소 5분은 '미식 명상'을 시도해 보세요.", "영양 성분표 너머의 '먹는 즐거움'을 찾아보세요."],
    stats: { awareness: 90, enjoyment: 40, control: 85 }
  },
  intuitive: {
    title: "평화로운 먹보 판다",
    expertTitle: "직관적 식사자 (Intuitive Eater)",
    emoji: "🐼",
    color: "bg-emerald-400",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-900",
    analysis: "배고픔과 포만감 신호에 민감하게 반응하는 이상적인 유형입니다. 외부 규칙에 휘둘리지 않고 건강한 항상성을 유지하는 능력이 탁월합니다.",
    tips: ["식단의 영양적 다양성을 조금 더 확장해 보세요.", "자신의 건강한 식사 철학을 주변에 공유해 보세요."],
    stats: { awareness: 95, enjoyment: 90, control: 90 }
  },
  emotional: {
    title: "볼 빵빵 햄스터",
    expertTitle: "정서적 식사자 (Emotional Eater)",
    emoji: "🐹",
    color: "bg-pink-400",
    lightColor: "bg-pink-50",
    textColor: "text-pink-900",
    analysis: "스트레스나 공허함을 음식으로 해결하려는 경향이 있습니다. 음식은 일시적인 위안일 뿐 근본적인 해결책은 아닙니다.",
    tips: ["'진짜 허기'인지 '가짜 허기'인지 10초만 질문해 보세요.", "기분 전환을 위한 음식 외의 통로를 만들어야 합니다."],
    stats: { awareness: 50, enjoyment: 80, control: 30 }
  },
  fog: {
    title: "무념무상 나무늘보",
    expertTitle: "무의식적 식사자 (Distracted Eater)",
    emoji: "🦥",
    color: "bg-purple-400",
    lightColor: "bg-purple-50",
    textColor: "text-purple-900",
    analysis: "주변 자극에 의해 나도 모르게 음식을 섭취하는 유형입니다. 식사 주의력이 낮아 필요 이상으로 먹을 위험이 큽니다.",
    tips: ["스마트폰을 내려놓고 식사에만 집중해 보세요.", "작은 접시에 덜어 먹어 시각적으로 양을 확인하세요."],
    stats: { awareness: 20, enjoyment: 50, control: 40 }
  }
};

export default function ResultPage() {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as keyof typeof RESULTS) || "fog";
  const data = RESULTS[type];

  useEffect(() => {
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("7388a63b72cfed2aba1a10810ae90dc1"); 
      }
    }
  }, []);
  
  const shareToKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: `나의 식습관 유형은? [${type}]`,
        description: '재미로 보는 나의 식습관 동물 유형 테스트!',
        imageUrl: 'https://your-site.com/og-image.png', // 공유 시 보여줄 이미지 주소
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: '결과 확인하기',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 pb-24">
      <div className="max-w-md mx-auto space-y-8">
        
        {/* 결과 보고서 카드 */}
        <section className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-slate-100 text-center relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-2 ${data.color}`} />
          <span className="text-7xl mb-6 block">{data.emoji}</span>
          <h2 className={`text-base font-bold ${data.textColor} opacity-60 mb-1`}>{data.expertTitle}</h2>
          <h1 className="text-3xl font-black text-slate-900 mb-6">{data.title}</h1>
          <p className="text-slate-600 leading-relaxed break-keep">{data.analysis}</p>
        </section>

        {/* 능력치 분석: 한글 그래프 */}
        <section className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100">
          <h3 className="text-slate-900 font-bold mb-8 flex items-center justify-between">
            <span>📊 식습관 능력치 지표</span>
            <span className="text-[10px] text-slate-400 font-normal">12개 문항 분석 결과</span>
          </h3>
          <div className="space-y-7">
            {Object.entries(data.stats).map(([key, value]) => (
              <div key={key} className="relative">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-bold text-slate-600">
                    {key === 'awareness' ? '식사 인지력' : key === 'enjoyment' ? '미식의 즐거움' : '자기 조절력'}
                  </span>
                  <span className={`text-lg font-black ${data.textColor.replace('900', '600')}`}>{value}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${data.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* 솔루션: 처방전 느낌 */}
        <section className={`${data.lightColor} rounded-3xl p-7 border border-white/50 shadow-inner`}>
          <h3 className={`font-bold ${data.textColor} mb-5 flex items-center gap-2 text-lg`}>
            📍 맞춤 건강 처방전
          </h3>
          <div className="space-y-4">
            {data.tips.map((tip, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className={`w-6 h-6 rounded-lg ${data.color} flex-shrink-0 flex items-center justify-center text-xs font-bold text-white`}>
                  {i + 1}
                </div>
                <p className={`text-[14px] ${data.textColor} font-medium leading-snug opacity-90 break-keep`}>
                  {tip}
                </p>
              </div>
            ))}
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
                제작자의 작은 부탁
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
              href="https://your-survey-link.com" 
              target="_blank"
              className="inline-flex items-center justify-center w-full py-5 bg-indigo-600 text-white rounded-[1.5rem] text-lg font-black tracking-tight shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all"
            >
              설문 참여하고 응원하기
            </Link>

            <p className="text-[11px] text-slate-400 font-medium">
              보내주신 소중한 데이터는 제작 중인 입맛에 맞는 메뉴을 찾아주는 앱서비스의 중요한 데이터로 사용됩니다!
            </p>
          </div>
        </section>

        {/* 💬 [눈에 띄는 섹션 2] 카톡 공유 & 다시하기 */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            onClick={shareToKakao}
            className="flex items-center justify-center gap-2 py-5 bg-[#FEE500] text-[#3c1e1e] rounded-[2rem] font-bold text-lg hover:bg-[#fada00] shadow-md transition-all active:scale-95"
          >
            <span className="text-xl">💬</span> 카톡 공유
          </button>
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