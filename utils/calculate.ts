export const calculateResult = (answers: number[]) => {
    const psyTypes = ["INTUITIVE", "FUNCTIONAL", "EMOTIONAL", "PASSIVE"];
    const behTypes = ["CLOCK", "ROLLER", "NIGHT", "SMALL", "CONSTANT"];

    const psyCounts: any = { INTUITIVE: 0, FUNCTIONAL: 0, EMOTIONAL: 0, PASSIVE: 0 };
    const behCounts: any = { CLOCK: 0, ROLLER: 0, NIGHT: 0, SMALL: 0, CONSTANT: 0 };

    // 0~6번 질문으로 심리 계산
    answers.slice(0, 7).forEach((ans) => {
        if (psyTypes[ans]) psyCounts[psyTypes[ans]]++;
    });

    // 7~11번 질문으로 패턴 계산
    answers.slice(7, 12).forEach((ans) => {
        if (behTypes[ans]) behCounts[behTypes[ans]]++;
    });

    const getWinner = (counts: any) => Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);

    return { psy: getWinner(psyCounts), beh: getWinner(behCounts) };
};