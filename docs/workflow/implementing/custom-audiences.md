---
id: custom-audiences
title: Custom Audiences
sidebar_position: 3
---

Custom audiences let you target specific groups of users beyond the regular targeting options. Custom audiences can be configured for any experiment through the experimenter UI:

![custom audience screenshot](/img/audiences/custom-audiences.png)

They are:

- Optional - Don't use them unless you need to limit the experiment to specific group of users.
- Specific to a particular application (Not all audiences can target all applications)
- Evaluated on clients via an expression language (`JEXL`)

### How to add a new custom audience

Create a PR against [targeting/constants.py](https://github.com/mozilla/experimenter/blob/main/experimenter/experimenter/targeting/constants.py) that adds a new JEXL expression.  There is a [recorded session showing 2 examples of adding custom targeting](https://mozilla.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8527feae-303e-41b3-b9df-b0a800f3cd41) to demoonstrate where to start.

Request review from a console core team member. It should be available in the Experimenter UI a few minutes after the PR has merged.

If you're an iOS or a Android developer check the following instructions for how to add new client-side targeting attributes:
- [iOS](/ios-custom-targeting)
- [Android](/android-custom-targeting)

:::info
New custom audiences should be tested by the core Nimbus team before they are used in production. This could involve any or all of the following:

- Test the whole JEXL expression on each application/device it is intended to run on.
- Ask QA to help verify it by creating a dummy experiment.
- Launch an A/A in nightly to see if real users enroll correctly
:::
