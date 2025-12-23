import Head from "next/head";
import Footer from "../components/landing/Footer";

export default function Rekvizity() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Head>
        <title>Реквизиты ИП</title>
        <meta name="description" content="Реквизиты индивидуального предпринимателя" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="mx-auto max-w-3xl px-6 py-12 sm:py-16">
        <h1 className="text-2xl font-semibold">Реквизиты</h1>

        <div className="mt-8 space-y-8 text-sm sm:text-base">
          <section>
            <h2 className="mb-3 text-base font-medium">Контакты</h2>
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-3">
              <dt className="text-muted-foreground">Телефон</dt>
              <dd className="sm:col-span-2">+7 980 435-14-25</dd>

              <dt className="text-muted-foreground">Email</dt>
              <dd className="sm:col-span-2">support@chapax.ai</dd>
            </dl>
          </section>

          <section>
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-3">
              <dt className="text-muted-foreground">ОГРНИП</dt>
              <dd className="sm:col-span-2">321774600060085</dd>

              <dt className="text-muted-foreground">ИНН</dt>
              <dd className="sm:col-span-2">771599188105</dd>

              <dt className="text-muted-foreground">Вид предпринимательства</dt>
              <dd className="sm:col-span-2">Индивидуальный предприниматель</dd>

              <dt className="text-muted-foreground">Дата регистрации</dt>
              <dd className="sm:col-span-2">4 февраля 2021 г.</dd>

              <dt className="text-muted-foreground">Регистратор</dt>
              <dd className="sm:col-span-2">Межрайонная инспекция Федеральной налоговой службы № 46 по г. Москве</dd>

              <dt className="text-muted-foreground">Дата постановки на учёт</dt>
              <dd className="sm:col-span-2">4 февраля 2021 г.</dd>

              <dt className="text-muted-foreground">Наименование налогового органа</dt>
              <dd className="sm:col-span-2">Инспекция ФНС России № 15 по г. Москве</dd>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium">Сведения Росстата</h2>
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-3">
              <dt className="text-muted-foreground">ОКПО</dt>
              <dd className="sm:col-span-2">2005426482</dd>

              <dt className="text-muted-foreground">ОКАТО</dt>
              <dd className="sm:col-span-2">45280563000</dd>

              <dt className="text-muted-foreground">ОКТМО</dt>
              <dd className="sm:col-span-2">45354000000</dd>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium">Сведения о регистрации в ПФР</h2>
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-3">
              <dt className="text-muted-foreground">Регистрационный номер</dt>
              <dd className="sm:col-span-2">1175560323</dd>

              <dt className="text-muted-foreground">Дата регистрации</dt>
              <dd className="sm:col-span-2">5 февраля 2021 г.</dd>

              <dt className="text-muted-foreground">Наименование территориального органа</dt>
              <dd className="sm:col-span-2">Отделение Фонда пенсионного и социального страхования Российской Федерации по г. Москве и Московской области</dd>
            </dl>
          </section>

          <section>
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-3">
              <dt className="text-muted-foreground">Специальный налоговый режим</dt>
              <dd className="sm:col-span-2">Применяется УСН</dd>
            </dl>
          </section>

          <section>
            <h2 className="mb-3 text-base font-medium">Сведения МСП</h2>
            <dl className="grid grid-cols-1 gap-y-2 sm:grid-cols-3 sm:gap-3">
              <dt className="text-muted-foreground">Дата включения</dt>
              <dd className="sm:col-span-2">10 марта 2021 г.</dd>

              <dt className="text-muted-foreground">Категория субъекта</dt>
              <dd className="sm:col-span-2">Микропредприятие</dd>
            </dl>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


