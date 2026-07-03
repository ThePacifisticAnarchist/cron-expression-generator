## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Use the skills web-design-guidelines and tailwind-4-docs to design the website.

Use the design.md file as a reference for the design of the website.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Future Features

### Cron Racing (Type Racer-like Game)
- **Goal**: Create an interactive, speed-based game where developers test their speed and knowledge of cron expressions.
- **Core Loop**:
  - The game displays a human-readable schedule description (e.g. *"At every 5th minute past every hour"*).
  - The user has to type the corresponding matching cron expression (`*/5 * * * *`) as fast as possible.
  - A countdown timer runs, tracking typing speed (WPM/CPM), error rates, and total elapsed time.
  - Add leaderboard rankings or local high score records.

