import styles from "./styles.module.css";
import { Header } from "../../shared/ui/Header/Header";
import { Footer } from "../../shared/ui/Footer/Footer";

export function Home() {
  return (
    <>
      <Header />
      <main className={styles.osnova_tela}>
        <section className={styles.slova_edinstvo}>
          <h1 className={styles.big_word}>
            Единство. Доблесть.
            <br />
            Технологии.
          </h1>
        </section>

        <h2 className={styles.bydyshe}>
          Будущее великой страны строится на уважении к традициям
          <br />и равном доступе к инновациям. С Днем народного единства!
        </h2>

        <div className={styles.Yznat}>
          <a href="#stats" className={styles.Yznat_knopka}>
            <b>Узнать больше</b>
          </a>
        </div>

        <section className={styles.korobochki}>
          <article className={styles.box_one}>
            <div className={styles.group}>
              <h3 className={styles.box_word2_one}>
                <b>Единство — наша сила</b>
              </h3>
              <p className={styles.box_word2_two}>
                Сплоченность народа — это фундамент, на котором стоит Россия. Мы
                разные, но нас объединяют общие ценности, история и стремление к
                созиданию.
              </p>
            </div>
          </article>

          <article className={styles.box_one}>
            <div className={styles.group}>
              <h3 className={styles.box_word2_one}>
                <b>Доблесть — наше наследие</b>
              </h3>
              <p className={styles.box_word2_two}>
                Мы помним подвиги предков и чтим героев современности. Честь,
                отвага и верность долгу — это качества, которые передаются из
                поколения в поколение.
              </p>
            </div>
          </article>

          <article className={styles.box_one}>
            <div className={styles.group}>
              <h3 className={styles.box_word2_one}>
                <b>Технологии — наше будущее</b>
              </h3>
              <p className={styles.box_word2_two}>
                Сегодня прогресс служит каждому. Мы создаем среду, где цифровые
                возможности и инновации открыты для всех граждан, независимо от
                места проживания.
              </p>
            </div>
          </article>
        </section>

        <section id="stats" className={styles.stats_section}>
          <h2 className={styles.section_title}>Страна в цифрах</h2>
          <p className={styles.section_subtitle}>
            Несколько фактов, которые показывают масштаб и многообразие России.
          </p>

          <div className={styles.stats_grid}>
            <div className={styles.stat_card}>
              <div className={styles.stat_value}>190+</div>
              <div className={styles.stat_label}>
                народов и национальностей проживает в России
              </div>
              <div className={styles.stat_source}>Перепись населения, 2021</div>
            </div>

            <div className={styles.stat_card}>
              <div className={styles.stat_value}>89</div>
              <div className={styles.stat_label}>
                субъектов Российской Федерации
              </div>
              <div className={styles.stat_source}>Конституция РФ, ст. 65</div>
            </div>

            <div className={styles.stat_card}>
              <div className={styles.stat_value}>16</div>
              <div className={styles.stat_label}>
                официальных языков и языков с особым статусом
              </div>
              <div className={styles.stat_source}>
                Закон о языках народов РФ
              </div>
            </div>

            <div className={styles.stat_card}>
              <div className={styles.stat_value}>2025</div>
              <div className={styles.stat_label}>
                Год защитника Отечества в России
              </div>
              <div className={styles.stat_source}>Указ Президента РФ</div>
            </div>
          </div>
        </section>

        <section className={styles.directions_section}>
          <h2 className={styles.section_title}>Куда движется страна</h2>
          <p className={styles.section_subtitle}>
            Четыре направления, в которых сегодня работают люди по всей стране.
          </p>

          <div className={styles.directions_grid}>
            <article className={styles.direction_card}>
              <h3 className={styles.direction_title}>Наука и инженерия</h3>
              <p className={styles.direction_text}>
                Российские учёные и инженеры создают технологии для энергетики,
                медицины, космоса и связи. Разработки НИИ и университетов
                внедряются в промышленность и повседневную жизнь.
              </p>
            </article>

            <article className={styles.direction_card}>
              <h3 className={styles.direction_title}>Культура и традиции</h3>
              <p className={styles.direction_text}>
                Народные промыслы, театры, музеи и библиотеки сохраняют
                культурный код страны. В регионах работают дома культуры и
                творческие студии для детей и взрослых.
              </p>
            </article>

            <article className={styles.direction_card}>
              <h3 className={styles.direction_title}>Образование и знания</h3>
              <p className={styles.direction_text}>
                Школы, колледжи и вузы доступны по всей стране. Онлайн-платформы
                и центры цифрового образования позволяют учиться из любого
                региона.
              </p>
            </article>

            <article className={styles.direction_card}>
              <h3 className={styles.direction_title}>Цифровые сервисы</h3>
              <p className={styles.direction_text}>
                Государственные услуги, медицина, транспорт и финансы
                переводятся в цифровой формат. Сервисы работают через порталы и
                мобильные приложения.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.timeline_section}>
          <h2 className={styles.section_title}>Коротко о главном</h2>
          <p className={styles.section_subtitle}>
            Несколько дат, которые объясняют, почему 4 ноября — важный день.
          </p>

          <div className={styles.timeline}>
            <div className={styles.timeline_item}>
              <div className={styles.timeline_year}>1612</div>
              <div className={styles.timeline_text}>
                Ополчение Кузьмы Минина и Дмитрия Пожарского освободило Москву.
                Это событие стало основой для праздника Дня народного единства.
              </div>
            </div>

            <div className={styles.timeline_item}>
              <div className={styles.timeline_year}>2005</div>
              <div className={styles.timeline_text}>
                День народного единства — 4 ноября — учреждён федеральным законом
                и впервые отмечался как государственный праздник.
              </div>
            </div>

            <div className={styles.timeline_item}>
              <div className={styles.timeline_year}>2020</div>
              <div className={styles.timeline_text}>
                Поправки в Конституцию закрепили защиту исторической памяти и
                культурного наследия народов России.
              </div>
            </div>

            <div className={styles.timeline_item}>
              <div className={styles.timeline_year}>2025</div>
              <div className={styles.timeline_text}>
                Год защитника Отечества. Проходят мероприятия, посвящённые
                подвигам и преемственности поколений.
              </div>
            </div>
          </div>
        </section>

        <section className={styles.cta_section}>
          <h2 className={styles.cta_title}>
            Узнайте больше о героях и достижениях
          </h2>
          <p className={styles.cta_text}>
            Истории людей, которые делают страну сильнее — в разделах о героях и
            прогрессе.
          </p>
          <div className={styles.cta_buttons}>
            <a href="/heroes" className={styles.cta_button}>
              Герои
            </a>
            <a href="/progress" className={styles.cta_button_secondary}>
              Прогресс
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}