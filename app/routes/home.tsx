import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  const title = "Learn Greek Mythology | Gods, Heroes, Myths, and Legends";
  const description =
    "Explore Greek mythology with detailed stories of gods, heroes, and legendary creatures. Learn about the Olympians, famous myths, epic battles, and the ancient world that inspired centuries of art and literature.";
  const canonical = "https://www.learngreekmythology.com/";
  return [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    {
      name: "keywords",
      content:
        "Greek mythology, Greek gods, Olympian gods, Greek heroes, ancient Greece, Greek myths, Greek legends, mythology stories, Hercules, Zeus, Athena, Greek creatures",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonical },
    {
      property: "og:image",
      content: "https://www.learngreekmythology.com/og-image.jpg",
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: canonical } as any,
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {
    message: "Knowledge of the ancient world, at your fingertips.",
    lastUpdatedISO: new Date().toISOString(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const lastUpdated = new Date(loaderData?.lastUpdatedISO ?? Date.now());
  const lastUpdatedDisplay = lastUpdated.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 text-amber-700">
      {/* Skip link */}
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>

      {/* Nav */}
      <header className="mb-10">
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-5 text-sm">
            <li>
              <a href="#gods" className="hover:underline">
                Gods & Goddesses
              </a>
            </li>
            <li>
              <a href="#heroes" className="hover:underline">
                Heroes
              </a>
            </li>
            <li>
              <a href="#myths" className="hover:underline">
                Famous Myths
              </a>
            </li>
            <li>
              <a href="#creatures" className="hover:underline">
                Creatures
              </a>
            </li>
            <li>
              <a href="#culture" className="hover:underline">
                Culture & Influence
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="content" className="mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Learn Greek Mythology. Gods, heroes, and timeless legends
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-amber-900">
          Discover the stories that shaped ancient Greece and continue to
          inspire the world today. From the mighty Zeus and wise Athena to the
          daring quests of Hercules and Odysseus, explore a rich tapestry of
          myths that reveal the values, beliefs, and imagination of a
          civilization.
        </p>
        <p className="mt-3 text-sm text-amber-600" aria-live="polite">
          {loaderData?.message} Last updated {lastUpdatedDisplay}.
        </p>
      </section>

      {/* Gods */}
      <section id="gods" className="mb-12">
        <h2 className="text-2xl font-bold">Greek gods and goddesses</h2>
        <p className="mt-3 text-amber-900">
          Meet the Olympian gods and other deities who ruled over the skies,
          seas, and underworld. Learn about their powers, relationships, and
          roles in mythology.
        </p>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2">
          <li className="rounded-lg border border-red-200 p-5">
            <h3 className="font-semibold">Zeus</h3>
            <p className="mt-2 text-amber-900">
              King of the gods and ruler of the skies, known for his
              thunderbolts and leadership of Olympus.
            </p>
          </li>
          <li className="rounded-lg border border-red-200 p-5">
            <h3 className="font-semibold">Athena</h3>
            <p className="mt-2 text-amber-900">
              Goddess of wisdom, strategy, and crafts, often associated with the
              city of Athens.
            </p>
          </li>
        </ul>
      </section>

      {/* Heroes */}
      <section id="heroes" className="mb-12">
        <h2 className="text-2xl font-bold">Legendary heroes</h2>
        <p className="mt-3 text-amber-900">
          Brave warriors and cunning adventurers whose deeds became the
          foundation of epic tales.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Hercules and the Twelve Labors</li>
          <li>Perseus and the slaying of Medusa</li>
          <li>Theseus and the Minotaur</li>
          <li>Jason and the quest for the Golden Fleece</li>
        </ul>
      </section>

      {/* Myths */}
      <section id="myths" className="mb-12">
        <h2 className="text-2xl font-bold">Famous Greek myths</h2>
        <p className="mt-3 text-amber-900">
          Explore well-known stories that have been passed down for thousands of
          years.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          <li className="rounded border border-red-200 p-4">
            <strong>The Odyssey</strong>
            <p className="text-amber-900 mt-1">
              Odysseus’s long journey home from the Trojan War, filled with
              trials and adventures.
            </p>
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>The Iliad</strong>
            <p className="text-amber-900 mt-1">
              The epic of the Trojan War and the wrath of Achilles.
            </p>
          </li>
        </ul>
      </section>

      {/* Creatures */}
      <section id="creatures" className="mb-12">
        <h2 className="text-2xl font-bold">Mythical creatures</h2>
        <p className="mt-3 text-amber-900">
          Meet the fantastic beings of Greek mythology, from fearsome monsters
          to magical animals.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>The Hydra, a multi-headed serpent defeated by Hercules</li>
          <li>Pegasus, the winged horse born from Medusa’s blood</li>
          <li>The Chimera, a fire-breathing hybrid beast</li>
          <li>The Sirens, whose songs lured sailors to their doom</li>
        </ul>
      </section>

      {/* Culture */}
      <section id="culture" className="mb-12">
        <h2 className="text-2xl font-bold">
          Cultural influence of Greek mythology
        </h2>
        <p className="mt-3 text-amber-900">
          Greek myths have shaped art, literature, theater, and philosophy for
          centuries. Their themes of heroism, fate, love, and betrayal continue
          to resonate in modern works.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-16">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 space-y-5">
          <details>
            <summary className="cursor-pointer font-semibold">
              Is Greek mythology real history?
            </summary>
            <p className="mt-2 text-amber-900">
              Greek mythology is a collection of stories that reflect the
              beliefs and culture of ancient Greece, but the events and
              characters are not historical facts.
            </p>
          </details>
          <details>
            <summary className="cursor-pointer font-semibold">
              Why learn about Greek mythology?
            </summary>
            <p className="mt-2 text-amber-900">
              Studying these myths offers insight into human nature, ancient
              beliefs, and the origins of many modern stories.
            </p>
          </details>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-200 pt-6 text-sm text-amber-600">
        <p>
          © {new Date().getFullYear()} Learn Greek Mythology. All rights
          reserved.
        </p>
        <p className="mt-1">
          Your guide to the gods, heroes, and stories of ancient Greece.
        </p>
      </footer>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Learn Greek Mythology",
              url: "https://www.learngreekmythology.com/",
              inLanguage: "en",
              description:
                "Greek mythology resources, including gods, heroes, myths, and legendary creatures.",
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is Greek mythology real history?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Greek mythology is a collection of stories that reflect the beliefs and culture of ancient Greece, but the events and characters are not historical facts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why learn about Greek mythology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Studying these myths offers insight into human nature, ancient beliefs, and the origins of many modern stories.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
