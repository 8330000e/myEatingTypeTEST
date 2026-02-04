"use client";

import { useEffect } from "react";

// 글로벌 선언 (Kakao SDK 인식용)
declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoShareProps {
  type: string;
}

export default function KakaoShare({ type }: KakaoShareProps) {
  useEffect(() => {
    const initKakao = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init("cadc1ccc67e7bb8280561b47a515f4c3"); // 여기에 카카오 키 넣으세요!
      }
    };
    initKakao();
  }, []);

  const shareToKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '나의 식습관 동물 유형 테스트',
          description: `내 식습관은 [${type}] 유형! 당신은 어떤 동물인가요?`,
          imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop', // 임시 이미지
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };

  return (
    <button 
      onClick={shareToKakao}
      className="flex items-center justify-center gap-2 w-full py-5 bg-[#FEE500] text-[#3c1e1e] rounded-[2rem] font-bold text-lg hover:bg-[#fada00] shadow-md transition-all active:scale-95"
    >
      <span className="text-xl">💬</span> 카톡 공유
    </button>
  );
}