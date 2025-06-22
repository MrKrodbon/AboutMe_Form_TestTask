import React, { forwardRef } from "react";
import type { PostItem } from "@app/types/types";
import s from "./ItemsList.module.scss";

const PostsItems = React.lazy(() => import("./PostsItems/PostsItems"));

interface ItemsListProps {
  itemsList: PostItem[];
}
const ItemsList = forwardRef<HTMLLIElement, ItemsListProps>(
  ({ itemsList }, ref) => {
    return (
      <ul className={s.list}>
        {itemsList ? (
          itemsList.map((items: PostItem, index) => {
            const isLast = index === itemsList.length - 1;
            return (
              <PostsItems
                key={`${items.id} - ${index}`}
                {...items}
                ref={isLast ? ref : null}
              />
            );
          })
        ) : (
          <li className={s.notFound}>
            <div className={s.itemWrapper}>
              <p className={s.title}>We haven't found any posts</p>
            </div>
          </li>
        )}
      </ul>
    );
  }
);

export default ItemsList;
