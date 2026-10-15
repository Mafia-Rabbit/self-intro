import Head from "next/head";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

const accents = ["#c8f169", "#7fd1ff", "#ffb86b", "#f58ac0"];

const skills = [
  "Python",
  "C",
  "C++ / C#",
  "Java",
  "Unity",
  "HTML / CSS",
  "TensorFlow",
  "OpenCV",
];

const works = [
  {
    tag: "卒業研究",
    title: "ゲーム中の「力み」の可視化",
    desc: "「腕を激しく動かす人ほど成績が悪い」という仮説を検証するため、腕時計型センサー・操作履歴・画面録画を同期させた実験環境を構築。映像からフレーム単位で秒間ダメージを算出して負の相関を立証し、「力み」を画面表示して上達を助けるツールを提案しました。",
  },
  {
    tag: "大学3年次の授業",
    title: "運動計測デバイス連動のリアルタイム通信アプリ",
    desc: "飛行効率に関する仮説を検証するため、運動計測デバイスと連動するリアルタイム通信アプリを開発しました。",
  },
  {
    tag: "大学2年次のインターン",
    title: "AIコースの教材・デモプログラム",
    desc: "AIコースの教材とデモプログラムを提案し、体験用デモとして採用されました。",
  },
];

export default function Home() {
  const [picked, setPicked] = useState(0);
  const [accent, setAccent] = useState(accents[0]);
  const current = works[picked];
  const marquee = [...skills, ...skills];

  return (
    <>
      <Head>
        <title>佐藤元輝 | Portfolio</title>
        <meta
          name="description"
          content="佐藤元輝の自己紹介ポートフォリオ。仮説をデータで検証し、形にするエンジニア志望。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="佐藤元輝 | Portfolio" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page} style={{ "--accent": accent }}>
        <div className={`${styles.orb} ${styles.floaty}`} aria-hidden="true" />
        <div className={`${styles.square} ${styles.drift}`} aria-hidden="true" />

        <header className={styles.header}>
          <div className={styles.logo}>GENKI SATO</div>
          <nav className={styles.nav}>
            <a href="#about">About</a>
            <a href="#works">Works</a>
            <a href="#career">Career</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className={styles.hero}>
          <p className={`${styles.eyebrow} ${styles.rise}`}>
            ENGINEER × EDUCATION × DATA
          </p>
          <h1 className={`${styles.h1} ${styles.rise}`}>
            仮説を、
            <br />
            データで確かめ、
            <br />
            形にする。
          </h1>
          <p className={`${styles.lead} ${styles.rise}`}>
            佐藤 元輝 — エンジニア志望。目に見えない課題やアイデアを技術で「形」にし、人の役に立つモノづくりに携わりたいと考えています。
          </p>
          <a href="#works" className={`${styles.cta} ${styles.rise}`}>
            作品を見る
          </a>
        </section>

        <div className={styles.marqueeWrap} aria-label="スキル">
          <div className={styles.track}>
            {marquee.map((s, i) => (
              <span key={i} className={styles.skill}>
                {s} <span className={styles.slash}>/</span>
              </span>
            ))}
          </div>
        </div>

        <section id="about" className={`${styles.section} ${styles.about}`}>
          <h2 className={styles.h2}>About</h2>
          <div className={styles.aboutBody}>
            <p>
              私の強みは、仮説をデータで検証し、次の行動や具体的な提案につなげる力です。
            </p>
            <p>
              大学2年次のインターンで作成したAIプログラムが体験用デモとして採用され、卒業研究ではセンサーデータの分析から「力み」を可視化する上達支援ツールを提案しました。自分の作ったものが実際に動き、誰かの体験を支える喜びが、エンジニアを志す原点です。
            </p>
          </div>
        </section>

        <section id="works" className={styles.section}>
          <h2 className={styles.h2}>Works</h2>
          <div className={styles.works}>
            <div className={styles.workList}>
              {works.map((w, i) => (
                <button
                  key={w.title}
                  type="button"
                  onClick={() => setPicked(i)}
                  className={`${styles.card} ${styles.workBtn} ${
                    i === picked ? styles.active : ""
                  }`}
                >
                  <span className={styles.no}>0{i + 1}</span>
                  <span className={styles.workTitle}>{w.title}</span>
                </button>
              ))}
            </div>
            <div className={styles.detail} key={picked}>
              <p className={styles.tag}>{current.tag}</p>
              <h3 className={styles.h3}>{current.title}</h3>
              <p>{current.desc}</p>
            </div>
          </div>
        </section>

        <section id="career" className={styles.section}>
          <h2 className={styles.h2}>Career</h2>
          <div className={styles.career}>
            <div className={`${styles.card} ${styles.box} ${styles.wide}`}>
              <p className={styles.period}>2023.08 – 2026.03</p>
              <h3 className={styles.h3s}>
                株式会社これから — コンテンツ資料作成(3名チーム)
              </h3>
              <p>
                児童生徒への指導、教材・デジタルコンテンツの開発、研修の企画・資料作成を担当。TensorFlowやOpenCVで顔認識システムや犬猫判別モデルを作成し、現在もコース体験のデモ資料として運用されています。
              </p>
            </div>
            <div className={`${styles.card} ${styles.box}`}>
              <p className={styles.period}>2022.04 – 2026.03</p>
              <h3 className={styles.h3s}>東京工科大学 卒業</h3>
            </div>
            <div className={`${styles.card} ${styles.box}`}>
              <p className={styles.period}>2019.04 – 2022.03</p>
              <h3 className={styles.h3s}>東京都立山崎高等学校 卒業</h3>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <h2 className={styles.big}>Let&apos;s build something.</h2>
          <p>ご連絡先は準備中です。</p>
          <div className={styles.swatches} role="group" aria-label="アクセント色">
            {accents.map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`アクセント色 ${c}`}
                aria-pressed={c === accent}
                onClick={() => setAccent(c)}
                className={styles.swatch}
                style={{
                  background: c,
                  outline: c === accent ? "2px solid #fff" : "none",
                }}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
