# XPurge

A client-side tool designed to bulk delete X posts based on user-specified keywords, hosted on GitHub Pages.

## Status: <span style="color:red;"> Temporarily Abandoned </span>

As of March 2025, development has been paused due to limitations in the X API v2 free tier:

- **Free Tier Restrictions**: Only supports post creation, with no access to fetching user tweets or metadata—critical for identifying posts to delete.
- **Paid Tier Requirement**: Bulk deletion requires at least the Basic tier ($100/month), which wasn’t financially feasible for testing or personal use.
- **Impact**: Without read access, the tool cannot retrieve posts to filter by keywords, rendering the original vision impractical for a free, client-side solution.

Future development may resume if API access changes or alternative workarounds emerge.

## Purpose

The goal of XPurge was to simplify the process of removing multiple X posts without manual effort. Users would input an X API key, provide keywords, and the tool would fetch their posts, identify matches, delete them, and display a count of deleted posts—all from a simple web interface.

## Features (Intended)

1. Input an X API key to fetch username and post count.
2. Add multiple keywords via dynamic textboxes.
3. Confirm and delete posts containing any of the keywords.
4. Display the total number of deleted posts or any errors.

## Setup

- Hosted on GitHub Pages: [https://svnu.me](https://svnu.me)
- Requires only `index.html` and `script.js` (client-side only).

This project was built with HTML, CSS, and JavaScript, leveraging the X API for post management.

## License

[GNU General Public License v2.0](https://choosealicense.com/licenses/gpl-2.0/)
