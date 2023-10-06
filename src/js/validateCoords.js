// pattern="^\[?\-?\d{1,2}\.\d{1,}\,\s?\-?\d{1,3}\.\d{1,}\]?$"
// [32.1772375,-129.7764664683]
// [-12.1772375, 129.7764664683]
// 3.1772375, -129.7764664683
// -78.64563, -312.3423
// 11.2345,-128.545363

export default function validateCoords(str) {
  const result = str.match(/^\[?(-?\d{1,2}\.\d{1,}),\s?(-?\d{1,3}\.\d{1,})\]?$/);
  if (result === null) return false;
  if (result !== null) {
    const latitude = Number(result[1]);
    const longitude = Number(result[2]);
    if (latitude < 90 && latitude > -90 && longitude < 180 && longitude > -180) {
      // eslint-disable-next-line no-param-reassign
      const coords = `[${latitude}, ${longitude}]`;
      return coords;
      // console.log(`[${latitude}, ${longitude}]`);
      // return true;
    }
  }
  return false;
}
