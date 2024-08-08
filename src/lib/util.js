export function sliceArrayByLimit(totalPage, limit) {
  // js 빈배열 만들기 검색
  const totalPageArray = Array(totalPage)
    .fill()
    .map((_, i) => i);
  // 토탈 페이지 개수로 빈 배열을 만들어 준다.
  // 인덱스만 사용해서 새로운 배열을 만든다. map((_, i) => i)

  return Array(Math.ceil(totalPage / limit))
    .fill()
    .map(() => totalPageArray.splice(0, limit));
}
