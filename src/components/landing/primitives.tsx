import type { ReactNode } from "react";

export function Section({
  id,
  band = false,
  children,
}: {
  id?: string;
  band?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`w-full px-5 py-20 sm:px-8 md:py-28 ${band ? "bg-band" : "bg-background"}`}
    >
      <div className="mx-auto w-full max-w-[1100px]">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="max-w-3xl text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-[2.75rem]">
      {children}
    </h2>
  );
}

export function Lead({ children }: { children: ReactNode }) {
  return <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{children}</p>;
}

export function ApplyButton({
  size = "lg",
  className = "",
}: {
  size?: "lg" | "sm";
  className?: string;
}) {
  return (
    <a
      href="#apply"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
        size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm"
      } ${className}`}
    >
      Apply for 1:1 Workflow Optimization
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-secondary-foreground">
      {children}
    </li>
  );
}
