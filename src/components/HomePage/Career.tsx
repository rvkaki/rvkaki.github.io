import { useState } from "react";
import TimelineStep from "./TimelineStep";

const career_info = {
  Exeedme: {
    company: "Exeedme",
    link: "https://exeedme.com",
    short_role: "Lead Frontend Developer",
    long_role: "Lead Frontend Developer",
    short_date_range: "2021 - Present",
    long_date_range: "April, 2021 - Present",
    description:
      "I left Coletiv to come work at Exeedme, a web3 company building products for gamers. In my time here I had the opportunity to work with a lot of different technologies. I started building Exeedme's platform using React and ChakraUI, built user interfaces to interact with contracts on the blockchain.",
  },
  Coletiv: {
    company: "Coletiv",
    link: "https://coletiv.com",
    short_role: "Web Developer",
    long_role: "Web Developer",
    short_date_range: "2021",
    long_date_range: "March, 2021 - April, 2021",
    description:
      "After a few months of applying I started working at Coletiv, a startup from Porto focused on building products from scratch. This was my first job and I was really thankful for the opportunity, although I decided to leave after just a month. In my time here I worked on building a landing page with Gatsby for one of their in-house products.",
  },
  Sprint: {
    company: "Sprint",
    link: "https://sprinttravelviagens.com",
    short_role: "Freelancer",
    long_role: "Freelancer",
    short_date_range: "2020 - 2021",
    long_date_range: "October, 2020 - March, 2021",
    description:
      "I was hired by Sprint to build 2 websites for their rent-a-car and travel agency services. This was a big challenge for me since it was my first freelancing (and really) professional experience. It was a tough one but it really helped me grow as a developer since I had to do everything from scratch on my own. I was responsible for the design, frontend, backend and devops of both applications. It also allowed me to learn some new technologies: Figma, React + ChakraUI, Strapi, Digital Ocean.",
  },
  University: {
    company: "University of Minho",
    link: "https://www.uminho.pt",
    short_role: "B.S. Computer Science",
    long_role: "Bachelor's Degree in Computer Science",
    short_date_range: "2016 - 2019",
    long_date_range: "September, 2016 - December, 2019",
    description:
      "I finished my Bachelor's Degree in Computer Science at University of Minho with an average of 14.0 out of 20. This was my first interaction with programming and computer science and I think it really helped mostly with the fundamentals. After graduating I enrolled in a Masters Degree in Software Engineering but dropped out after the first semester and decided to start teaching myself in web development.",
  },
};

const order = ["Exeedme", "Coletiv", "Sprint", "University"] as const;

export default function Career() {
  const [curIndex, setCurIndex] = useState(0);
  const current = career_info[order[curIndex]];

  return (
    <section className="w-full h-screen py-24 gap-12 flex flex-col items-center">
      <h2 className="text-3xl dark:text-amber-300 text-amber-600 font-semibold">
        Experience
      </h2>
      <div className="flex-1 flex w-full gap-16 items-center">
        <div className="flex flex-col h-full w-fit">
          {order.map((item, idx) => (
            <TimelineStep
              key={item}
              company={career_info[item].company}
              role={career_info[item].short_role}
              dateRange={career_info[item].short_date_range}
              onClick={() => setCurIndex(idx)}
              isActive={curIndex === idx}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col">
          <span className="text-2xl max-w-[30ch] text-zinc-900 dark:text-zinc-50">
            {current.long_role}{" "}
            <a
              href={current.link}
              target="_blank"
              className="dark:text-amber-300 text-amber-600 hover:underline"
            >
              @{current.company}
            </a>
          </span>
          <span className="dark:text-zinc-400 text-zinc-500 italic">
            {current.long_date_range}
          </span>
          <p className="mt-8 dark:text-zinc-300 text-zinc-600">
            {current.description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button
            disabled={curIndex === 0}
            className="dark:text-zinc-200 text-zinc-600 dark:disabled:text-zinc-600 disabled:text-zinc-400 text-2xl disabled:cursor-not-allowed dark:hover:text-amber-300 hover:text-amber-600 hover:scale-125"
            onClick={() => setCurIndex((prev) => prev - 1)}
          >
            {/* Arrow Up */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
            >
              <path d="M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"></path>
            </svg>
          </button>
          <button
            disabled={curIndex === order.length - 1}
            className="dark:text-zinc-200 text-zinc-600 dark:disabled:text-zinc-600 disabled:text-zinc-400 text-2xl disabled:cursor-not-allowed dark:hover:text-amber-300 hover:text-amber-600 hover:scale-125"
            onClick={() => setCurIndex((prev) => prev + 1)}
          >
            {/* Arrow Down */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
            >
              <path d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
