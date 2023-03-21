# Welcome and thank you!
First off, thank you for consideration in contributing to PhET Common Code! We are so excited to have you as part of our community.

# PhET Common Code vs. PhET Interactive Simulations
<!-- [ placeholder about difference between this and contirbuting to the simulations ] -->

PhET Common Code is the HTML5/Javascript/Typescript API based on [`scenery`](https://github.com/phetsims/scenery) and other common code libraries that PhET Interactive Simulations are built on. PhET Common Code is not limited to creating interactive STEM simulations. It can be used to support the creation of web interactives. PhET Common Code supports rich and inclusive multimodal interaction, including the architecture to build in novel screen reader access when used in conjunction with our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources)

PhET Common Code is licensed through the MIT License, freely available for use by anyone. Simulations differ in their licensing depending on the funding, partnerships, and third-party libraries used to create them. See the LICENSE file in each repository for details.

PhET does not engage in licensing our simulation source code to commercial entities. Commercial partners interested in licensing our *simulations* should see the PhET Interactive Simulations website for [partnership inquiries](https://phet.colorado.edu/en/partnerships) and [financial contributions](https://donatenow.networkforgood.org/1437859).

## But wait! I want to submit a bug fix or new feature to a simulation, or even an entirely new simulation!

That's great! Thank you so much for taking the initiative to help make our simulations even better.

**If you are an individual or small group interested in or have made progress in making a new simulation**, the best resources available to you can be found in the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md#development-process-and-checklist) and [other documentation](https://github.com/phetsims/phet-info/tree/master/doc) found in the `phet-info` repository. We have seen small test projects, academic projects (e.g. education research for a PhD), or open source curriculum projects successfully develop custom simulations, leveraging our code base. It requires expertise in design and in javascript/typescript. If you have made significant progress and are committed to your STEM simulation, please reach out to us at phethelp@colorado.edu to discuss support we may be able to provide.

**If you are a commercial organization interested in making new simulations**, see the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.


**At this time, we are not able to allocate resources to the review of *new features* to a simulation**, as this would require review from multiple developers, designers, and partners, including possible user interviews with students and teachers.

**If you have a bug fix for a simulation**, then please follow the same process outlined below for common code contributions, but apply it to the [specific simulation repository found under phetsims](https://github.com/orgs/phetsims/repositories).

# Ways to contribute to PhET Common Code
- Features and bug fixes to the PhET Common Code repositories.
- Documentation updates or fixes found within the Common Code repositories (including [community](https://github.com/phetsims/community)).
- Translations to documentation found within the Common Code repositories (including [community](https://github.com/phetsims/community)).
- 
  

# Contribution Steps

We encourage you to make use of GitHub's Pull Request (PR) feature to submit your contributions.

1. Make an issue using an [ISSUE_TEMPLATE](./ISSUE_TEMPLATE.md) in the relevant repository. Not sure which repository to use? Make a post in the [central Discussion forum](https://github.com/orgs/phetsims/discussions).
2. Read this document carefully, as well as our [CODE_OF_CONDUCT](../CODE_OF_CONDUCT.md).
3. See the instructions for signing the [Contributor License Agreement](../CLA.md) before contributing.
4. Fork the repo(s) required.
5. For common code where it applies, please **do not** change or commit to `dist/`, these stable built versions are updated less regularly.
6. Use `npm config set save false` to avoid committing `package-log.json` files to version control.
7. Run appropriate browser unit tests and simulation tests to ensure no regressions.
8. Make a PR with a [PULL_REQUEST_TEMPLATE](../PULL_REQUEST_TEMPLATE.md). 

## Review Process

Upon submitting a PR, a `phetsims` maintainer will do a code review. 
- They might ask you to make changes, before accepting the merge. 
- PhET APIs are constantly evolving, so it is also possible you will need to rebase your PR and verify there are no conflicts with the latest codebase.

Questions? Suggestions? Have other ideas on how to contribute? Head to our [central Discussions forum](https://github.com/orgs/phetsims/discussions) and make a post!