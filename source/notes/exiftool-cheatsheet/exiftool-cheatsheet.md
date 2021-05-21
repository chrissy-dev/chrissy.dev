---
title: My Exiftool Cheatsheet
description: Personal note of Exiftool commands I use often to organise my photos.
date: 2020-06-10
cover: cover.jpg
---

_This post isn't finished, it's a living document._

[ExifTool](https://exiftool.org/) is an incredibly powerful piece of software that reads, writes, and edits metadata to and from files.

ExifTool is a command-line tool that to start with can look very complicated. I tend to re-use the same snippets over and over.

It’s worth noting; this is a personal note, it’s not a tutorial - it’s somewhere I can dump my snippets to use later.

## Filenames based on timestamps

Rename all files recursively from the current dir to `YEAR-MONTH-DAY_HOURSMINSSECS.ext` eg: `2020-06-10_093033.jpg`

```bash
exiftool "-FileName<datetimeoriginal" -d "%Y-%m-%d_%H%M%S%%-c.%%e" -r  $PWD/${1#./}
```


