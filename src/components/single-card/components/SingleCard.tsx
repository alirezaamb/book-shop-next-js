import { useEffect, useState } from "react";
import { BooksEntity } from "../../../types/types";
import {
  localization,
  pageLevelLocalization,
} from "../../../constants/localization";
import { getBookById } from "@/api/get/get";
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
    <div dir="rtl" className="flex rtl h-fit mx-14">
      <img className="w-1/3" src={book?.imgURL} />
      <div className="flex flex-col gap-10 mx-5">
        <h2 className="font-bold text-2xl mt-5">{book?.name}</h2>
        <div className="h-full flex flex-col">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <span className="text-gray-500 text-lg">
                {pageLevelLocalization.singleProduct.publisher}:
              </span>
              <span className="text-gray-700 text-lg">{book?.desc}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-lg">
                {pageLevelLocalization.singleProduct.writer}:
              </span>
              <span className="text-gray-700 text-lg">{book?.author}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-lg">
                {pageLevelLocalization.singleProduct.translator}:
              </span>
              <span className="text-gray-700 text-lg">{book?.translator}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-500 text-lg">
                {pageLevelLocalization.singleProduct.score}:
              </span>
              <p className="text-gray-700 text-lg">
                <span className="text-white bg-green-600 rounded-md px-3 text-lg mx-1">
                  2.6
                </span>
                {pageLevelLocalization.singleProduct.scoreDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] bg-white rounded-lg mx-auto shadow-lg">
        <div className="flex flex-col">
          <h2 className="text-xl mx-auto pt-2 font-bold text-[#00a2a4]">
            الکترونیکی
          </h2>
          <hr className="my-2 border-[#00a1a4] border-2" />
          <div className="flex flex-row mx-auto my-5 items-center">
            <div className="flex flex-col items-center">
              <p className="my-1 text-gray-400">حجم</p>
              <p className="text-black">340/8 مگابایت</p>
            </div>
            <div className="bg-gray-200 mx-5 h-12 w-1"></div>
            <div className="flex flex-col items-center">
              <p className="my-1 text-gray-400">قابلیت انتقال</p>
              <p>دارد</p>
            </div>
          </div>
          <hr className="w-[90%] mx-auto my-5" />
          <div className="flex gap-3 mt-16 mx-5">
            <div className="flex justify-between w-full items-center">
              <span className="text-2xl text-[#00a1a4]">
                {localization.price}:
              </span>
              <div className=" text-[#00a1a4]">
                <span className="text-3xl font-extrabold">
                  {book?.price?.toLocaleString()}
                </span>
                <span className="mx-2"> {localization.toman}</span>
              </div>
            </div>
          </div>
          <div className="my-5 mx-auto">
            <button className="bg-gray-200 px-4 py-2 rounded-full ml-3">
              هدیه به دیگری
            </button>
            <button className="bg-[#00a1a4] text-white py-2 px-9 rounded-full">
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
