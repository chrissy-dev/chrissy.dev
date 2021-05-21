---
title: Update Node dependencies to their latest version
date: 2019-11-15
cover: nodedeps.jpg
---

I recently wanted/needed to update all my npm dependencies in the `package.json` file to their latest version.

NPM ships with `npm update` which is excellent for updating minor versions and patches but **doesn't** handle major versions.

There's a good reason for this. Major versions _(by definition)_ introduce breaking changes, and NPM, quite rightly, doesn't want to break your project in multiple places in one go.

However, if you have a small project with minimal dependencies and you want to risk it you can do it using [npm-check-updates](https://www.npmjs.com/package/npm-check-updates).

---

I love tools that let require little thinking to set up and use, [npx](https://www.npmjs.com/package/npx) is one of them. It allows you to download and execute _(the 'X' in npx)_ a node package temporarily on the fly without having to install it on your machine.

Fire up your terminal of choice and paste this beautiful simple line and hit enter.

```shell
npx npm-check-updates -u
```

It should take a minute or so to run and it'll tell you what has been updated. **It's worthwhile noting what packages have been _major_ bumped (those are highlighted in red) as these could cause a break**.

![Terminal showing command being executed](npm-check-updates.png)

The package `npm-check-updates` only modifies your `package.json` file. You'll need to run `npm install` to update installed packages and `package-lock.json`.

Done 🥳, let the fixing begin.
