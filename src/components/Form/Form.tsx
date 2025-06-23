import s from "./Form.module.scss";
import { useForm } from "react-hook-form";
import { addPosts } from "@app/utils/addPosts";

import toast from "react-hot-toast";
import type { PostItem } from "@app/types/types";
import Button from "../Button/Button";

interface FormProps {
  handleAddItemInList: (data: PostItem) => void;
}

const Form = ({ handleAddItemInList }: FormProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PostItem>();

  const onSubmitHandle = async (data: PostItem) => {
    const response = await addPosts(data);
    if (response.status === 201) {
      toast.success(`Публікація ${data.title}  успішно створена!`);
      handleAddItemInList(data);
    } else {
      toast.error("Помилка при створенні публікації");
    }
  };

  const titleValue = watch("title");
  const bodyValue = watch("body");

  return (
    <>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmitHandle)} className={s.form}>
          <div>
            <input
              {...register("title", { required: true })}
              placeholder="Додати назву..."
              className="border-b border-white w-full mb-3"
            />
            {errors.title && (
              <span className={s.errorMessage}>Поле обов'язкове</span>
            )}
          </div>
          <div>
            <textarea
              {...register("body", { required: true })}
              rows={5}
              placeholder="Додати опис..."
              className="border-b border-white w-full mb-3"
            />
            {errors.body && (
              <>
                <span className={s.errorMessage}>Поле body обов'язкове</span>
              </>
            )}
          </div>
          <Button
            type="submit"
            className={s.button}
            disabled={titleValue === undefined && bodyValue === undefined}
            label="Відправити"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
