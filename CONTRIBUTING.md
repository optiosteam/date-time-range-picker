# Introduction

First off, thank you for considering contributing to React date/time range picker. 

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. 
In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Getting started

If you've noticed a bug or have a feature request, make one! 
It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch
If this is something you think you can fix, then fork react-date-time-range-picker and create a branch with a descriptive name.

A good branch name would be (where issue #325 is the ticket you're working on):
`git checkout -b 325-add-japanese-translations`

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with our master branch:
```
git remote add upstream git@github.com:optiosteam/react-date-time-range-picker.git
git checkout master
git pull upstream master
```
Then update your feature branch from your local copy of master, and push it!

```
git checkout 325-add-japanese-translations
git rebase master
git push --set-upstream origin 325-add-japanese-translations
```
Finally, go to GitHub and make a Pull Request :D
