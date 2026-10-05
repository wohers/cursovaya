import { Footer } from "../../shared/ui/Footer/Footer";
import { Header } from "../../shared/ui/Header/Header";
import styles from "./styles.module.css";
import logoNknh from "../../assets/logo-nizhnekamskneftehim 1.png";
import logoTaneco from "../../assets/logo-taneco.webp";
import logoKamaz from "../../assets/logokamaz.webp";
import logoShina from "../../assets/logo-shn.webp";
import logoTec from "../../assets/logo-tez.webp";
import logoHimgrad from "../../assets/logo-him.webp";
import Rectangle from "../../assets/Rectangle 6.png";

const factories = [
  {
    id: "nknh",
    name: "НижнекамскНефтехим",
    logo: logoNknh,
    before:
      "Всесоюзная ударная стройка. Первые блоки Центральной газофракционирующей установки (ЦГФУ). Нижнекамск создавался как главная база для выпуска синтетического заменителя натурального каучука.",
    now: "Крупнейший в Европе завод по производству синтетических каучуков и пластмасс. 2025 год — это эпоха «цифровых двойников». Управление происходит через ИИ, который оптимизирует расход.",
  },
  {
    id: "kamaz",
    name: "КАМАЗ",
    logo: logoKamaz,
    before:
      "Завод построен за 6 лет. В феврале 1976 года сошёл первый автомобиль. Основной упор был на дизельные грузовики грузоподъёмностью 8–10 тонн.",
    now: "Модель 54901 (поколение К5). КАМАЗ — крупнейший поставщик электробусов в Европе. Уровень автоматизации на заводе каркасов кабин достигает 80%.",
  },
  {
    id: "taneco",
    name: "ТАНЕКО",
    logo: logoTaneco,
    before:
      "Комплекс строился с 2005 года как современное нефтеперерабатывающее производство. Первая установка первичной переработки нефти запущена в 2011 году.",
    now: "Нефтеперерабатывающий комплекс с глубокой переработкой нефти. Выпускает бензины, дизельное топливо, авиакеросин и смазочные материалы. Работает с применением цифровых систем управления.",
  },
  {
    id: "shina",
    name: "Нижнекамскшина",
    logo: logoShina,
    before:
      "Первый цех запущен в 1973 году. Предприятие создавалось для обеспечения шинами грузовых автомобилей КАМАЗ и сельскохозяйственной техники.",
    now: "Современное производство шин для легковых, грузовых автомобилей и спецтехники. Входит в шинный бизнес KAMA TYRES. Значительная часть продукции поставляется на экспорт.",
  },
  {
    id: "tec",
    name: "Нижнекамская ТЭЦ",
    logo: logoTec,
    before:
      "Станция строилась вместе с промышленной площадкой Нижнекамска в 1960-х годах. Обеспечивала энергией первые нефтехимические производства.",
    now: "Крупный энергетический объект, обеспечивающий электричеством и теплом промышленную площадку и город. Работает в составе генерирующих мощностей республики.",
  },
  {
    id: "himgrad",
    name: "Технополис «Химград»",
    logo: logoHimgrad,
    before:
      "Площадка создавалась как индустриальный парк для размещения малых и средних производств в сфере нефтехимии и переработки полимеров.",
    now: "Индустриальный парк с готовой инфраструктурой для резидентов. Здесь работают десятки компаний: от переработки полимеров до высокотехнологичных производств.",
  },
];

export function Progress() {
  return (
    <>
      <Header />

      <main className={styles.osnova_tela}>
        <section className={styles.slova_edinstvo}>
          <h1 className={styles.big_word}>
            Промышленность
            <br />
            Нижнекамска
          </h1>
        </section>

        <p className={styles.bydyshe}>
          Город вырос вокруг крупнейших предприятий нефтехимии, машиностроения и
          энергетики. Ниже — как всё начиналось и что эти заводы представляют
          собой сегодня.
        </p>

        {factories.map((factory) => (
          <section key={factory.id} className={styles.niznekamsk}>
            <div className={styles.head}>
              <h2>{factory.name}</h2>
              <img src={factory.logo} alt={factory.name} />
            </div>

            <div className={styles.niznekamsk_text}>
              <div className={styles.text}>
                <p>
                  <b>Раньше</b>
                </p>
                <p>{factory.before}</p>
              </div>

              <img src={Rectangle} alt="" />

              <div className={styles.text}>
                <p>
                  <b>Сейчас</b>
                </p>
                <p>{factory.now}</p>
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}