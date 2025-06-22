import type { PostItem } from "@app/types/types";
import s from "./PostsItems.module.scss";
import { forwardRef } from "react";

const PostsItems = forwardRef<HTMLLIElement, PostItem>(
  ({ title, body }, ref) => {
    return (
      <li className={s.item} ref={ref}>
        <div className={s.itemWrapper}>
          <p className={s.title}>{title}</p>
          <div className="border-b-1" />
          <p className={s.body}>Body: {body}</p>
        </div>
      </li>
    );
  }
);

export default PostsItems;
