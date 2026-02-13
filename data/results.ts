export type AnimalResult = {
    name: string;
    psychologyType: string;
    behaviorPattern: string;
    mainColor: string;
    textColor: string;
    lightColor: string;
    description: string;
    advice: string;      // 조언 1: 따뜻한 공감과 가이드
    analysis: string;    // 조언 2: 행동 패턴에 대한 분석 (추가)
    prescription: string;
    stats: {
        emotionalControl: number;
        regularity: number;
        bodyAwareness: number;
        efficiency: number;
        mindfulness: number;
    };
};

export const RESULTS: Record<string, Record<string, AnimalResult>> = {
    INTUITIVE: {
        CLOCK: {
            name: "바른생활 판다", 
            psychologyType: "Intuitive Eating",
            behaviorPattern: "Rhythmic Pattern",
            mainColor: "#27c962",
            textColor: "#1F2937",
            lightColor: "#DCFCE7",
            description: "내 몸의 신호에 귀 기울이며 규칙적으로 대나무(?)를 챙겨 먹는 식습관의 정석!",
            advice: "지금의 리듬이 완벽해요. 너무 강박을 갖지 않아도 괜찮아요.",
            analysis: "내부 신호와 외부 규칙이 조화를 이루는 가장 이상적인 상태입니다.",
            prescription: "주 1회 치팅 프라이데이 - 하루쯤은 계획 없는 식사를 즐겨보세요.",
            stats: { emotionalControl: 85, regularity: 95, bodyAwareness: 90, efficiency: 80, mindfulness: 85 }
        },
        ROLLER: {
            name: "사냥 성공한 사자",
            psychologyType: "Intuitive Eating",
            behaviorPattern: "Binge-Restrict Cycle",
            mainColor: "#FB923C",
            textColor: "#1F2937",
            lightColor: "#FFEDD5",
            description: "평소엔 여유롭지만, 꽂히는 맛집에선 고삐 풀린 듯 즐기는 타입!",
            advice: "즐겁게 먹는 건 좋지만, 급하게 먹으면 소화기관이 놀랄 수 있어요.",
            analysis: "보상 심리가 작동할 때 억제력이 급격히 저하되는 경향이 보입니다.",
            prescription: "식후 15분 산책권 - 가벼운 산책으로 에너지를 발산하세요.",
            stats: { emotionalControl: 70, regularity: 40, bodyAwareness: 85, efficiency: 65, mindfulness: 75 }
        },
        NIGHT: {
            name: "미식가 부엉이",
            psychologyType: "Intuitive Eating",
            behaviorPattern: "Nocturnal Hyperphagia",
            mainColor: "#1E293B",
            textColor: "#FFFFFF",
            lightColor: "#F1F5F9",
            description: "모두가 잠든 밤, 오롯이 맛에 집중하며 하루를 보상받는 타입!",
            advice: "밤에 먹는 즐거움은 크지만, 위장은 쉴 시간이 필요해요.",
            analysis: "낮 동안의 긴장이 해제되는 심야 시간에 감각이 과도하게 예민해집니다.",
            prescription: "취침 3시간 전 공복 - 위장에게도 퇴근 시간을 선물하세요.",
            stats: { emotionalControl: 80, regularity: 50, bodyAwareness: 80, efficiency: 60, mindfulness: 90 }
        },
        SMALL: {
            name: "깐깐한 고양이",
            psychologyType: "Intuitive Eating",
            behaviorPattern: "Restrictive Intake",
            mainColor: "#94A3B8",
            textColor: "#1F2937",
            lightColor: "#F8FAFC",
            description: "맛없으면 안 먹어! 소량이라도 최상의 맛을 추구하는 타입!",
            advice: "입맛이 까다로워 영양이 불균형해질 수 있으니 주의하세요.",
            analysis: "음식의 질에 대한 높은 기준이 오히려 필요한 에너지 섭취를 방해합니다.",
            prescription: "신선한 채소 샐러드 - 하루 한 번, 제철 채소를 꼭 곁들여보세요.",
            stats: { emotionalControl: 85, regularity: 60, bodyAwareness: 75, efficiency: 50, mindfulness: 80 }
        },
        CONSTANT: {
            name: "오물오물 다람쥐",
            psychologyType: "Intuitive Eating",
            behaviorPattern: "Grazing Pattern",
            mainColor: "#FACC15",
            textColor: "#1F2937",
            lightColor: "#FEF9C3",
            description: "맛있는 걸 발견하면 하루 종일 조금씩 행복하게 즐기는 타입!",
            advice: "야금야금 먹다 보면 내가 얼마나 먹었는지 잊기 쉬워요.",
            analysis: "포만감 신호가 미미하게 지속되어 뇌가 배부름을 명확히 인지하지 못합니다.",
            prescription: "작은 접시 덜어먹기 - 간식도 접시에 담아 양을 확인하며 드세요.",
            stats: { emotionalControl: 75, regularity: 45, bodyAwareness: 70, efficiency: 65, mindfulness: 60 }
        }
    },
    EMOTIONAL: {
        CLOCK: {
            name: "평온한 코끼리",
            psychologyType: "Emotional Eating",
            behaviorPattern: "Rhythmic Pattern",
            mainColor: "#F87171",
            textColor: "#1F2937",
            lightColor: "#FEE2E2",
            description: "흔들리는 마음을 규칙적인 식사로 꽉 붙잡고 있는 노력파!",
            advice: "가끔은 규칙을 깨도 괜찮아요. 스스로에게 조금 더 너그러워지세요.",
            analysis: "정서적 불안을 통제하기 위해 식사 규칙에 과도하게 의존하는 양상입니다.",
            prescription: "따뜻한 차 한 잔 - 식사 전 차를 마시며 마음을 먼저 데워주세요.",
            stats: { emotionalControl: 50, regularity: 90, bodyAwareness: 60, efficiency: 75, mindfulness: 70 }
        },
        ROLLER: {
            name: "폭주하는 멧돼지",
            psychologyType: "Emotional Eating",
            behaviorPattern: "Binge-Restrict Cycle",
            mainColor: "#FB923C",
            textColor: "#1F2937",
            lightColor: "#FFEDD5",
            description: "스트레스 받으면 앞뒤 안 가리고 폭풍 흡입으로 푸는 타입!",
            advice: "감정을 음식으로 덮으려 하면 나중에 후회만 남을 수 있어요.",
            analysis: "감정적 해소 수단이 '음식'에만 편중되어 있어 폭식 리스크가 매우 높습니다.",
            prescription: "매운맛 대신 소리 지르기 - 스트레스 해소를 위한 다른 취미를 찾아보세요.",
            stats: { emotionalControl: 20, regularity: 30, bodyAwareness: 40, efficiency: 50, mindfulness: 45 }
        },
        NIGHT: {
            name: "위로가 필요한 늑대",
            psychologyType: "Emotional Eating",
            behaviorPattern: "Nocturnal Hyperphagia",
            mainColor: "#1E293B",
            textColor: "#FFFFFF",
            lightColor: "#F1F5F9",
            description: "외로운 밤, 야식으로 마음의 빈자리를 채우는 타입!",
            advice: "밤의 배고픔은 사실 '외로움'일지도 몰라요.",
            analysis: "고립감이나 공허함을 물리적인 포만감으로 대체하려는 기제가 강합니다.",
            prescription: "지인에게 안부 전화 - 야식 배달 앱 대신 친구에게 연락해 보세요.",
            stats: { emotionalControl: 30, regularity: 40, bodyAwareness: 50, efficiency: 45, mindfulness: 55 }
        },
        SMALL: {
            name: "상처받은 사슴",
            psychologyType: "Emotional Eating",
            behaviorPattern: "Restrictive Intake",
            mainColor: "#94A3B8",
            textColor: "#1F2937",
            lightColor: "#F8FAFC",
            description: "마음이 울적하면 입맛이 싹 사라져 기운을 잃어버리는 타입!",
            advice: "기운이 없으면 마음도 더 약해져요. 한 숟가락이라도 꼭 챙기세요.",
            analysis: "부정적 정서가 신체 활동을 억제하여 섭식 중단으로 이어지는 소진 상태입니다.",
            prescription: "부드러운 스프 한 그릇 - 목 넘김이 편한 음식으로 기력을 보충하세요.",
            stats: { emotionalControl: 40, regularity: 50, bodyAwareness: 45, efficiency: 30, mindfulness: 60 }
        },
        CONSTANT: {
            name: "간식 저장고 햄스터",
            psychologyType: "Emotional Eating",
            behaviorPattern: "Grazing Pattern",
            mainColor: "#FACC15",
            textColor: "#1F2937",
            lightColor: "#FEF9C3",
            description: "불안하거나 심심할 때마다 주전부리를 찾아 헤매는 타입!",
            advice: "무언가 씹는 행위가 긴장을 풀어주지만, 턱 관절이 고생할 수 있어요.",
            analysis: "불안을 해소하기 위한 구강 자극 추구 성향이 강하게 나타납니다.",
            prescription: "껌이나 견과류 - 칼로리가 낮거나 오래 씹을 수 있는 걸 고르세요.",
            stats: { emotionalControl: 45, regularity: 35, bodyAwareness: 55, efficiency: 50, mindfulness: 30 }
        }
    },
    FUNCTIONAL: {
        CLOCK: {
            name: "일중독 일개미",
            psychologyType: "Functional Eating",
            behaviorPattern: "Rhythmic Pattern",
            mainColor: "#60A5FA",
            textColor: "#1F2937",
            lightColor: "#DBEAFE",
            description: "완벽한 영양 설계를 시간 맞춰 주입하는 효율 끝판왕!",
            advice: "식사는 업무가 아니에요! 가끔은 맛의 즐거움도 느껴보세요.",
            analysis: "음식을 단순한 에너지원으로만 취급하여 식사의 심리적 가치를 간과합니다.",
            prescription: "노트북 덮고 식사하기 - 밥 먹을 때만큼은 일 생각을 멈추세요.",
            stats: { emotionalControl: 90, regularity: 95, bodyAwareness: 60, efficiency: 95, mindfulness: 50 }
        },
        ROLLER: {
            name: "몰아 먹는 낙타",
            psychologyType: "Functional Eating",
            behaviorPattern: "Binge-Restrict Cycle",
            mainColor: "#FB923C",
            textColor: "#1F2937",
            lightColor: "#FFEDD5",
            description: "바쁠 땐 굶으며 버티다 쉴 때 한꺼번에 에너지를 비축함!",
            advice: "불규칙한 에너지 유입은 몸을 쉽게 피로하게 만들어요.",
            analysis: "생존 본능에 의한 보상적 과식 패턴이 고착화될 위험이 있습니다.",
            prescription: "휴대용 에너지바 - 공복이 너무 길어지지 않게 중간중간 채우세요.",
            stats: { emotionalControl: 85, regularity: 25, bodyAwareness: 50, efficiency: 80, mindfulness: 40 }
        },
        NIGHT: {
            name: "밤샘 작업 박쥐",
            psychologyType: "Functional Eating",
            behaviorPattern: "Nocturnal Hyperphagia",
            mainColor: "#1E293B",
            textColor: "#FFFFFF",
            lightColor: "#F1F5F9",
            description: "밤샘 효율을 위해 야식을 연료처럼 쏟아붓는 프로 일꾼!",
            advice: "밤에 쓴 에너지는 낮에 잠으로 보충되지 않아요. 건강이 우선!",
            analysis: "각성 상태 유지를 위해 고열량 식품을 도파민 공급원으로 활용 중입니다.",
            prescription: "블루베리나 견과류 - 뇌 회전을 돕는 가벼운 간식을 선택하세요.",
            stats: { emotionalControl: 80, regularity: 35, bodyAwareness: 45, efficiency: 85, mindfulness: 60 }
        },
        SMALL: {
            name: "이슬 먹는 나비",
            psychologyType: "Functional Eating",
            behaviorPattern: "Restrictive Intake",
            mainColor: "#94A3B8",
            textColor: "#1F2937",
            lightColor: "#F8FAFC",
            description: "최소한의 연료로 화려하게 활동하는 극강의 가성비 타입!",
            advice: "가성비가 좋아도 기본 영양소는 채워야 날개가 꺾이지 않아요.",
            analysis: "낮은 에너지 섭취가 장기화되어 신진대사율이 저하되었을 가능성이 큽니다.",
            prescription: "고단백 단백질 쉐이크 - 부족한 근력을 위해 단백질을 보충하세요.",
            stats: { emotionalControl: 85, regularity: 55, bodyAwareness: 50, efficiency: 90, mindfulness: 65 }
        },
        CONSTANT: {
            name: "바쁜 꿀벌",
            psychologyType: "Functional Eating",
            behaviorPattern: "Grazing Pattern",
            mainColor: "#FACC15",
            textColor: "#1F2937",
            lightColor: "#FEF9C3",
            description: "지치지 않기 위해 수시로 당분을 보충하며 일하는 타입!",
            advice: "잦은 당분 섭취는 혈당 롤러코스터를 유발할 수 있어요.",
            analysis: "지속적인 당 공급으로 인슐린 저항성에 무리가 갈 수 있는 습관입니다.",
            prescription: "설탕 대신 다크 초콜릿 - 당 충전도 조금 더 건강한 방식으로!",
            stats: { emotionalControl: 75, regularity: 40, bodyAwareness: 55, efficiency: 70, mindfulness: 35 }
        }
    },
    PASSIVE: {
        CLOCK: {
            name: "멍 때리는 소",
            psychologyType: "Passive Eating",
            behaviorPattern: "Rhythmic Pattern",
            mainColor: "#A78BFA",
            textColor: "#FFFFFF",
            lightColor: "#F3E8FF",
            description: "아무 생각 없이 늘 먹던 대로, 시간에 맞춰 되새김질하듯 먹음!",
            advice: "내가 지금 무엇을 먹고 있는지 한 번만 들여다봐 주세요.",
            analysis: "관성에 의한 섭식 행위가 반복되어 식사의 질적 개선이 일어나지 않습니다.",
            prescription: "새로운 메뉴 도전 - 늘 가던 식당 말고 새로운 맛을 찾아보세요.",
            stats: { emotionalControl: 80, regularity: 85, bodyAwareness: 30, efficiency: 60, mindfulness: 20 }
        },
        ROLLER: {
            name: "배부른 구렁이",
            psychologyType: "Passive Eating",
            behaviorPattern: "Binge-Restrict Cycle",
            mainColor: "#FB923C",
            textColor: "#FFFFFF",
            lightColor: "#FFEDD5",
            description: "넋 놓고 먹다 보니 어느새 배가 빵빵해져 움직이지 못함!",
            advice: "포만감 신호는 20분 뒤에 도착한다는 걸 잊지 마세요.",
            analysis: "외부 자극에 몰입하여 신체가 보내는 포만감 피드백을 수신 거부하고 있습니다.",
            prescription: "20분 타이머 식사 - 천천히 씹으며 뇌가 배부름을 알게 하세요.",
            stats: { emotionalControl: 70, regularity: 35, bodyAwareness: 25, efficiency: 55, mindfulness: 15 }
        },
        NIGHT: {
            name: "야행성 너구리",
            psychologyType: "Passive Eating",
            behaviorPattern: "Nocturnal Hyperphagia",
            mainColor: "#1E293B",
            textColor: "#FFFFFF",
            lightColor: "#F1F5F9",
            description: "밤마다 영상 보며 나도 모르게 야식 봉지를 뒤적거리는 타입!",
            advice: "영상의 자극이 식욕을 더 부추기고 있어요.",
            analysis: "시각적 미디어 시청과 섭식 행위가 조건 반사적으로 결합되어 있습니다.",
            prescription: "스마트폰 멀리 두기 - 밥상에서는 오직 밥과 나만 마주하세요.",
            stats: { emotionalControl: 65, regularity: 40, bodyAwareness: 35, efficiency: 50, mindfulness: 10 }
        },
        SMALL: {
            name: "나무 위에 나무늘보",
            psychologyType: "Passive Eating",
            behaviorPattern: "Restrictive Intake",
            mainColor: "#94A3B8",
            textColor: "#FFFFFF",
            lightColor: "#F8FAFC",
            description: "먹는 것도 귀찮아.. 배고픈 줄도 모르고 축 늘어져 있는 타입!",
            advice: "귀찮음 때문에 몸의 엔진이 꺼져가고 있어요. 활력이 필요해요!",
            analysis: "식사 동기가 극도로 저하되어 생체 리듬 전반이 무기력해진 상태입니다.",
            prescription: "상큼한 과일 주스 - 비타민으로 몸의 스위치를 켜보세요.",
            stats: { emotionalControl: 75, regularity: 45, bodyAwareness: 20, efficiency: 30, mindfulness: 40 }
        },
        CONSTANT: {
            name: "입이 바쁜 원숭이",
            psychologyType: "Passive Eating",
            behaviorPattern: "Grazing Pattern",
            mainColor: "#FACC15",
            textColor: "#1F2937",
            lightColor: "#FEF9C3",
            description: "손에 잡히는 대로 계속 입으로 가져가야 직성이 풀리는 타입!",
            advice: "입이 심심한 건지, 손이 심심한 건지 구분이 필요해요.",
            analysis: "주의 산만한 환경에서 무의식적인 핑거 푸드 섭취가 습관화되었습니다.",
            prescription: "무설탕 캔디나 껌 - 칼로리 없는 것으로 입을 달래보세요.",
            stats: { emotionalControl: 60, regularity: 30, bodyAwareness: 35, efficiency: 45, mindfulness: 15 }
        }
    }
};

// const RESULTS = {
//   fuel: {
//     title: "에너지 뿜뿜 꿀벌",
//     expertTitle: "기능적 식사자 (Functional Eater)",
//     emoji: "🐝",
//     color: "bg-yellow-400",
//     lightColor: "bg-yellow-50",
//     textColor: "text-yellow-900",
//     analysis: "음식을 즐거움보다는 신체 기능을 유지하기 위한 '필수 연료'로 인식하는 유형입니다. 계획적이고 효율적이지만, 식사가 주는 정서적 만족감이 다소 낮을 수 있습니다.",
//     tips: ["식사 시간 중 최소 5분은 '미식 명상'을 시도해 보세요.", "영양 성분표 너머의 '먹는 즐거움'을 찾아보세요."],
//     stats: { awareness: 90, enjoyment: 40, control: 85 }
//   },
//   intuitive: {
//     title: "평화로운 먹보 판다",
//     expertTitle: "직관적 식사자 (Intuitive Eater)",
//     emoji: "🐼",
//     color: "bg-emerald-400",
//     lightColor: "bg-emerald-50",
//     textColor: "text-emerald-900",
//     analysis: "배고픔과 포만감 신호에 민감하게 반응하는 이상적인 유형입니다. 외부 규칙에 휘둘리지 않고 건강한 항상성을 유지하는 능력이 탁월합니다.",
//     tips: ["식단의 영양적 다양성을 조금 더 확장해 보세요.", "자신의 건강한 식사 철학을 주변에 공유해 보세요."],
//     stats: { awareness: 95, enjoyment: 90, control: 90 }
//   },
//   emotional: {
//     title: "볼 빵빵 햄스터",
//     expertTitle: "정서적 식사자 (Emotional Eater)",
//     emoji: "🐹",
//     color: "bg-pink-400",
//     lightColor: "bg-pink-50",
//     textColor: "text-pink-900",
//     analysis: "스트레스나 공허함을 음식으로 해결하려는 경향이 있습니다. 음식은 일시적인 위안일 뿐 근본적인 해결책은 아닙니다.",
//     tips: ["'진짜 허기'인지 '가짜 허기'인지 10초만 질문해 보세요.", "기분 전환을 위한 음식 외의 통로를 만들어야 합니다."],
//     stats: { awareness: 50, enjoyment: 80, control: 30 }
//   },
//   fog: {
//     title: "무념무상 나무늘보",
//     expertTitle: "무의식적 식사자 (Distracted Eater)",
//     emoji: "🦥",
//     color: "bg-purple-400",
//     lightColor: "bg-purple-50",
//     textColor: "text-purple-900",
//     analysis: "주변 자극에 의해 나도 모르게 음식을 섭취하는 유형입니다. 식사 주의력이 낮아 필요 이상으로 먹을 위험이 큽니다.",
//     tips: ["스마트폰을 내려놓고 식사에만 집중해 보세요.", "작은 접시에 덜어 먹어 시각적으로 양을 확인하세요."],
//     stats: { awareness: 20, enjoyment: 50, control: 40 }
//   }
// };