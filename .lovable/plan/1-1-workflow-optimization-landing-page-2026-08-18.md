# 1:1 Workflow Optimization Landing Page

A single, long-form landing page that presents the offer exactly as written, on a white background with blue accents. No em dashes anywhere in the copy.

## Design direction

- White background, deep blue primary accent, soft blue tinted section bands for rhythm.
- Clean geometric sans for headings, highly readable sans for body.
- Generous whitespace, max content width around 1100px, strong section separation with thin blue rules and subtle cards.
- Mobile first: single column, larger tap targets, sticky bottom apply button on small screens.
- Light hover and fade-in-on-scroll motion only. No dark mode toggle.

## Page sections (in order)

1. Hero: headline "Build a better system for your digital work", the intro paragraph, primary CTA "Apply for 1:1 Workflow Optimization".
2. Friction: "Your digital work has more friction than it should" with the list of everyday problems as a checklist grid, closing line about small problems adding up.
3. Analyzed from the inside: intro copy plus five outcome cards (Work faster, Find things faster, Reuse more of your work, Get more from your tools, Reduce digital friction).
4. What we can improve: five themed blocks (tools and apps, shortcuts and repetitive work, files and organization, information and knowledge, project and content workflows), each with its tag list rendered as chips.
5. Deliverables: "You won't just get advice" with eight deliverable cards (shortcut cheat sheet, project template, file system, prompt library, note template, SOP or checklist, decluttering system, personal operating manual).
6. How it works: four numbered steps 01 to 04 with the full copy, connected by a vertical blue timeline.
7. Why it matters: the "removing the unnecessary work" section with the recurring questions listed as quotes.
8. Who is this for: audience chips plus the "you don't need" reassurances.
9. Closing CTA: "Your work is unique. Your workflow should be too." with the apply button and the limited-clients note.
10. Minimal footer.

## Technical notes

- Rewrite `src/routes/index.tsx` as the landing page; extract sections into components under `src/components/landing/`.
- Add blue accent tokens, section band tokens, and a gradient/shadow token to `src/styles.css`; use semantic tokens only, no hardcoded color utilities.
- Icons from lucide-react instead of literal emoji, matching the emoji meanings in the source copy.
- Route `head()` with a unique title, description, og:title, og:description, og:type, twitter:card.
- Apply buttons scroll to an inline application section anchor at the bottom of the page (no backend yet); if a real form with submissions is wanted, that can be added later with Lovable Cloud.
- Semantic HTML, single H1, responsive, all dashes written as regular hyphens or rephrased.
