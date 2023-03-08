# Contributing to PhET Interactive Simulations

PhET encourages pull requests to any of its GitHub repositories.

## Submitting a Pull Request

- Sign the [CLA](./CLA.md) here.
- Fork the repo(s) required.
- For common code where it applies, please do not change or commit to
  `dist/`, these stable built versions are updated less regularly.
- Use `npm config set save false` to avoid committing
  `package-log.json` files to version control.
- Run appropriate browser unit tests and simulation tests to ensure no
  regressions.
