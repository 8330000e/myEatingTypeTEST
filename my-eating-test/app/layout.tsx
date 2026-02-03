import "./globals.css"; // 이 줄이 Tailwind를 불러오는 핵심입니다!
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        {/* 카카오 SDK 로드 */}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.0/kakao.min.js"
          integrity="sha384-lLe9t9P6ncU0Tus7OatGv9u9V8V+7V3rFv7P5L5L5L5L5L5L5L5L5L5L5L5L5L5L"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}