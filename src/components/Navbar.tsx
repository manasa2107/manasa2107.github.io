import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About", meta: "Profile" },
  { href: "#education", label: "Education", meta: "Academic path" },
  { href: "#experience", label: "Experience", meta: "Roles" },
  { href: "#research", label: "Research", meta: "Themes" },
  { href: "#projects", label: "Projects", meta: "Selected work" },
  { href: "#skills", label: "Skills", meta: "Stack" },
  { href: "#contact", label: "Contact", meta: "Connect" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#100f14]/80 py-3 shadow-soft backdrop-blur-xl" : "border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#" className="group flex shrink-0 items-center gap-3" aria-label="Yagna Manasa Boyapati home">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-gradient-to-br from-accent-cyan to-accent-violet text-sm font-semibold text-white shadow-soft transition group-hover:-translate-y-0.5">
            YM
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold tracking-tight text-white">Yagna Manasa</span>
            <span className="block font-mono text-[11px] uppercase tracking-widest text-accent-cyan">AI · Full stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-2 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group block rounded-xl border border-transparent px-3 py-2 text-sm text-stone-300 transition hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/10 hover:text-white hover:shadow-soft"
              >
                <span className="block font-medium">{l.label}</span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone-500 group-hover:text-accent-cyan">
                  {l.meta}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#100f14] shadow-soft transition hover:-translate-y-0.5 hover:bg-accent-amber sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white shadow-soft xl:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-4 rounded bg-current transition ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-4 rounded bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-4 rounded bg-current transition ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="border-b border-white/10 bg-[#100f14]/95 px-4 py-4 shadow-soft backdrop-blur-xl xl:hidden">
          <ul className="grid gap-2 sm:grid-cols-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-stone-200 shadow-sm transition hover:border-accent-cyan/40 hover:bg-white/15 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="block font-semibold">{l.label}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500">{l.meta}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#100f14] shadow-soft sm:h-full"
                onClick={() => setMenuOpen(false)}
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
