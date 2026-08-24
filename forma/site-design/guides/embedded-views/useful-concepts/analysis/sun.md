---
title: "Sun"
url_path: embedded-views/useful-concepts/analysis/sun
surface: guide
---
# Interpreting sun analysis results

Background on the sun analysis can also be found in the
[Autodesk Forma help centre](https://help.autodeskforma.com/en/articles/6951253-introduction-to-the-sun-hours-analysis).

For sun results, the `grid` is a `Uint8Array` and each sample point is
represented with 30 `Uint8` values.

Each of the 8 bits in the `Uint8` signals if the location is sunlit (`1`) or not
(`0`) at a certain time.

Results are provided for every 6 minutes throughout the day, which is why 30 bytes are required
to represent the results for each sample point:

24 hours * 10 measurements per hour = 240 bits = (240 / 8) bytes = 30 bytes.

This table illustrates which time stamps the bits of the `Uint8` for a point represents:

| Time | 00:00 | 00:06 | 00:12 | 00:18 | 00:24 | 00:30 | 00:36 | 00:42 | 00:48 | 00:54 | ... | 23:48 | 23:54 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Time index [0 - 239] | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | ... | 238 | 239 |
| Byte index [0 - 29] | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | ... | 29 | 29 |
| Bit position [0 - 7] | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 | 7 | 6 | ... | 1 | 0 |

As an example: if the first byte if the grid is `10101010`, it would mean that the first point is sunlit at:
`00:00`, `00:12`, `00:24`, `00:36`, while it is shaded at `00:06`, `00:18`, `00:30`, `00:42`.

A few examples of possible `Uint8` values and what they represent:

| Uint8 | Bits | Explanation |
| --- | --- | --- |
| 255 | 1111 1111 | Point is sunlit at all the 8 corresponding points in time |
| 0 | 0000 0000 | Point is in shadow all of the 8 corresponding points in time |
| 3 | 0000 0011 | Point is sunlit the last two of the 8 corresponding points in time |

As we’re using the 30 bits packing for each sample point, we add a `mask` which denotes if each sample point is a valid
sample point.

## Code example: Sunlit points at 13:00

If you have followed the examples above and fetched a raw ground result as `sunGroundGrid`, the following code example illustrates how to generate a mask of sunlit sample points at 13:00:

```
const N_SAMPLES_PER_HOUR = 10;
const BITS_PER_BYTE = 8;
const N_BYTES_PER_POINT = 30;
const N_POINTS = sunGroundGrid.mask.length;

// Find index corresponding to 13:00
const timeIndex = 13 * N_SAMPLES_PER_HOUR; // = 130

// Find the index of the byte containing the result for 13:00
const byteIndex = Math.floor(timeIndex / BITS_PER_BYTE); // = 16

// Find the position of the bit in the byte that represents 13:00
const bitPosition = BITS_PER_BYTE - (timeIndex % BITS_PER_BYTE) - 1; // = 5

function isKthBitSet(number, k) {
  return (number & (1 << k)) > 0;
}

const sunlitPointsMask = new Float32Array(N_POINTS).fill(NaN);
for (let i = 0; i < N_POINTS; i++) {
  if (sunGroundGrid.mask[i]) {
    const scoresForPoint = sunGroundGrid.grid.slice(
      i * N_BYTES_PER_POINT,
      (i + 1) * N_BYTES_PER_POINT
    );
    // Extract the relevant byte and check if the corresponding bit is set
    sunlitPointsMask[i] = isKthBitSet(scoresForPoint[byteIndex], bitPosition);
  }
}
```

---
원본 문서: https://aps.autodesk.com/en/docs/forma/v1/embedded-views/useful-concepts/analysis/sun
