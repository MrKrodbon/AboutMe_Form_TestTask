import { useState } from "react";
import s from "./About.module.scss";
import { SectionTypes } from "../../constants/sectionTypes";

const About = () => {
  const [showSection, setShowSection] = useState<string | null>("sectionMe");

  const handleShowSection = (sectionName: string) => {
    setShowSection((prev) => (prev === sectionName ? null : sectionName));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.pageTitle}></div>
      <div>
        <section className={s.pageHero}>
          <div className={s.pageHeroTop}>
            <p className={s.titleLight}>
              Я захоплююся програмною інженерією і прагну вивчати нові
              технології та фреймворки. Ціную увагу до деталей, комунікацію та
              роботу в команді.
            </p>
          </div>
          <div className={s.pageHeroBottom}>
            <div className={s.image}>
              <img src="assets/images/my-photo.png" alt="my photo" />
            </div>
          </div>
        </section>
      </div>
      <main className={s.page}>
        <article className={s.content}>
          <section className={s.sectionMe}>
            <div onClick={() => handleShowSection(SectionTypes.sectionMe)}>
              <p className={s.title}>Про мене: </p>
              {showSection && (
                <p
                  className={`${s.text} ${
                    showSection === SectionTypes.sectionMe ? s.open : ""
                  }`}
                >
                  Мені 24 роки, Я Frontend розробник з практичним досвідом
                  створення адаптивних та зручних веб-додатків з використанням
                  React, JavaScript, TypeScript та сучасних бібліотек
                  користувацького інтерфейсу. Маю досвід роботи за методологією
                  Agile/Scrum для створення високоякісних рішень. Захоплююсь
                  фронтенд-розробкою та маю досвід системного адміністрування,
                  що дозволяє добре розуміти як користувацькі, так і технічні
                  інфраструктурні виклики. Завжди прагну писати чистий,
                  масштабований код і розвиватися як розробник.
                </p>
              )}
            </div>
          </section>
          <section className={s.sectionWhy}>
            <div onClick={() => handleShowSection(SectionTypes.sectionWhy)}>
              <p className={s.title}>Чому саме розробка? </p>
              {showSection && (
                <p
                  className={`${s.text} ${
                    showSection === SectionTypes.sectionWhy ? s.open : ""
                  }`}
                >
                  Ще дитинства мене захоплювали технології — мені завжди було
                  цікаво щось розібрати, зрозуміти як це працює зсередини.Коли я
                  вперше написав простий код на мові програмування Pascal в
                  школі і побачив, як комп’ютер виконує мої інструкції — це було
                  схоже на магію, тому я вирішив обрати для себе напрямок
                  Frontend-розробки, бо вона поєднує технічну логіку з
                  креативом.
                </p>
              )}
            </div>
          </section>

          <section className={s.sectionAdv}>
            <div onClick={() => handleShowSection(SectionTypes.sectionAdv)}>
              <p className={s.title}>Які є плюси в розробці?</p>

              <ol
                className={`${s.list} ${
                  showSection === SectionTypes.sectionAdv ? s.open : ""
                }`}
              >
                <li>
                  Постійний розвиток Ти завжди вчишся чомусь новому — технології
                  не стоять на місці.
                </li>
                <li>
                  Гнучкість і свобода Можна працювати віддалено, з будь-якої
                  точки світу. Гнучкий графік — часто можна працювати у свій
                  ритм.
                </li>
                <li>
                  Конкурентна зарплата Навіть початківці можуть претендувати на
                  гідну оплату праці. Успішні фахівці отримують дуже високу
                  компенсацію.
                </li>
                <li>
                  Відчуття впливу Ти створюєш реальні речі: сайти, сервіси,
                  додатки. Результат видно, ним користуються інші.
                </li>
                <li>
                  Поєднання логіки й творчості (особливо у Frontend) Код — це
                  інструмент створення. UI/UX, анімації, дизайн — усе це можна
                  реалізувати програмно.
                </li>
              </ol>
            </div>
          </section>
          <section className={s.sectionDisadv}>
            <div onClick={() => handleShowSection(SectionTypes.sectionDisadv)}>
              <p className={s.title}>Які є мінуси в розробці?</p>
              <ol
                className={`${s.list} ${
                  showSection === SectionTypes.sectionDisadv ? s.open : ""
                }`}
              >
                <li>
                  Початок може бути складним: багато понять, інструментів,
                  термінів.
                </li>
                <li>Не оновлюєш знання — відстаєш.</li>
                <li>Часто думаєш про рішення задачі навіть поза роботою.</li>
                <li>
                  Сидячий стиль життя — проблема зі спиною, зором, активністю.
                </li>
              </ol>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default About;
