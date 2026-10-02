"use client";

import { useState } from "react";

const chapters = [
  { eyebrow: "Личное приглашение", number: "01", title: <>Валентина,<br /><em>открой коробочку</em></>, text: "Внутри — один красивый вечер, который я хочу разделить только с тобой.", button: "Открыть", card: "для тебя" },
  { eyebrow: "Внутри коробочки", number: "02", title: <>Вечер со вкусом<br /><em>и без спешки</em></>, text: "Приглушённый свет, авторская кухня, бокал вина и разговор, который не хочется заканчивать.", button: "Узнать место", card: "вечер вдвоём" },
  { eyebrow: "Место встречи", number: "03", title: <>Гастробар<br /><em>«Коробок»</em></>, text: "Тихий центр Новосибирска. Я забронирую для нас столик и обо всём позабочусь.", button: "К главному вопросу", card: "Чаплыгина, 28" },
];

export default function Home() {
  const [step, setStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const reset = () => { setStep(0); setAccepted(false); };

  return (
    <main className="invitation">
      <div className="grain" aria-hidden="true" /><div className="brick brickLeft" aria-hidden="true" /><div className="brick brickRight" aria-hidden="true" />
      <header className="topbar">
        <button className="brand" onClick={reset} aria-label="Начать приглашение сначала"><span>КОРОБОК</span><i>на двоих</i></button>
        <p className="names">Тимур <b>×</b> Валентина</p>
        <div className="counter"><strong>0{step + 1}</strong><span />04</div>
      </header>
      <section className="stage" aria-live="polite">
        {step < 3 ? (
          <article className="chapter" key={step}>
            <div className="copy">
              <p className="eyebrow">{chapters[step].eyebrow}</p><h1>{chapters[step].title}</h1>
              <p className="description">{chapters[step].text}</p>
              <button className="ovalButton" onClick={() => setStep(step + 1)}>{chapters[step].button}<span>↗</span></button>
            </div>
            <div className="visual" aria-hidden="true">
              <div className="orbit orbitOne" /><div className="orbit orbitTwo" />
              <div className="box"><div className="boxLid"><span>КОРОБОК</span><i>гастробар</i></div><div className="boxCard"><small>{chapters[step].number} / 04</small><strong>{chapters[step].card}</strong><span>Тимур · Валентина</span></div></div>
              <span className="scribble">впечатления внутри</span>
            </div>
          </article>
        ) : (
          <article className="question" key="question">
            {!accepted ? <>
              <p className="eyebrow">Главное внутри</p><span className="tinyHeart">♥</span>
              <h1>Валентина,<br /><em>пойдёшь со мной?</em></h1>
              <p className="description">На свидание в гастробар «Коробок».<br />Только ты, я и наш особенный вечер.</p><p className="signature">Твой Тимур</p>
              <div className="answers"><button className="ovalButton" onClick={() => setAccepted(true)}>Да, с радостью <span>♥</span></button><button className="textButton" onClick={() => setAccepted(true)}>Конечно, да</button></div>
            </> : <div className="accepted">
              <p className="eyebrow">Коробочка открыта</p><div className="cheers">◇　♥　◇</div>
              <h1>До встречи<br /><em>в «Коробке»</em></h1>
              <p className="description">Чаплыгина, 28 · столик на двоих<br />О времени я расскажу тебе лично.</p><p className="signature">С любовью, Тимур</p>
              <button className="textButton" onClick={reset}>Открыть ещё раз</button>
            </div>}
          </article>
        )}
      </section>
      <footer><div className="progress">{[0,1,2,3].map(item => <i key={item} className={item <= step ? "active" : ""} />)}</div><p>Новосибирск · гастробар «Коробок»</p></footer>
    </main>
  );
}
