# Deel - AutoComplete

## Setup

This template uses React, TypeScript and Vite.
Install the dependencies -

```
npm run install
```

And then run -

```
npm run dev
```

## API

The Autocomplete component uses [pokemontcg.io](https://docs.pokemontcg.io/) as the API for async autocomplete.

## Potential Improvements

-   Implement [Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/), I didn't do this as I wasn't sure if it would count as using a plugin but given a realistic situation, I would implement this to make use keyboard events (arrow keys, esc key).
-   Use Context or state so that rather than prop drilling the itemProps, they could be fetched from the ResultsItem component themselves
-   Add a cancel to the debounce, not really required here but if it was to be used in production it would be nice to have the ability.
-   Similar to the previous point use an [Abort Controller](https://developer.mozilla.org/en-US/docs/Web/API/AbortController) on the request, if the request has been triggered but the query string changes and re-requests while waiting on the first response.\
-   Implement JEST testing
-   Improve styling, either by spending more time on the CSS and focusing on pseudo classes (focus, hover,etc..) or implementing a framework.

# Questions

Answers to Part 2 can be found [here Questions.md](./Questions.md).
