import dayjs from "dayjs"; // 데이터 포맷팅하는 경량 라이브러리

export const formatNumber = (number: number) => {
  return number.toLocaleString();
}

export const formatDate = (date: string, format?: string) => {
  return dayjs(date).format(format ? format : "YYYY년 MM월 DD일");
}