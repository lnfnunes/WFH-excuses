const db = require('../database.json')
const wfh = require('../index.js')()

test('Should return a random excuse from default language (en)', () => {
  const lang = 'en'
  const arrValid = db.excuses.map(item => item[lang])
  expect(arrValid.includes(wfh.pick())).toBe(true)
});

test('Should return a random excuse from default language (en)', () => {
  const lang = 'pt'
  const arrValid = db.excuses.map(item => item[lang])
  expect(arrValid.includes(wfh.pick('pt'))).toBe(true)
});

test('Should return an invalid language code message', () => {
  const lang = 'EN_PT'
  expect(wfh.pick(lang)).toBe(`Invalid language (${lang})`);
});

test('Should lowerCase language value', () => {
  const lang = 'EN'
  const arrValid = db.excuses.map(item => item[lang.toLowerCase()])
  expect(arrValid.includes(wfh.pick())).toBe(true)
});

test('Should store a DB reference', () => {
  expect(wfh.db).toBeDefined();
  expect(JSON.stringify(wfh.db.excuses)).toBe(JSON.stringify(db.excuses));
  expect(wfh.db).not.toBe(db.excuses);
});

test('Should not modify external DB reference', () => {
  wfh.db.excuses[0] = null
  wfh.db.excuses[1] = 'Imutable!'
  expect(wfh.db.excuses[0]).not.toBe(db.excuses[0]);
  expect(wfh.db.excuses[1]).not.toBe(db.excuses[1]);
  expect(wfh.db.excuses[2].en).toBe(db.excuses[2].en);
});

test('Should initialize with a default custom language code', () => {
  const lang = 'pt'
  const wfhCustom = require('../index.js')(lang)
  const arrValid = db.excuses.map(item => item[lang])
  expect(arrValid.includes(wfhCustom.pick())).toBe(true)
});
