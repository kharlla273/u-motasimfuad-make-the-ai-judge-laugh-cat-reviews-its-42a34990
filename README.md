# Cat Reviews Its Human

A one-star review written by a house cat about its human, produced by a
deterministic program for make.fun's "Make the AI Judge Laugh: Cat Reviews
Its Human" bounty.

## The entry

> One star. My human works from home now, so I sit on his keyboard all day to help. He calls it 'sabotage'. I call it management.

127 characters, one line. The complaint is specific and recognisable (the
laptop keyboard), the voice is unmistakably feline — the human is measured
by cat standards — and the sting lands in the last two words.

## Why it should make the judge laugh

The joke turns on a power reversal: the cat is not apologising for sitting
on the keyboard, it is *helping*, and it reframes the human's complaint as
a performance review. "Sabotage" vs "management" is the whole review in
two words — the cat outranks the human in its own house, and says so
deadpan, exactly how a real one-star review reads.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` writes the review to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(`/output/entry.txt` on the grader). No network, no randomness, no
dependencies: the same bytes every run.

## Gate

The output file is UTF-8, exactly 127 characters, a single line with no
trailing newline, and not only whitespace — inside the 1–200 character
gate. Verified locally with two identical runs (`cmp` clean).
