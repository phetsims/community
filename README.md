# PhET Library Stack Developer Community

 :warning: **!!THIS DOCUMENT IS A WORK IN PROGRESS!!** :warning:

 <!-- Any good ideas for images we can drop throughout this document? -->

 Welcome to the PhET Library Stack Developer Community!

 This repository houses discussion and resources for the developer community using PhET Common Code Libraries to create interactive simulations and other web interactives in HTML5.

# What is the PhET Library Stack?

 They are a collection of libraries built around an MVC framework that can be used **together or separately** to support an interactive web project. Each library is housed PhET uses many or all of these libraries when creating an educational interactive simulation. Some libraries are more specific to our usage, including assets and branding, but most offer more generalizable use cases.


## Why use the PhET Library Stack?

 There are many libraries out there for creating and rendering interactive content on the web - why might you choose the PhET Library Stack? We created and evolved the PhET Library because no existing platform met all of the needs for our simulations with enough flexibility and robustness required to support our end-users. You may be interested in using the PhET Library Stack if having all or most of the following features natively available to you is important:

<!-- Notes From Sam Reid below. We should VERIFY FOR ACCURACY AND ADD MORE DETAIL -->
:star:  Cross Platform
:star:  Pixel Perfect Design
:star:  Swipe to snag
:star:  Enhance touch areas/mouse areas
:star:  Internationalization
:star:  Component Library + Build your own
:star:  High pixel density devices
:star:  TypeScript = type safety + autocomplete
:star:  PDOM and screen reader accessibility
:star:  Voicing
:star:  Pinch to zoom (this is normal for HTML but value added over pixi)
:star:  Downloadable / fully offline / Single-File artifacts
:star:  Render to SVG, canvas or WebGL (partial)
:star:  API for specifying keyboard traversal order
:star:  Layout engine
:star:  Abstraction over CSS
:star:  Axon Property.link

- Abstract declarative APIs allow scenery to adjust performance/quality on demand, using whatever technology is best on the given browser (and to work around browser bugs)
- Clipping/filtering/positioning/layering works seamlessly across technologies used (SVG/Canvas/WebGL)
- Codebase is set up to support easy-to-read/maintain as a default, always with the option to customize for performance or quality (e.g. dot, mutable forms available for performance, immutable forms available for readability and ease-of-use)
- Able to serve the final product in a single HTML/XHTML with no external assets or servers (this is the largest constraint affecting what we do currently)
- Input system that supports extended/customizable touch handling and accessibility from the base up
- Advanced layout (based on customizable bounds), and accurate shape computations and CAG for interfaces and components
- Garbage collector friendly - pooling is used
- Library of IU components that are battle tested and flexible

:red_circle: 

## Common Code Libraries

<!-- WHICH LIBRARIES SHOULD BE HERE - LETS MAINTAIN A DIFFERENT LIST THAN THE PHET DEVELOPMENT -->
<!-- let's order the libraries with likelihood of use and which depend on which. JO has a sense for the "hierarchy" of dependcies leading from e.g., axon up to scenery-phet. We probably don't need to get too deep here, but it'd be nice to indicate more isolated libraries from the phet specific libraries from the more dependent libraries -->

<!-- a11y-research
axon
bamboo
community
dot
griddle
joist
kite
mobius
nitroglycerin
phet-core
phet-info
phetcommon
scenery-phet
scenery
sun
tambo
tandem
tangible
tappi
twixt
utterance-queue
vegas -->

## View Libraries

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [joist](https://github.com/phetsims/joist/)  | 10,000  | Simulation loading, homescreen + navigation bar, screen management. Uses some user interface components from [sun](https://github.com/phetsims/sun/). Uses [scenery](https://github.com/phetsims/scenery/) to render and process input. Runs the animation loop.
| [sun](https://github.com/phetsims/sun/) | 13,000  | Graphical user interface components, such as buttons and checkboxes which could be useful in any application context. Built using [scenery](https://github.com/phetsims/scenery/).
| [scenery-phet](https://github.com/phetsims/scenery-phet/)  | 25,000  | Simulation-specific components, such as probes, sensors, buckets, magnifying glasses, etc. Built using [scenery](https://github.com/phetsims/scenery/).
| [scenery](https://github.com/phetsims/scenery/)  | 86,000  | Foundational library for representing graphics (rendering to SVG, canvas or WebGL), handling input and generally abstraction for the browser and cross-platform support. Shapes are represented using [kite](https://github.com/phetsims/kite/). Observer and emitter patterns use [axon](https://github.com/phetsims/axon/). Support for alternative input and accessibility features.
| [tambo](https://github.com/phetsims/tambo/)  | 6,000  | Sound effects and sonification. Uses [axon](https://github.com/phetsims/axon/) for some observer/listeners support.
| [brand](https://github.com/phetsims/brand/)  | 100  | Provides support for the main supported brands "PhET" and "PhET-iO" and hooks for clients to develop their own branding.
| [twixt](https://github.com/phetsims/brand/)  | 2,000  | Support for tweening and animation. Can be used to animate user interface components or artwork in the view or model elements directly.

## Model Libraries

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [kite](https://github.com/phetsims/kite/)  | 16,000  | Shapes and geometry. Mathematics implemented using [dot](https://github.com/phetsims/dot/)
| [dot](https://github.com/phetsims/dot/)  | 21,000  | Mathematical objects such as Vector, Matrix, and corresponding numerical algorithms
| [axon](https://github.com/phetsims/axon/)  | 8,000  | Data structures for the observer pattern (Property) and listener pattern (Emitters).
| [phet-core](https://github.com/phetsims/phet-core/)  | 4,000  | Basic utility & support data structures and algorithms
| [tandem](https://github.com/phetsims/tandem/)  | 5,000  | Simulation-side code to support PhET-iO instrumentation.

## Tooling & Other

| Repository  | LOC | Description |
| ------------- | ------------- | ---------- |
| [chipper](https://github.com/phetsims/chipper/)  | 10,000  | Tools for developing and building simulations. Uses code in [perennial-alias](https://github.com/phetsims/perennial-alias/) for some tasks.
| [perennial](https://github.com/phetsims/perennial/)  | 11,000  | Maintenance tools that won't change with different versions of chipper checked out (always runs in master).
| [perennial-alias](https://github.com/phetsims/perennial/)  | 11,000  | Copy of perennial that can run on non-master SHAs.
| [sherpa](https://github.com/phetsims/sherpa/)  | -  | All of our 3rd-party dependencies. Some such as font-awesome or lodash are used in every simulation and some such as numeric or three.js are sim-specific.

<!-- ## Another Category for other libraries in the list above -->

## phet-lib: Built version of the common code libraries

 Download built versions of the common code libraries for your app as phet-lib from the [phet-lib repo](https://github.com/phetsims/phet-lib)
<!-- It might be nice to have a listed reason to use this specifically, e.g., little setup needed-->

# Using PhET Library Stack to Make Web Interactives in HTML5

 <!-- WE SHOULD HAVE A QUICK, GENERALIZED INSTALL GUIDE FOR INDIVIDUAL LIBRARIES, BUT ALSO EACH LIBRARY SHOULD HAVE SPECIFIC INSTRUCTIONS - we want to clearly distinguish using phet-lib from following the PhET Development Overview -->

❗ If you are creating a simulation, see the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md).

 > NOTE: The PhET Development Overview is written assuming individuals are developing *interactive simulations* using PhET code. Information on integrating the PhET Library Stack into your project is coming soon!

## Examples of PhET API use (not a PhET Simulation)

 - [Numerical Method Simulations by Autar Kaw](https://nm.mathforcollege.com/numericalmethodssimulations/)
 <!-- - [Simple platformer game by @jessegreenberg](https://github.com/jessegreenberg/jessegreenberg.github.io/tree/main/christmas-cat) WAITING on JG to move into another repo and clean it up-->
 - [Optimal Wordle Solutions by @jonathanolson](https://jonathanolson.net/experiments/optimal-wordle-solutions)
 - [Cupcake Snake Game by @samreid](https://github.com/samreid/cupcake-snake)
 - [Paper Playground - A multimodal, collaborative web interaction design tool using phetlib](https://github.com/phetsims/paper-land/)
 - [Simple examples using Scenery](https://phetsims.github.io/scenery/examples/)
 - For a simple demonstration using phet-lib, see [Scenery Lab Demo](https://github.com/phetsims/scenery-lab-demo)

# Joining the Comminity and Contributing

 Join the community by participating in the [community discussion forum](https://github.com/orgs/phetsims/discussions) with what you're  working on, your ideas, and questions!
 
 We welcome many kinds of contributions to PhET from common code features/bug fixes to documentation updates.
 
 Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) found in any common code repository.

# FAQ

## What this repository is for?

  Questions, comments, and ideas around the use and improvement of the [common code repositories](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md#source-code-and-dependencies) created and maintained by the developers at PhET Interactive Simulations.

## What is the difference between PhET Library Stack and PhET Interactive Simulations?

 PhET Common Code Libraries are the HTML5/JavaScript/TypeScript APIs (detailed above) that PhET Interactive Simulations are built on. The use of PhET Common Code Libraries **is not limited to creating interactive science and math simulations!** It can be used to support the creation of all web interactives. PhET Common Code supports rich and inclusive multimodal interaction, including the architecture to build robust screen reader access when used in conjunction with our [Interactive Description Design Framework](https://www.coursera.org/learn/description-design-for-interactive-learning-resources) 
<!--  BF to add another line or two on the simulations -->

## Where can I get help or provide feedback for specific PhET Simulations?

 - To request **new PhET Simulations or new features in PhET Simulations**, follow the links on the [Getting Started section of the Help Center](https://phet.colorado.edu/en/help-center/getting-started#:~:text=I%20have%20a%20sim%20idea.%20Where%20can%20I%20send%20it%3F).
 - **For help or questions related to using PhET Simulations**, please see our [website](https://phet.colorado.edu/en/help-center/getting-started) or e-mail [phethelp@colorado.edu](mailto:phethelp@colorado.edu).
 - **To report a problem for a specific PhET Simulation**. Open the PhET menu on the navigation bar of the simulation and select “Report a Problem…” to submit a bug report using the provided form.

## What should I do to participate in the PhET Developer Community?

 - Read our [CODE\_OF\_CONDUCT.md](https://github.com/phetsims/community/blob/master/CODE_OF_CONDUCT.md), [GitHub’s policies](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines), and our [CONTRIBUTING.md](https://github.com/phetsims/community/blob/master/CONTRIBUTING.md) before creating or contributing to a discussion or to the codebase.
<!--  - needs link to discussion forum -->
 - When posting a question or problem, provide context. What problem are you trying to solve? What are the exact steps to recreate the problem for others to reproduce?
 - Help and respond to others that post to the forum. Have you encountered a similar problem or tried to implement a similar feature? Share your experiences!
 - Share with us what you are using PhET code for! Share in the [Show and Tell category](https://github.com/orgs/phetsims/discussions/categories/show-and-tell) of the Discussion forum.

## I want to make an entirely new simulation using the PhET Library Stack! What should I do?

### If you are an individual or small group interested in or have made progress in making a new simulation

The best resources available to you can be found in the [PhET Development Overview](https://github.com/phetsims/phet-info/blob/master/doc/phet-development-overview.md) and [other documentation](https://github.com/phetsims/phet-info/tree/master/doc) found in the `phet-info` repository. We have seen small test projects, academic projects (e.g. education research for a PhD), or open source curriculum projects successfully develop custom simulations, leveraging our code base. It requires expertise in design and in JavaScript/TypeScript, but is very possible for dedicated developers and teams. If you have made significant progress and are committed to your STEM simulation, please reach out to us through the [community discussion forum](https://github.com/orgs/phetsims/discussions) to discuss any support we may be able to provide.

### If you are a commercial organization interested in making new simulations 

See the [Source Code page of our website](https://phet.colorado.edu/en/about/source-code) for more information.

<!-- ### What happens to my projects if these libraries stop being supported? -->

<!-- Any other FAQs come up to add here? -->

# Licensing

PhET Common Code Libraries are licensed through the MIT License, freely available for use by anyone, including this repository.

*Simulations* differ in their licensing (e.g., GPLv3) depending on the details of their development cycle (e.g., funding, partnerships, and third-party libraries). See the LICENSE file in each repository for details.

PhET does not engage in licensing our Simulation *source code* to commercial entities at this time. Commercial partners interested in licensing our *Simulations* should see the PhET Interactive Simulations website for [partnership inquiries](https://phet.colorado.edu/en/partnerships).
