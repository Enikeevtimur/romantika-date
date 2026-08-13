"use client";

import { useState } from "react";

const pages = [
  {
    label: "Личное послание",
    title: <>Валентина,<br /><i>это для тебя</i></>,
    text: "Есть вечера, которые хочется запомнить. И есть человек, с которым хочется их разделить.",
    action: "Открыть приглашение",
    note: "от Тимура — с нежностью",
  },
  {
    label: "Немного о вечере",
    title: <>Только ты,<br />я и <i>романтика</i></>,
    text: "Я хочу провести этот вечер рядом с тобой — красиво одеться, забыть обо всём и никуда не спешить.",
    action: "Узнать, куда мы идём",
    note: "один вечер · только для нас",
  },
  {
    label: "Место встречи",
    title: <>Ресторан<br /><i>«Романтика»</i></>,
    text: "Уютный столик, мягкий свет и долгий разговор. Остальное пусть останется маленьким сюрпризом.",
    action: "Перейти к главному",
    note: "столик на двоих",
  },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const reset = () => { setStep(0); setAccepted(false); };

  return (
    <main className="invitation">
      <div className="glow glowTop" /><div className="glow glowBottom" />
      <div className="petals petalsLeft" aria-hidden="true"><b>❦</b><b>❧</b><b>❦</b></div>
      <div className="petals petalsRight" aria-hidden="true"><b>❧</b><b>❦</b><b>❧</b></div>

      <header>
        <button className="names" onClick={reset} aria-label="Начать приглашение сначала">Тимур <span>♡</span> Валентина</button>
        <div className="counter"><strong>0{step + 1}</strong><span />04</div>
      </header>

      <section className="scene" aria-live="polite">
        {step < 3 ? (
          <article className="chapter" key={step}>
            <div className="letterCopy">
              <p className="kicker">{pages[step].label}</p>
              <h1>{pages[step].title}</h1>
              <p className="intro">{pages[step].text}</p>
              <button className="cta" onClick={() => setStep(step + 1)}>{pages[step].action}<span>→</span></button>
            </div>

            <div className="keepsake" aria-hidden="true">
              <div className="halo haloOuter" /><div className="halo haloInner" />
              <div className="envelope">
                <div className="paper">
                  <span className="paperTop">приглашение</span>
                  <span className="ornament">✦</span>
                  <strong>{step === 0 ? "для\nВалентины" : step === 1 ? "наш\nвечер" : "Романтика"}</strong>
                  <small>{pages[step].note}</small>
                </div>
                <div className="seal">Т<span>♥</span>В</div>
              </div>
              <span className="star one">✦</span><span className="star two">✧</span><span className="star three">✦</span>
            </div>
          </article>
        ) : (
          <article className="question" key="question">
            {!accepted ? <>
              <p className="kicker">Самый важный вопрос</p>
              <div className="heartMark">♥</div>
              <h1>Валентина,<br /><i>пойдёшь со мной?</i></h1>
              <p className="intro">На свидание в ресторан «Романтика». Я очень хочу провести этот вечер именно с тобой.</p>
              <p className="from">твой Тимур</p>
              <div className="buttons">
                <button className="cta" onClick={() => setAccepted(true)}>Да, с радостью <span>♥</span></button>
                <button className="quiet" onClick={() => setAccepted(true)}>Конечно, да</button>
              </div>
            </> : <div className="answer">
              <div className="celebration">✦　♥　✦</div>
              <p className="kicker">Значит, решено</p>
              <h1>До встречи<br /><i>в «Романтике»</i></h1>
              <p className="intro">Этот вечер уже стал особенным.<br />О деталях я позабочусь сам.</p>
              <p className="from">с любовью, Тимур</p>
              <button className="quiet" onClick={reset}>Прочитать ещё раз</button>
            </div>}
          </article>
        )}
      </section>

      <footer>
        <div className="progress">{[0,1,2,3].map(i => <i key={i} className={i <= step ? "on" : ""} />)}</div>
        <p>история одного прекрасного вечера</p>
      </footer>
    </main>
  );
}
