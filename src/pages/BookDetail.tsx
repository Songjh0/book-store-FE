import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { useBook } from "../hooks/useBook";
import { getImgSrc } from "../utils/image";
import Title from "../components/common/Title";
import { BookDetail as IBookDeteil } from "../models/book.model";
import { formatDate, formatNumber } from "../utils/format";
import EllipsisBox from "../components/common/EllipsisBox";

const bookInfoList = [
  {
    label: "카테고리",
    key: "categoryName",
    filter: (book: IBookDeteil) => <Link to={`/books?category_id=${book.category_id}`}>{book.categoryName}</Link>
  },
  {
    label: "포멧",
    key: "form"
  },
  {
    label: "페이지",
    key: "pages"
  },
  {
    label: "ISBN",
    key: "isbn"
  },
  {
    label: "출간일",
    key: "pubDate",
    filter: (book: IBookDeteil) => {
      return formatDate(book.pubDate);
    }
  },
  {
    label: "가격",
    key: "price",
    filter: (book: IBookDeteil) => {
      return `${formatNumber(book.price)}원`
    }
  },
]

function BookDetail() {

  const { bookId } = useParams();
  const { book } = useBook(bookId);

  if(!book) return null;

  return (
    <BookDetailStyle>
      <header className="header">
        <div className="img">
          <img src={getImgSrc(book.img)} alt={book.title} />
        </div>
        <div className="info">
          <Title size="large" color="text">
            {book.title}
          </Title>
          {bookInfoList.map((item) => (
              <dl>
                <dt>{item.label}</dt>
                <dd>{item.filter ? item.filter(book) : book[item.key as keyof IBookDeteil]}</dd>
              </dl>
            ))}
            <p className="sumary">{book.summary}</p>

            <div className="like">
              라이크
            </div>
            <div className="add-cart">
              장바구니 넣기
            </div>
          </div>
        </header>
      <div className="content">
        <Title size="medium">상세 설명</Title>
        <EllipsisBox linelimit={4}>{book.detail}</EllipsisBox>

        <Title size="medium">목차</Title>
        <p className="index">
          {book.contents}
        </p>
      </div>
    </BookDetailStyle>
  )
}

const BookDetailStyle = styled.div`
  header {
    display: flex;
    align-items: start;
    gap: 24px;
    padding: 0 0 24px 0;

    .img {
      flex: 1;
      img {
        width: 100%;
        height: auto;
      }
    }

    .info {
      flex: 1;
      display: flex;
      flex-direction: colum;
      gap: 12px;

      dl {
        dlsplay: flex;
        margin: 0;
      dt {
        width: 80px;
        color: ${({ theme }) => theme.color.secondary};
      }
      a {
        color: ${({ theme }) => theme.color.primary};
      }
      }
    }
  }

  .content {

  }
`;

export default BookDetail;