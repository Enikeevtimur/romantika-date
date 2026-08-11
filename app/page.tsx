"use client";

import { useState } from "react";

const steps = [
  {
    eyebrow: "У меня к тебе кое-что важное",
    title: <>Можно украсть<br />твой вечер?</>,
    text: "Я придумал маленький план. Он начинается прямо здесь — и становится лучше с каждым шагом.",
    button: "Мне уже интересно",
  },
  {
    eyebrow: "Шаг 2 · правильное настроение",
    title: <>Немного города.<br /><em>Много нас.</em></>,
    text: "Без спешки, без сложных планов. Красивый маршрут, любимая музыка и время, которое никуда не торопится.",
    button: "А что дальше?",
  },
  {
    eyebrow: "Шаг 3 · план на двоих",
    title: <>Один вечер,<br /><em>три обещания.</em></>,
    text: "",
    button: "Задать главный вопрос",
  },
];

const promises = [
  ["01", "Вкусно", "Место, где можно долго разговаривать"],
  ["02", "Красиво", "Маршрут с лучшим светом на закате"],
  ["03", "Вместе", "Телефоны в сторону, весь вечер — наш"],
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const next = () => setStep((value) => Math.min(value + 1, 3));
  const restart = () => { setAccepted(false); setStep(0); };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <button className="monogram" onClick={restart} aria-label="Начать сначала">A <span>♥</span> Т</button>
        <div className="step-count"><span>0{step + 1}</span><i />04</div>
      </header>

      <section className="stage" aria-live="polite">
        {step < 3 ? (
          <article className="card" key={step}>
            <div className="copy">
              <p className="eyebrow"><span />{steps[step].eyebrow}</p>
              <h1>{steps[step].title}</h1>
              {steps[step].text && <p className="lead">{steps[step].text}</p>}

              {step === 2 && (
                <div className="promise-list">
                  {promises.map(([number, name, description]) => (
                    <div className="promise" key={number}>
                      <span>{number}</span><strong>{name}</strong><p>{description}</p>
                    </div>
                  ))}
                </div>
              )}

              <button className="primary" onClick={next}>{steps[step].button}<span>→</span></button>
            </div>

            <div className={`visual visual-${step + 1}`} aria-hidden="true">
              <div className="orbit orbit-a" /><div className="orbit orbit-b" />
              <div className="date-card">
                <span className="tiny">только ты + я</span>
                <div className="heart">♥</div>
                <p>{step === 0 ? "есть один план" : step === 1 ? "вечер вне времени" : "идеальное свидание"}</p>
                <div className="signature">для тебя</div>
              </div>
              <span className="spark spark-a">✦</span><span className="spark spark-b">✦</span>
            </div>
          </article>
        ) : (
          <article className="final-card" key="final">
            {!accepted ? (
              <>
                <p className="eyebrow centered"><span />Финальный шаг<span /></p>
                <div className="final-heart" aria-hidden="true">♥</div>
                <h1>Пойдёшь со мной<br /><em>на свидание?</em></h1>
                <p className="lead">Дату и место я беру на себя.<br />От тебя нужно только одно маленькое «да».</p>
                <div className="actions">
                  <button className="primary yes" onClick={() => setAccepted(true)}>Да, конечно <span>♥</span></button>
                  <button className="secondary" onClick={() => setAccepted(true)}>Да, но загадочно</button>
                </div>
              </>
            ) : (
              <div className="accepted">
                <div className="confetti" aria-hidden="true">✦　♥　✦</div>
                <p className="eyebrow centered"><span />Это официально<span /></p>
                <h1>У нас<br /><em>свидание.</em></h1>
                <p className="lead">Я знал, что это будет хороший вечер.<br />Скоро пришлю все детали ♥</p>
                <button className="secondary" onClick={restart}>Посмотреть ещё раз</button>
              </div>
            )}
          </article>
        )}
      </section>

      <footer>
        <div className="progress" aria-label={`Шаг ${step + 1} из 4`}>
          {[0, 1, 2, 3].map((item) => <span key={item} className={item <= step ? "active" : ""} />)}
        </div>
        <p>Сделано с любовью · специально для тебя</p>
      </footer>
    </main>
  );
}
