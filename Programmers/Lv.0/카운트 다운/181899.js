function solution(start_num, end_num) {
    const answer = new Array(start_num - end_num + 1).fill(0).map((_, i) => start_num - i);
    return answer;
}
