import { useEffect, useState } from "react";
import { BooksEntity } from "../../../types/types";
import {
  localization,
  pageLevelLocalization,
} from "../../../constants/localization";
import { useRouter } from "next/router";
import LoadingPage from "../../shared/loading/Loading";
import { useGetBookById } from "../hooks";

const SingleCard = () => {
/*   const [book, setBook] = useState<BooksEntity>(); */
  const router = useRouter();

  const {data:book,isLoading}= useGetBookById(router.query.bookId);
  if(isLoading){
    return <LoadingPage/>
  }

 /*  useEffect(() => {
    router.query &&
      getBookById(router.query.bookId!).then((data) => setBook(data));
  }, []); */

  return book ? (
    <div dir="rtl" className="flex gap-3 mt-10 rtl h-fit mx-14">
      <img className="w-1/3" src={book?.imgURL} />
      <div className="flex flex-col gap-10">
        <h2 className="font-bold text-3xl">{book?.name}</h2>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="text-gray-500 text-xl">
                {pageLevelLocalization.singleProduct.publisher}:
              </span>
              <span className="text-gray-700 text-xl">{book?.desc}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-xl">
                {pageLevelLocalization.singleProduct.writer}:
              </span>
              <span className="text-gray-700 text-xl">{book?.author}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-xl">
                {pageLevelLocalization.singleProduct.translator}:
              </span>
              <span className="text-gray-700 text-xl">{book?.translator}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-xl">
                {pageLevelLocalization.singleProduct.score}:
              </span>
              <p className="text-gray-700 text-xl">
                <span className="text-white bg-green-600 rounded-full px-1 text-lg mx-1">
                  2.6
                </span>
                {pageLevelLocalization.singleProduct.scoreDescription}
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <span className="text-xl">{localization.price}:</span>
              <span className="text-xl ">{book?.price?.toLocaleString()}</span>
              <span> {localization.toman}</span>
            </div>
            <button className="bg-blue-500 text-white px-2 py-1 rounded">
              {localization.addToCart}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <LoadingPage />
  );
};

export default SingleCard;
