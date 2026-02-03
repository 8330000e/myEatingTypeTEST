export type EatingType = 'fuel' | 'intuitive' | 'emotional' | 'fog';

export interface Question {
  id: number;
  type: EatingType;
  text: string;
}

export interface ResultData {
  title: string;
  emoji: string;
  animal: string;
  desc: string;
  color: string;
  analysis: string; // 유형에 대한 심층 분석
  tips: string[];   // 건강 조언 리스트
  stats: {          // 능력치 (0~100)
    awareness: number; // 식사 인지력
    enjoyment: number; // 즐거움
    control: number;   // 조절력
  };
}