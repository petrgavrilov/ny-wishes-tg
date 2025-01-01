import "./FinalHeader.scss";

import { useWishes } from "@/providers/wishes";
import { getDeclension } from "@/helpers/get-declension";

export default function FinalHeader() {
  const { likedWishesCount, sentToBot } = useWishes();

  const title = `${likedWishesCount} ${getDeclension(likedWishesCount, [
    "желание",
    "желания",
    "желаний",
  ])}`;

  return (
    <div className="final-header">
      {likedWishesCount <= 0 && (
        <h1 className="final-header-title">Пока ничего не выбрано</h1>
      )}
      {likedWishesCount > 0 && (
        <>
          <h1 className="final-header-title">{title}</h1>
          <p className="final-header-text">
            Ух ты, вот это списочек получился!
          </p>
          <p className="final-info-text">
            Собрал для тебя карточки с желаниями
          </p>
          {!sentToBot && (
            <p className="final-info-text">
              Отправляю список и картинки в бот...
            </p>
          )}
          {sentToBot && (
            <p className="final-info-text">Отправил список и картинки в бот</p>
          )}
        </>
      )}
    </div>
  );
}
