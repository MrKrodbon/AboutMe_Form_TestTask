import Form from "@app/components/Form/Form";
import s from "./FormPage.module.scss";
import ItemsList from "@app/components/ItemsList/ItemsList";
import { useGetPosts } from "@app/hooks/useGetPosts";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "@app/components/Loader/Loader";
import type { PostItem } from "@app/types/types";
import { Pagination } from "@app/components/Pagination/Pagination";
import Button from "@app/components/Button/Button";

const FormPage = () => {
  const [postList, setPostList] = useState<PostItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastElement = useRef<HTMLLIElement | null>(null);

  const initialPosts = useGetPosts({ currentPage });

  useEffect(() => {
    if (initialPosts.length) {
      setPostList((prev) => [...prev, ...initialPosts]);
    }
  }, [initialPosts]);

  useEffect(() => {
    if (lastElement.current && currentPage > 1) {
      const timer = setTimeout(() => {
        lastElement.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [postList, currentPage]);

  const handleAddItemInList = (data: PostItem) => {
    setPostList((prev) => [...prev, data]);
  };

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={s.page}>
      <p className={s.title}>Додати пост</p>
      <Form handleAddItemInList={handleAddItemInList} />
      <Suspense fallback={<Loader />}>
        <ItemsList itemsList={postList} ref={lastElement} />
        <Pagination label="Дивитись ще" onClick={handleLoadMore} />
      </Suspense>
      <Button
        className="fixed top-[90%] right-[20px]"
        label="Вгору"
        onClick={() => {
          scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default FormPage;
