import Image from "next/image";
import type { ReactNode } from "react";

// Pitch page for pilot partners (conference organisers and hotels). Copy
// follows the business plan (Plus One repo, docs/business-plan.md); no prices
// until they are agreed with organisers.

/** The clickable demo. It sits behind the staging password, so share that too. */
const DEMO_URL = "https://plusone-6a2jr.projectbeta.co.uk/";

/** Address for enquiries, the page's main call to action. */
const CONTACT_EMAIL = "info@plus1connect.com";
const CONTACT_URL = `mailto:${CONTACT_EMAIL}?subject=PlusOne%20Connect`;

const day = [
  {
    time: "08:30",
    title: "Morning run along the Thames",
    meet: "Hotel lobby",
    going: 6,
    photo: "running-2.jpg",
  },
  { time: "09:30", title: "Coffee & walk", meet: "South Bank", going: 4, photo: "coffee-time.jpg" },
  {
    time: "11:00",
    title: "Thames sightseeing cruise",
    meet: "Westminster Pier",
    going: 9,
    photo: "river-cruise-3.jpg",
    tag: "Book in app",
  },
  {
    time: "12:30",
    title: "Plus One lunch at Borough Market",
    meet: "Market entrance",
    going: 11,
    photo: "lunch-borough-market.jpg",
  },
  {
    time: "14:00",
    title: "Shopping in Covent Garden",
    meet: "Covent Garden",
    going: 5,
    photo: "shopping-covent-garden.jpg",
  },
  {
    time: "15:30",
    title: "Afternoon tea",
    meet: "Conference hotel",
    going: 8,
    photo: "afternoon-tea-2.jpg",
    tag: "Hotel",
  },
  {
    time: "18:00",
    title: "Drinks before our partners finish",
    meet: "Near the venue",
    going: 12,
    photo: "drinks.jpg",
  },
];

const steps = [
  {
    title: "Bringing someone with you?",
    text: "You ask the question at registration or in pre-event emails. One line, no extra programme to run.",
  },
  {
    title: "A private invitation",
    text: "The delegate shares a secure link with the person travelling with them. Only your conference's companions get in.",
  },
  {
    title: "Pick a plan, join in one tap",
    text: "Runs, cruises, lunches, museums, afternoon tea, co-working. Hotel and organiser activities sit next to ones companions suggest.",
  },
  {
    title: "Meet the group",
    text: "Each activity has its own group chat to agree where to meet. The community closes when the conference ends.",
  },
];

const safety = [
  "Conference-specific invitation links",
  "Group chats per activity, no private messaging",
  "No swiping, no profile browsing, no dating features",
  "Report, block and moderation from day one",
  "Hotel and organiser activities clearly verified",
  "Communities close when the event ends",
];

const metrics = [
  "Companions who register",
  "Companions who join at least one activity",
  "Activities created by companions",
  "Participants per activity",
  "Group chat engagement",
  "Hotel activity participation",
  "Satisfaction and safety incidents",
  "Effect on pre and post-conference stays",
];

export default function Pilot() {
  return (
    <div className="overflow-x-clip bg-paper">
      <header className="sticky top-0 z-20 border-b border-stone/70 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Image
            src="/brand/plusone-connect_horizontal_full-colour.svg"
            alt="PlusOne Connect"
            width={380}
            height={136}
            priority
            className="h-12 w-auto"
          />
          <nav className="hidden gap-7 lg:flex">
            {[
              ["#how", "How it works"],
              ["#organisers", "Organisers"],
              ["#hotels", "Hotels"],
              ["#pilot", "The pilot"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="eyebrow text-[12px] text-muted hover:text-charcoal"
              >
                {label}
              </a>
            ))}
          </nav>
          <a href={CONTACT_URL} className="btn btn-dark px-5 py-2.5 text-[12px]">
            Talk to us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
        <div>
          <p className="eyebrow text-sage-ink">
            The companion experience platform for business events
          </p>
          <h1 className="mt-5 text-4xl leading-[1.1] font-normal tracking-tight sm:text-5xl md:text-6xl">
            While they conference,
            <br />
            you connect.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            A private community for the people who travel with your delegates. They discover things
            to do, join a group in one tap and enjoy the city together, while the conference gets on
            with its programme.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={CONTACT_URL} className="btn btn-dark">
              Talk to us
            </a>
            <a href="#pilot" className="btn btn-line">
              Run a pilot with us
            </a>
          </div>
        </div>
        <PhoneMock />
      </section>

      {/* The need */}
      <section className="bg-charcoal text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div>
            <p className="eyebrow text-sage">The forgotten conference traveller</p>
            <h2 className="mt-4 text-3xl leading-tight font-normal tracking-tight sm:text-4xl">
              Many delegates travel with someone. The conference is built for only one of them.
            </h2>
          </div>
          <div className="flex flex-col gap-5 text-paper/80">
            <p>
              Partners, friends and relatives fly to the same city and stay in the same hotel. Then
              they can spend eight hours or more a day on their own somewhere they don&apos;t know.
            </p>
            <p>
              The city is full of things to do. What&apos;s missing is someone to do them with.
              Traditional accompanying-person programmes help, but one fixed itinerary rarely suits
              everyone, and they take real work to organise.
            </p>
            <p className="border-l border-sage pl-4 text-paper">
              PlusOne Connect gives companions their own experience: the conference creates the
              community, companions choose what interests them, groups form, and hotels and local
              partners fill in the rest.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <SectionTitle eyebrow="How it works" title="Discover. Join. Chat. Meet. Experience." />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-2xl border border-stone bg-white/50 p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-sage text-sm font-medium">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-normal">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted">
          A mobile web app: it opens from the invitation link, with nothing to download.
        </p>
      </section>

      {/* A day in London */}
      <section className="bg-peach/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionTitle
            eyebrow="A day in London"
            title="What's happening today?"
            text="Each activity comes with a meeting point, a map, a suggested itinerary and booking links where tickets are needed. Companions pick what suits them."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {day.map((a) => (
              <li key={a.time} className="flex gap-4 rounded-2xl bg-paper p-3">
                <Image
                  src={`/photos/thumbs/${a.photo}`}
                  alt=""
                  width={160}
                  height={160}
                  className="h-20 w-20 shrink-0 rounded-xl object-cover"
                />
                <div className="min-w-0">
                  <p className="eyebrow text-[11px] text-muted">
                    {a.time}
                    {a.tag && <span className="ml-2 text-sage-ink">· {a.tag}</span>}
                  </p>
                  <p className="mt-1 leading-snug font-normal">{a.title}</p>
                  <p className="mt-1 text-xs text-muted">
                    {a.meet} · {a.going} going
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Value */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-20 sm:px-6 md:grid-cols-2">
        <ValueCard
          id="organisers"
          eyebrow="For conference organisers"
          title="Extend the conference experience beyond the delegate."
          points={[
            "A better trip for delegates who bring someone, especially at international, multi-day events.",
            "A benefit that sets your conference apart.",
            "A modern alternative to a companion programme, without sourcing suppliers or managing bookings.",
            "More reasons to come early or stay on: good for bleisure and for your destination partners.",
          ]}
        />
        <ValueCard
          id="hotels"
          eyebrow="For conference hotels"
          title="Your conference guests aren't only the delegates."
          points={[
            "Reach the companions who leave the hotel each morning, with your own experiences: yoga, spa, lunch, afternoon tea, cocktails.",
            "Turn the lounge into a co-working morning, so remote workers stay, eat and drink in-house.",
            "Promote packages like Stay the Weekend to turn conference nights into leisure stays.",
            "See engagement and bookings from a guest group you can't reach today.",
          ]}
          photo="/photos/afternoon-tea.jpg"
        />
      </section>

      {/* Safety */}
      <section className="border-y border-stone">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-sage-ink">Safe by design</p>
            <h2 className="mt-4 text-3xl leading-tight font-normal tracking-tight sm:text-4xl">
              Connect through experiences, not profiles.
            </h2>
            <p className="mt-5 text-muted">
              It should feel like a trusted social club attached to your conference, not an open
              social network. Friendship, community, shared experiences.
            </p>
          </div>
          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {safety.map((s) => (
              <li key={s} className="flex gap-3 rounded-xl bg-white/50 p-4 text-sm">
                <Check />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The pilot */}
      <section id="pilot" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow="The pilot"
          title="One conference. Real companions. Clear results."
          text="We're looking for a first international conference, of around 500 to 2,000 delegates over three days or more, and its conference hotel."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <PilotCard title="The organiser">
            Asks &ldquo;Bringing someone with you?&rdquo; during registration and pre-event
            communications, so delegates can pass the invitation on.
          </PilotCard>
          <PilotCard title="The hotel">
            Offers a handful of experiences during the conference, such as a yoga session, a
            co-working morning or afternoon tea, and an extended-stay offer.
          </PilotCard>
          <PilotCard title="PlusOne Connect">
            Runs the companion community before and during the event, then reports what happened.
          </PilotCard>
        </div>

        <div className="mt-12 grid gap-10 rounded-3xl bg-charcoal p-8 text-paper sm:p-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-sage">What we measure</p>
            <ul className="mt-5 grid gap-2.5 text-sm text-paper/85">
              {metrics.map((m) => (
                <li key={m} className="flex gap-3">
                  <span className="mt-2 h-px w-4 shrink-0 bg-sage" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="eyebrow text-sage">The real question</p>
            <p className="mt-4 text-2xl leading-snug font-normal tracking-tight">
              Did PlusOne Connect help people who might have spent the day alone connect with others
              and enjoy shared experiences?
            </p>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener"
              className="btn mt-8 border border-paper text-paper hover:bg-paper hover:text-charcoal"
            >
              Try the demo
            </a>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative overflow-hidden bg-sage/25">
        <Image
          src="/brand/plusone-connect_icon_full-colour.svg"
          alt=""
          width={121}
          height={121}
          className="pointer-events-none absolute -right-20 -bottom-24 w-96 opacity-40"
        />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <p className="eyebrow text-sage-ink">Are you bringing a plus-one?</p>
          <h2 className="mt-5 text-3xl leading-tight font-normal tracking-tight sm:text-5xl">
            They have their conference.
            <br />
            You have your community.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted">
            Organising a conference or running a conference hotel? Tell us about your event.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={CONTACT_URL} className="btn btn-dark">
              Talk to us
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-xs text-muted sm:px-6">
        <Image
          src="/brand/plusone-connect_icon_full-colour.svg"
          alt="PlusOne Connect"
          width={121}
          height={121}
          className="h-10 w-10"
        />
        <p>The companion experience platform for business events.</p>
        <a href={CONTACT_URL} className="text-charcoal underline-offset-4 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-sage-ink">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight font-normal tracking-tight sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-5 text-muted">{text}</p>}
    </div>
  );
}

function ValueCard({
  id,
  eyebrow,
  title,
  points,
  photo,
}: {
  id: string;
  eyebrow: string;
  title: string;
  points: string[];
  photo?: string;
}) {
  return (
    <article
      id={id}
      className="flex scroll-mt-20 flex-col overflow-hidden rounded-3xl border border-stone bg-white/50"
    >
      <Image
        src={photo ?? "/photos/river-cruise.jpg"}
        alt=""
        width={960}
        height={698}
        className="h-52 w-full object-cover"
      />
      <div className="p-8">
        <p className="eyebrow text-sage-ink">{eyebrow}</p>
        <h3 className="mt-3 text-2xl leading-snug font-normal tracking-tight">{title}</h3>
        <ul className="mt-6 flex flex-col gap-3 text-sm">
          {points.map((p) => (
            <li key={p} className="flex gap-3">
              <Check />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function PilotCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-stone p-6">
      <p className="eyebrow text-muted">{title}</p>
      <p className="mt-3 text-sm">{children}</p>
    </div>
  );
}

function Check() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="mt-0.5 h-4 w-4 shrink-0 text-sage-ink"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden
    >
      <path d="M3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}

/** A still of the programme screen, so the pitch shows the product at a glance. */
function PhoneMock() {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="absolute -inset-6 -z-0 rounded-[3rem] bg-peach/60 blur-2xl" aria-hidden />
      <div className="relative rounded-[2.6rem] border-[10px] border-charcoal bg-paper shadow-2xl shadow-charcoal/25">
        <div className="px-5 pt-6 pb-6 text-center">
          <Image
            src="/brand/plusone-connect_horizontal_full-colour.svg"
            alt=""
            width={380}
            height={136}
            className="mx-auto h-9 w-auto"
          />
          <p className="eyebrow mt-4 text-[8px] text-muted">Thursday 16 October · London</p>
          <p className="mt-1.5 text-xl leading-tight font-normal tracking-tight">
            What&apos;s on today, Sarah?
          </p>
          <p className="mt-1.5 text-[11px] text-muted">The congress can wait.</p>
          <div className="mt-4 flex flex-col gap-2 text-left">
            {day.slice(1, 4).map((a) => (
              <div
                key={a.time}
                className="flex gap-2.5 rounded-xl border border-stone bg-white/60 p-2"
              >
                <Image
                  src={`/photos/thumbs/${a.photo}`}
                  alt=""
                  width={160}
                  height={160}
                  className="h-12 w-12 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0">
                  <p className="eyebrow text-[8px] text-muted">{a.time}</p>
                  <p className="truncate text-[12px] font-normal">{a.title}</p>
                  <p className="text-[10px] text-muted">{a.going} going</p>
                </div>
              </div>
            ))}
          </div>
          <span className="btn btn-line mt-4 block px-4 py-2 text-[9px]">Count me in</span>
        </div>
      </div>
    </div>
  );
}
