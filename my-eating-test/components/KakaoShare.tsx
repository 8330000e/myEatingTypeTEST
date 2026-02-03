"use client";
import { useEffect } from "react";

// 글로벌 window 객체에 Kakao 속성 정의 (TypeScript 에러 방지)
declare global {
  interface Window {
    Kakao: any;
  }
}

interface KakaoShareProps {
  title: string;
  description: string;
}

export default function KakaoShare({ title, description }: KakaoShareProps) {
  useEffect(() => {
    // SDK 초기화 확인
    if (typeof window !== "undefined" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        // 발급받은 JavaScript 키를 입력하세요
        window.Kakao.init("7388a63b72cfed2aba1a10810ae90dc1");
      }
    }
  }, []);

  const handleShare = () => {
    if (typeof window !== "undefined" && window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: `나의 식습관 동물은 [${title}]!`,
          description: description,
          imageUrl: 'https://your-domain.com/og-image.png', // 실제 이미지 URL로 변경 필요
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '테스트 하러가기',
            link: {
              mobileWebUrl: window.location.origin,
              webUrl: window.location.origin,
            },
          },
        ],
      });
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FEE500] py-4 font-bold text-[#3C1E1E] transition-all hover:bg-[#FDE100] active:scale-[0.98]"
    >
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.484 1.636 4.664 4.14 5.923l-.84 3.085c-.05.18.05.37.21.45a.4.4 0 00.18.04c.12 0 .23-.05.31-.14l3.614-3.567c.45.06.91.1 1.386.1 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
      </svg>
      카카오톡으로 결과 공유하기
    </button>
  );
}