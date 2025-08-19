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

      {/* Start Here */}
      <section id="start-here" className="mb-12">
        <h2 className="text-2xl font-bold">Start learning Greek mythology</h2>
        <p className="mt-3 text-amber-900">
          New to Greek mythology? Begin with a simple overview of the pantheon,
          the timeline of major myths, and the core themes that connect the
          stories of gods, heroes, and legendary creatures.
        </p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3 text-amber-900">
          <li className="rounded border border-red-200 p-4">
            <strong>What is Greek mythology?</strong>
            <p className="mt-1">
              A tradition of sacred stories that explained the world, social
              customs, and divine power.
            </p>
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Where to begin</strong>
            <p className="mt-1">
              Learn the Olympians, then explore famous epics, heroic quests, and
              origin myths.
            </p>
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Quick glossary</strong>
            <p className="mt-1">
              Key terms like Olympus, Titan, demigod, oracle, and underworld.
            </p>
          </li>
        </ul>
      </section>

      {/* Pantheon Overview */}
      <section id="pantheon" className="mb-12">
        <h2 className="text-2xl font-bold">Greek pantheon overview</h2>
        <p className="mt-3 text-amber-900">
          Meet the Olympians and primordial deities, then see how Titans,
          nymphs, and minor gods fit into the divine hierarchy.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            {
              name: "Olympians",
              copy: "Zeus, Hera, Poseidon, Demeter, Athena, Apollo, Artemis, Ares, Aphrodite, Hephaestus, Hermes, Hestia or Dionysus.",
            },
            {
              name: "Titans",
              copy: "Cronus, Rhea, Oceanus, Tethys, Iapetus, Themis, Hyperion, Mnemosyne, and others.",
            },
            {
              name: "Underworld",
              copy: "Hades and Persephone, judges of the dead, and the rivers of the afterlife.",
            },
          ].map((b) => (
            <article
              key={b.name}
              className="rounded-lg border border-red-200 p-5"
            >
              <h3 className="font-semibold">{b.name}</h3>
              <p className="mt-2 text-amber-900">{b.copy}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Family Tree */}
      <section id="family-tree" className="mb-12">
        <h2 className="text-2xl font-bold">Greek mythology family tree</h2>
        <p className="mt-3 text-amber-900">
          Understand relationships between gods, heroes, and creatures. Follow
          lines of descent from primordial beings to Olympian rulers and mortal
          descendants.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Primordials to Titans, then to the Olympians</li>
          <li>Divine parents of famous heroes</li>
          <li>Genealogies that explain rivalries and alliances</li>
        </ul>
      </section>

      {/* Timeline of Myths */}
      <section id="timeline" className="mb-12">
        <h2 className="text-2xl font-bold">
          Timeline of Greek myths and epics
        </h2>
        <p className="mt-3 text-amber-900">
          Explore a high-level sequence that places creation stories,
          Titanomachy, heroic ages, and the Trojan War in context.
        </p>
        <ol className="mt-4 list-decimal pl-5 text-amber-900">
          <li>Creation myths and the rise of the Titans</li>
          <li>Titanomachy and the rule of the Olympians</li>
          <li>Age of heroes with Heracles, Perseus, Theseus, and Jason</li>
          <li>Trojan War and the journeys of the Odyssey</li>
        </ol>
      </section>

      {/* Heroes Index */}
      <section id="heroes-index" className="mb-12">
        <h2 className="text-2xl font-bold">Greek heroes index</h2>
        <p className="mt-3 text-amber-900">
          Quickly browse key figures whose quests, trials, and tragic flaws
          shaped the heroic age.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-red-200 p-4">
            <strong>Heracles</strong>
            <p className="text-amber-900 mt-1">
              Twelve Labors, strength, redemption.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Perseus</strong>
            <p className="text-amber-900 mt-1">
              Medusa, Pegasus, rescue of Andromeda.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Theseus</strong>
            <p className="text-amber-900 mt-1">
              Minotaur, Labyrinth, Athens and Crete.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Jason</strong>
            <p className="text-amber-900 mt-1">
              Argonauts, Golden Fleece, trials by sea.
            </p>
          </div>
        </div>
      </section>

      {/* Myths by Theme */}
      <section id="themes" className="mb-12">
        <h2 className="text-2xl font-bold">Greek myths by theme</h2>
        <p className="mt-3 text-amber-900">
          Group stories by moral lessons and narrative patterns for easier study
          and teaching.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-amber-900">
          <li className="rounded border border-red-200 p-4">
            <strong>Hubris and fate</strong>, like Icarus and Oedipus.
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Quest and return</strong>, like Odysseus and Jason.
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Transformation</strong>, like Daphne, Arachne, and
            Narcissus.
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Love and loss</strong>, like Orpheus and Eurydice.
          </li>
        </ul>
      </section>

      {/* Places, Symbols, and Rituals */}
      <section id="places-symbols" className="mb-12">
        <h2 className="text-2xl font-bold">
          Sacred places, symbols, and rituals
        </h2>
        <p className="mt-3 text-amber-900">
          Learn how geography, temples, and iconography connect myths to daily
          life in ancient Greece.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Mount Olympus, Delphi, and the Acropolis</li>
          <li>Symbols like thunderbolt, owl, trident, laurel</li>
          <li>Festivals, oracles, and household worship</li>
        </ul>
      </section>

      {/* Greek vs Roman Mythology */}
      <section id="greek-vs-roman" className="mb-12">
        <h2 className="text-2xl font-bold">Greek vs Roman mythology</h2>
        <p className="mt-3 text-amber-900">
          Compare names, roles, and cultural focus to see how Roman tradition
          adapted Greek deities and stories.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-red-200 p-4">
            <strong>Names and identities</strong>
            <p className="mt-1 text-amber-900">
              Zeus and Jupiter, Aphrodite and Venus, Ares and Mars.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Values and themes</strong>
            <p className="mt-1 text-amber-900">
              Greek focus on drama and fate, Roman focus on civic order and
              state power.
            </p>
          </div>
        </div>
      </section>

      {/* In Art and Literature */}
      <section id="art-literature" className="mb-12">
        <h2 className="text-2xl font-bold">Mythology in art and literature</h2>
        <p className="mt-3 text-amber-900">
          Track how painters, sculptors, poets, and playwrights reimagined Greek
          myths from antiquity to today.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Vase painting and sculpture that depict divine scenes</li>
          <li>Epic poetry and tragedy that shaped Western storytelling</li>
          <li>Modern novels, films, and games inspired by ancient myths</li>
        </ul>
      </section>

      {/* Study Guides and Teaching Resources */}
      <section id="study-guides" className="mb-12">
        <h2 className="text-2xl font-bold">
          Study guides and teaching resources
        </h2>
        <p className="mt-3 text-amber-900">
          Use ready-to-teach outlines and discussion prompts for classrooms and
          self study.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-red-200 p-4">
            <strong>Lesson outlines</strong>
            <p className="mt-1 text-amber-900">
              Objectives, key terms, and suggested readings.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Discussion prompts</strong>
            <p className="mt-1 text-amber-900">
              Themes, symbolism, and cultural context.
            </p>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="mb-12">
        <h2 className="text-2xl font-bold">Greek mythology glossary</h2>
        <p className="mt-3 text-amber-900">
          Short, clear definitions for common names and ideas to improve reading
          comprehension.
        </p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-red-200 p-4">
            <dt className="font-semibold">Olympus</dt>
            <dd className="mt-1 text-amber-900">Mythic home of the gods.</dd>
          </div>
          <div className="rounded border border-red-200 p-4">
            <dt className="font-semibold">Oracle</dt>
            <dd className="mt-1 text-amber-900">
              A sacred site or priestess who delivered divine guidance.
            </dd>
          </div>
          <div className="rounded border border-red-200 p-4">
            <dt className="font-semibold">Demigod</dt>
            <dd className="mt-1 text-amber-900">
              A hero with one divine parent and one mortal parent.
            </dd>
          </div>
          <div className="rounded border border-red-200 p-4">
            <dt className="font-semibold">Underworld</dt>
            <dd className="mt-1 text-amber-900">
              Realm of the dead ruled by Hades.
            </dd>
          </div>
        </dl>
      </section>

      {/* Pronunciation Guide */}
      <section id="pronunciation" className="mb-12">
        <h2 className="text-2xl font-bold">Greek names pronunciation guide</h2>
        <p className="mt-3 text-amber-900">
          Learn how to pronounce common names and places from Greek mythology.
          Use simple syllable breaks and English approximations for classroom
          reading and narration.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-amber-900">
          <li className="rounded border border-red-200 p-4">
            <strong>Athena</strong> ah-THEE-nah
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Poseidon</strong> poh-SY-don
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Heracles</strong> HEH-ruh-kleez
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Odysseus</strong> oh-DISS-ee-us
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Chimera</strong> ky-MEER-uh
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Hephaestus</strong> heh-FES-tus
          </li>
        </ul>
        <p className="mt-3 text-sm text-amber-700">
          Studying for class? See{" "}
          <a href="#study-guides" className="underline">
            study guides
          </a>{" "}
          and{" "}
          <a href="#glossary" className="underline">
            glossary
          </a>
          .
        </p>
      </section>

      {/* Map and Places */}
      <section id="map-places" className="mb-12">
        <h2 className="text-2xl font-bold">Map of Greek mythology places</h2>
        <p className="mt-3 text-amber-900">
          Explore story locations and sacred sites from epics and local cults.
          Connect settings to characters and themes.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Mount Olympus, home of the Olympian gods</li>
          <li>Delphi and the Oracle of Apollo</li>
          <li>Crete, Labyrinth of the Minotaur</li>
          <li>Ithaca, kingdom of Odysseus</li>
          <li>Troy and the Aegean coast</li>
        </ul>
        <p className="mt-3 text-sm text-amber-700">
          Pair this with{" "}
          <a href="#timeline" className="underline">
            timeline
          </a>{" "}
          and{" "}
          <a href="#heroes-index" className="underline">
            heroes index
          </a>{" "}
          for lesson plans.
        </p>
      </section>

      {/* Sources and Primary Texts */}
      <section id="sources" className="mb-12">
        <h2 className="text-2xl font-bold">
          Primary sources for Greek mythology
        </h2>
        <p className="mt-3 text-amber-900">
          Find the ancient texts and authors behind well known stories. Use
          these for research papers and citations.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="rounded border border-red-200 p-4">
            <strong>Epic and lyric</strong>
            <p className="mt-1 text-amber-900">
              Homeric epics, Hesiod, and hymns that describe gods and creation.
            </p>
          </article>
          <article className="rounded border border-red-200 p-4">
            <strong>Tragedy and history</strong>
            <p className="mt-1 text-amber-900">
              Aeschylus, Sophocles, Euripides, and later summaries by historians
              and mythographers.
            </p>
          </article>
        </div>
      </section>

      {/* Symbols and Attributes */}
      <section id="symbols-attributes" className="mb-12">
        <h2 className="text-2xl font-bold">
          Symbols and attributes of Greek gods
        </h2>
        <p className="mt-3 text-amber-900">
          Identify deities by their symbols in art and literature. Useful for
          museum visits and exam prep.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-amber-900">
          <li className="rounded border border-red-200 p-4">
            <strong>Zeus</strong> thunderbolt, eagle, oak
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Athena</strong> owl, olive, aegis
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Poseidon</strong> trident, horse, seafoam
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Artemis</strong> bow, deer, moon
          </li>
        </ul>
        <p className="mt-3 text-sm text-amber-700">
          See also{" "}
          <a href="#places-symbols" className="underline">
            sacred places, symbols, and rituals
          </a>
          .
        </p>
      </section>

      {/* Creatures Encyclopedia */}
      <section id="creatures-encyclopedia" className="mb-12">
        <h2 className="text-2xl font-bold">
          Greek mythical creatures encyclopedia
        </h2>
        <p className="mt-3 text-amber-900">
          Quick entries that cover origins, abilities, and the heroes who faced
          them.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-red-200 p-4">
            <strong>Gorgon</strong>
            <p className="text-amber-900 mt-1">
              Snakes for hair and a gaze that turns to stone. Linked to Perseus.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Hydra</strong>
            <p className="text-amber-900 mt-1">
              Multi headed water serpent. Defeated during the Labors of
              Heracles.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Cerberus</strong>
            <p className="text-amber-900 mt-1">
              Hound of Hades. Guardian at the gates of the underworld.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Sphinx</strong>
            <p className="text-amber-900 mt-1">
              Riddle keeper. Known from Thebes and the tale of Oedipus.
            </p>
          </div>
        </div>
      </section>

      {/* Festivals and Ritual Calendar */}
      <section id="festivals" className="mb-12">
        <h2 className="text-2xl font-bold">
          Greek mythology festivals and rituals
        </h2>
        <p className="mt-3 text-amber-900">
          Learn how seasonal festivals, athletic games, and household rites
          honored the gods.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Panathenaea and the cult of Athena</li>
          <li>Pythian Games in honor of Apollo</li>
          <li>Dionysian processions and theater</li>
          <li>Household altars and offerings</li>
        </ul>
      </section>

      {/* Greek and Roman Name Equivalents */}
      <section id="name-equivalents" className="mb-12">
        <h2 className="text-2xl font-bold">Greek and Roman name equivalents</h2>
        <p className="mt-3 text-amber-900">
          Compare Greek gods with their Roman counterparts for faster reading
          across sources.
        </p>
        <table className="mt-4 w-full border-collapse text-left text-amber-900">
          <thead>
            <tr>
              <th className="border-b border-red-200 py-2 pr-4">Greek</th>
              <th className="border-b border-red-200 py-2">Roman</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 pr-4">Zeus</td>
              <td>Jupiter</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Hera</td>
              <td>Juno</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Aphrodite</td>
              <td>Venus</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Ares</td>
              <td>Mars</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Hermes</td>
              <td>Mercury</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-3 text-sm text-amber-700">
          For a broader comparison see{" "}
          <a href="#greek-vs-roman" className="underline">
            Greek vs Roman mythology
          </a>
          .
        </p>
      </section>

      {/* Astronomy and Constellations */}
      <section id="constellations" className="mb-12">
        <h2 className="text-2xl font-bold">Greek mythology constellations</h2>
        <p className="mt-3 text-amber-900">
          See which heroes and creatures became star patterns in ancient sky
          lore.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Perseus, Andromeda, and Pegasus</li>
          <li>Orion the hunter</li>
          <li>Cygnus the swan and Aquila the eagle</li>
        </ul>
      </section>

      {/* Classroom Activities */}
      <section id="activities" className="mb-12">
        <h2 className="text-2xl font-bold">
          Classroom activities and worksheets
        </h2>
        <p className="mt-3 text-amber-900">
          Ready to use prompts and simple activities for middle and high school
          lessons on Greek myth.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded border border-red-200 p-4">
            <strong>Character trading cards</strong>
            <p className="mt-1 text-amber-900">
              Create cards with symbols, domains, family ties, and famous
              stories.
            </p>
          </div>
          <div className="rounded border border-red-200 p-4">
            <strong>Myth map posters</strong>
            <p className="mt-1 text-amber-900">
              Students plot journeys from the{" "}
              <a href="#timeline" className="underline">
                timeline
              </a>{" "}
              on a class map.
            </p>
          </div>
        </div>
      </section>

      {/* Reading List */}
      <section id="reading-list" className="mb-12">
        <h2 className="text-2xl font-bold">Greek mythology reading list</h2>
        <p className="mt-3 text-amber-900">
          Curated books and retellings for beginners, students, and enthusiasts.
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-amber-900">
          <li className="rounded border border-red-200 p-4">
            <strong>Beginner</strong> accessible myth summaries and illustrated
            guides.
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Intermediate</strong> translations with notes and cultural
            context.
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>Advanced</strong> scholarly commentary and comparative
            studies.
          </li>
          <li className="rounded border border-red-200 p-4">
            <strong>For kids</strong> age friendly retellings with clear morals.
          </li>
        </ul>
      </section>

      {/* Thematic Q&A */}
      <section id="qa-themes" className="mb-12">
        <h2 className="text-2xl font-bold">
          Common questions about Greek mythology themes
        </h2>
        <p className="mt-3 text-amber-900">
          Quick answers to help with essays and quizzes.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="rounded border border-red-200 p-4">
            <strong>What is hubris in Greek myth?</strong>
            <p className="mt-1 text-amber-900">
              Excessive pride that invites divine punishment. See{" "}
              <a href="#themes" className="underline">
                myths by theme
              </a>
              .
            </p>
          </article>
          <article className="rounded border border-red-200 p-4">
            <strong>What role does fate play?</strong>
            <p className="mt-1 text-amber-900">
              Prophecy and destiny shape choices and consequences across epics
              and tragedies.
            </p>
          </article>
        </div>
      </section>

      {/* Study Plan */}
      <section id="study-plan" className="mb-12">
        <h2 className="text-2xl font-bold">
          Study plan for learning Greek mythology
        </h2>
        <p className="mt-3 text-amber-900">
          A simple week by week outline to master names, stories, and context.
        </p>
        <ol className="mt-4 list-decimal pl-5 text-amber-900">
          <li>Week 1, learn Olympians and symbols</li>
          <li>Week 2, read hero summaries and quests</li>
          <li>Week 3, explore themes and rituals</li>
          <li>Week 4, review timeline and key places</li>
        </ol>
        <p className="mt-3 text-sm text-amber-700">
          Teaching a unit? Start with{" "}
          <a href="#study-guides" className="underline">
            study guides
          </a>
          .
        </p>
      </section>

      {/* Archaeology and Material Culture */}
      <section id="archaeology" className="mb-12">
        <h2 className="text-2xl font-bold">Archaeology and Greek mythology</h2>
        <p className="mt-3 text-amber-900">
          See how artifacts and inscriptions inform our understanding of myths,
          cults, and local traditions.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Vase scenes that depict divine episodes</li>
          <li>Temple ruins and sanctuary layouts</li>
          <li>Inscriptions that record dedications and festivals</li>
        </ul>
      </section>

      {/* Parent and Teacher Tips */}
      <section id="parents-teachers" className="mb-12">
        <h2 className="text-2xl font-bold">Tips for parents and teachers</h2>
        <p className="mt-3 text-amber-900">
          Age appropriate approaches, reading order, and conversation starters
          for young learners.
        </p>
        <ul className="mt-4 list-disc pl-5 text-amber-900">
          <li>Focus on values and choices in hero tales</li>
          <li>Use symbols and maps to aid memory</li>
          <li>Pair myths with art and short writing prompts</li>
        </ul>
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
                "Explore Greek mythology: gods, heroes, myths, creatures, culture, art, and teaching resources. Learn about the Olympians, famous legends, timelines, family trees, and more.",
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
                {
                  "@type": "Question",
                  name: "Who are the Olympian gods?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Olympians are the main gods of Greek mythology, including Zeus, Hera, Poseidon, Demeter, Athena, Apollo, Artemis, Ares, Aphrodite, Hephaestus, Hermes, and either Hestia or Dionysus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are some famous Greek heroes?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Famous heroes include Heracles (Hercules), Perseus, Theseus, Jason, and Odysseus, known for their quests and adventures.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the difference between Greek and Roman mythology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Roman mythology adapted Greek gods and stories, changing names and some cultural focus. For example, Zeus is Jupiter, and Aphrodite is Venus.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are common themes in Greek myths?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Themes include heroism, fate, hubris, transformation, love, and loss. These stories teach moral lessons and explore human nature.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Are there resources for teachers and students?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. The site offers study guides, lesson outlines, discussion prompts, activities, and reading lists for classroom and self-study.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are some mythical creatures in Greek mythology?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Creatures include the Hydra, Pegasus, Chimera, Sirens, Gorgon, Cerberus, and Sphinx, each with unique stories and symbolism.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How did Greek mythology influence art and literature?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Greek myths have inspired art, sculpture, poetry, theater, and modern media for centuries, shaping Western storytelling and culture.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where can I find a glossary or pronunciation guide?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Glossary and pronunciation guides are available on the site to help with key terms, names, and reading comprehension.",
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
