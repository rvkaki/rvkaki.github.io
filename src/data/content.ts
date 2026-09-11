export const site = {
  name: "Ricardo Vieira",
  role: "Football data analyst and developer",
  location: "Braga, Portugal",
  email: "rjvmcv.98@gmail.com",
  url: "https://rjvieira.com",
  cv: "/cv-ricardo-vieira.pdf",
  title: "Ricardo Vieira",
  description:
    "Football data analyst and developer in Braga, Portugal. I build Pitchwatch, a public Liga Portugal analytics platform.",
  github: "https://github.com/rvkaki",
  linkedin: "https://www.linkedin.com/in/rjvmcv/",
};

/** Standfirst, then the story. First person, because it is him talking. */
export const intro = {
  standfirst:
    "I'm a football analyst and developer in Braga, looking for a job at a club or at a software company working in sports.",
  body: [
    "I've been a football fan my whole life, and more recently a basketball one too. The analytics part came from work: at Exeedme we built an analysis tool for professional CS2 teams, and that got me interested in what software like that could do. Put it next to the sports I already followed and the years I'd spent writing software, and the direction was obvious.",
    "So I took a postgraduate degree in Big Data Applied to Football and finished it in 2025 with 95/100. Since then I've been building Pitchwatch, a public analytics platform for the Liga Portugal. Liga Portugal because I'm Portuguese and it's the league I know best.",
    "Pitchwatch I built and run on my own, alongside a full-time job. Most of my working life has been on small teams though, so I'm comfortable either way. I'm open on what the day to day looks like.",
  ],
};

export type Work = {
  title: string;
  period: string;
  note?: string;
  body: string[];
  detail?: string[];
  image?: { src: string; alt: string; caption: string };
  snippet?: string;
  figures?: { value: string; label: string }[];
  links: { label: string; href: string }[];
};

export const work: Work[] = [
  {
    title: "Pitchwatch",
    period: "2026 to present",
    note: "Built and maintained solo, alongside full-time work",
    body: [
      "A public analytics platform for the Liga Portugal, covering seven seasons of event data. I do all of it: the ingestion, the models on top of it, and the match, team and player reports that make the output usable.",
      "The ingestion pipeline holds 2.8 million events across 1,872 matches, reconciled from two independent providers by fuzzy entity matching. The matchday sync runs unattended, with backfills chained behind it and recovery for events that arrive incomplete.",
    ],
    detail: [
      "An expected pass model that gives every pass a completion probability from its origin, destination, pass type qualifiers and game state. Validated on held-out matches, with calibration checked per pitch zone and separately for open play and set pieces rather than on one aggregate figure.",
      "Role clustering that groups players by how they actually play, from touch locations and per 90 output rather than the position they are listed at. It surfaces players whose listed position hides what they contribute, the kind of mismatch a position filter misses in recruitment screening.",
      "An expected points table from a double-Poisson model over match xG, separating results from underlying performance in the standings.",
      "The analyst-facing output: match reports, player and team profiles, head to head, percentile charts against position and role peer groups, pass sonars, pass zone and box-entry maps, shot maps and similarity search.",
    ],
    figures: [
      { value: "2.8M", label: "Events" },
      { value: "1,872", label: "Matches" },
      { value: "7", label: "Seasons" },
      { value: "2", label: "Providers" },
    ],
    image: {
      src: "/images/pitchwatch-network.webp",
      alt: "A Pitchwatch match report showing the passing networks for both teams",
      caption: "Passing networks for both teams, average positions weighted by combination volume.",
    },
    links: [{ label: "pitchwatch.rjvieira.com", href: "https://pitchwatch.rjvieira.com" }],
  },
  {
    title: "Tactical Versatility Index",
    period: "2025",
    note: "Postgraduate final project, with Luís Simões and Vitor Lopes",
    body: [
      "A metric measuring how versatile a player is, from which of seven action types they complete successfully in each of six functional pitch zones, normalised per minute played and bounded between 0 and 1. Applied to Opta event data from the big five leagues and the Primeira Liga, 2024/25, and published as an open source Python package.",
      "Each action type is weighted by the inverse of its 95th percentile rather than by z score, because the underlying actions are not normally distributed and rare ones like shots on target would otherwise count for almost nothing. We tested it against a Shannon entropy version of the same idea, to check whether versatility is better captured by the diversity of a player's actions or by how evenly they are spread across the pitch. Zones, action set and weights are all parameters, so it runs against other datasets.",
    ],
    snippet: `pip install tvi-footballindex

import pandas as pd
from tvi_footballindex.parsing import f24_parser
from tvi_footballindex.tvi import calculator

events = f24_parser.parsef24_folder("data/F24")
play_time = f24_parser.calculate_player_playtime(events, min_playtime=30)

actions = pd.concat([
    f24_parser.get_interceptions(events),
    f24_parser.get_tackles(events),
    f24_parser.get_aerials(events),
    f24_parser.get_progressive_passes(events),
    f24_parser.get_dribbles(events),
    f24_parser.get_key_passes(events),
    f24_parser.get_deep_completions(events),
    f24_parser.get_shots_on_target(events),
])

tvi_df, quantiles = calculator.calculate_tvi(actions, play_time)
# TVI, TVI_entropy and shannon_entropy, per player per game`,
    links: [
      { label: "tvi-footballindex on PyPI", href: "https://pypi.org/project/tvi-footballindex/" },
    ],
  },
  {
    title: "BoxScoreWatch",
    period: "2024",
    body: [
      "The basketball one. A web app for understanding what happened in an NBA game, past what the traditional box score puts on the page.",
    ],
    image: {
      src: "/images/boxscorewatch-screenshot-1.webp",
      alt: "The BoxScoreWatch game view",
      caption: "Game view, with the shot and scoring detail the box score leaves out.",
    },
    links: [
      { label: "boxscorewatch.rjvieira.com", href: "https://boxscorewatch.rjvieira.com" },
      { label: "Source", href: "https://github.com/rvkaki/boxscorewatch" },
    ],
  },
  {
    title: "SoccerStats",
    period: "2024",
    body: [
      "My first go at football match analysis, before the postgraduate degree. Explore match stats and export the visualisations as images. Pitchwatch is where all of this ended up.",
    ],
    image: {
      src: "/images/soccerstats-screenshot-1.webp",
      alt: "The SoccerStats progressive passes view",
      caption: "Progressive passes for both teams, exportable as an image.",
    },
    links: [
      { label: "soccerstats.rjvieira.com", href: "https://soccerstats.rjvieira.com" },
      { label: "Source", href: "https://github.com/rvkaki/soccerstats" },
    ],
  },
];

export type Role = {
  org: string;
  href?: string;
  role: string;
  period: string;
  place: string;
  body: string;
};

export const experience: Role[] = [
  {
    org: "Exeedme",
    href: "https://exeedme.com",
    role: "Full Stack Developer",
    period: "May 2025 to present",
    place: "Braga",
    body: "One of three developers building and running the company's products, currently ggcase.com and skinsprotocol.com, both consumer platforms in the CS2 skins market handling real money transactions. I'm involved in each feature from the initial idea and architecture through to shipping it and keeping it running afterwards, across several products at once.",
  },
  {
    org: "Forca Tech Agency",
    href: "https://forcatechagency.com/",
    role: "Full Stack Developer",
    period: "May 2024 to Jan 2025",
    place: "Remote",
    body: "Built data visualisation components and automated data processing pipelines for a fintech analytics platform. Delivered features across the stack in Next.js and TypeScript, then worked on the backend migration to NestJS, with international clients in a distributed team.",
  },
  {
    org: "Exeedme",
    href: "https://exeedme.com",
    role: "Lead Frontend Developer",
    period: "Apr 2021 to Jul 2023",
    place: "Braga",
    body: "Led front-end development across the company's projects, owning architecture and stack decisions. This is where the CS2 analysis tool came from.",
  },
];

export const education = [
  {
    title: "Postgraduate, Big Data Applied to Football",
    org: "Sports Data Campus and UCAM",
    href: "https://www.sportsdatacampus.com/",
    period: "Nov 2024 to Aug 2025",
    detail: "60 ECTS, graduated 95/100",
  },
  {
    title: "BSc Computer Science",
    org: "Universidade do Minho",
    href: "https://www.uminho.pt",
    period: "Oct 2016 to Jul 2020",
  },
];

export const toolkit = [
  {
    heading: "Football data",
    body: "Event data in Opta and StatsBomb schemas. xG and xGOT, expected pass, expected points, possession adjusted metrics, player similarity, role clustering.",
  },
  {
    heading: "Analysis and modelling",
    body: "Python, pandas, NumPy, scikit-learn, LightGBM, SQL and PostgreSQL, model validation and calibration.",
  },
  {
    heading: "Data engineering",
    body: "ETL pipelines, web scraping with Playwright, entity resolution, schema design, Docker.",
  },
  {
    heading: "Visualisation and tooling",
    body: "Custom interactive dashboards, Plotly, Tableau, Power BI, TypeScript and React.",
  },
];

export const languages = "Portuguese (native), English (fluent)";
