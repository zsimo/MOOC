# Real-world JavaScript Testing

## Schedule Overview

Time | Topic
--- | ---
1:00-1:30 | Intro: background, goals, first steps
1:30-2:15 | Exercise: Simple tests, simple test runner
2:15-2:30 | Discussion: types of tests
2:30-2:45 | Break
2:45-3:45 | Exercise: Node.js web service, Grunt-based integration & unit test runner
3:45-4:00 | Discussion: Intro to lineman, testem, browser testing
4:00-5:00 | Exercise: Lineman.js web app, Testem test runner

### Intro

Goal: set expectations and provide a context for the day

* Set agenda, goals, and constraints
* Solicit requests from attendees of concepts to emphasize or cover ad hoc
* Review vanilla Jasmine API briefly
* Review the jasmine-given CoffeeScript API

### Student Exercise: Standalone test runner

Goal: practice the rhythm and rules of red-green-refactor; understand how simple
Jasmine really is (as a script you drop into a plain HTML page)

* Provide a pre-packaged standalone runner with CoffeeScript script tag support added
* Pair off and do the Roman Numeral Kata in a 30 minute time box
* Do a short retrospective afterward

<!--
### Discuss "real-world" JS Testing Strategies for the browser

Goal: broaden the scope of inquiry beyond simple TDD puzzles and discuss the distinct
patterns of code we see in browser JavaScript that make unit testing difficult

* Stubbing and verifying DOM interactions and state (fixtures vs. `affix`)
* Dealing with a large and sparse container API (window, document)
* Testing user event handlers (e.g. click events, etc.)
* Testing XHRs synchronously

### Student Exercise: jasmine-rails legacy jQuery characterization

Goal: dive in the deep end attempting to write tests around typical, unstructured
jQuery application code

* Grapple with the problems posed by anonymity, hidden functions, lack of a public API
* Practice tactics just discussed for browser circumstances (DOM, XHR, etc.)
* Learn how to integrate the jasmine-rails tool into existing Rails applications

### Morning Debrief / Q & A

Goal: spot check our progress so far; answer any questions before we move on to
the afternoon's activities

<hr/>
**Consume a lunch**
<hr/>
-->

### Discuss outside-in TDD, introduce Node.js, demo

Goal: discuss how to use TDD to break a large problem down. Use a Node.js example
to demo outside-in TDD in a familiar domain (HTTP controller actions) to Rubyists

* Explain the [limitations of basic TDD](http://blog.testdouble.com/posts/2014-01-25-the-failures-of-intro-to-tdd.html)
and introduce concepts from GOOS and a reductionist approach
* Introduce Node.js and basic necessary concepts (Common JS packages, etc.)
* Demo grunt, grunt-jasmine-bundle, node-sandboxed-module to break down a large problem into a small one

### Student Exercise: Math Quiz Web Service

Goal: practice outside-in TDD, gain familiarity with Node and one way to write
tests in Node.

* Students start with a failing integration test
* Starting with an express.js app, break down a nice object model that creates
arithmetic quiz questions and accepts solutions

Rules of the game:

* Practice outside-in TDD to break the problem down into multiple units,
multiple files.
* Create a "GET /problem" route, which will generate a new ID, create a random
(easy) arithmetic problem (e.g. "10 ÷ 2") and store it with that ID in memory,
return a structured object back that a user interface could work with
* Create a "GET /problem/:id" route by which a problem can be revisited or shared
* Create a "POST /solution" which takes a problem ID and an answer, responding
with a 422 if the solution is incorrect & a 202 if the solution is correct

### Discuss Lineman, Testem, and the tension between TDD and frameworks

Goal: Familiarize the class with the front-end web tooling we recommend for fat-client
JavaScript applications, set expectations about practicing TDD in the presence of
an application framework

* Discuss Client/Server separation, why we built Lineman to make that easy to
accomplish
* Demonstrate Testem and how it's totally awesome.
* Illustrate how application frameworks and TDD both try to solve the same problem:
how to prevent code from becoming an unreasonable mess.
* Identify some of the tensions that inevitably arise from attempting TDD in a large framework
* Discuss creating scar tissue for application frameworks and wrappers for third-party dependencies

### Student Exercise: Math Quiz Web User Interface

Goal: Practice some of the more challenging tactics useful when testing DOM interactions, with less of an emphasis on TDD's design benefits.

Rules of the game:

* No application frameworks (e.g. Angular, Backbone, Ember), but heavy convenience
libraries like jQuery are okay
* TDD a web interface to the math quiz service that we started in the previous
exercise: render a problem and a response form, POST attempted solutions, give
the user feedback, and move on to new problems
* Use the tactics we learned when tackling legacy jQuery to aggressively push new
abstractions with outside-in TDD, building scar tissue between the application and
the browser

[Note: the rule above not to use an application framework does not indicate a
negative opinion about application frameworks, but rather that they pose a number
of additional time-consuming challenges when practicing TDD, which we'll discuss
 as a group.]

<!--
### Ad hoc coverage of other topics upon attendee request

This time block will probably be partially eaten up as a buffer from extra taken
for any of the previous activities. Generally, provide an opportunity for a Q&A
from students and a chance to respond to and demonstrate other concerns that may
not have come up that students want to see (CI, integration testing, etc.)
-->
