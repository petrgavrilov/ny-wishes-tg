import "./FinalHeader.scss";

import { useWishes } from "@/providers/wishes";
import { getDeclension } from "@/helpers/get-declension";

export default function FinalHeader() {
  const { likedWishesCount } = useWishes();

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
            Собрал для тебя карточки с желаниями, не забудь их сохранить и
            поделиться с друзьями.
          </p>
          <p className="final-info-text">
            Еще отправил список желаний в бот, можешь попросить прислать его
            прислать картинки
          </p>
        </>
      )}
    </div>
  );
}
