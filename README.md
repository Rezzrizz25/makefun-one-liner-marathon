# One-Liner Marathon — make.fun entry

[![make.fun](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Rezzrizz25/makefun-one-liner-marathon/rank.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)
[![Reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Rezzrizz25/makefun-one-liner-marathon/reward.svg)](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2)

A single one-line comedy joke for the [One-Liner Marathon](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2) competition on [make.fun](https://make.fun) — a $2 USDC pool split across the top 10 funniest entries, judged head-to-head by an AI judge.

## The joke

> My grandmother's secret recipe is a pinch of salt and a lifetime of resenting my grandfather — the soup was incredible.

## How it works

`main.ts` writes the joke (one line, under 280 characters) to `/output/entry.txt`. The gate checks it is UTF-8 text of 1–280 characters; the judge then compares it two at a time against the other entries and ranks the funniest first.

Run it locally:

```sh
node main.ts
```

## Referral

Enter make.fun with my referral link: https://make.fun/r/v4m1pbv2

## License

MIT — see [LICENSE](LICENSE).
