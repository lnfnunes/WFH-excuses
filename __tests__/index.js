const db = require('../db.json')
const pickExcuse = require('../wfh-excuses.js')

test('Should store DB reference', () => {
  const wfh = pickExcuse(db)

  expect(wfh.db).toBeDefined();
  expect(JSON.stringify(wfh.db.excuses)).toBe(JSON.stringify(db.excuses));
  expect(wfh.db).not.toBe(db.excuses);
});

test('Should not modify external DB reference', () => {
  const wfh = pickExcuse(db)

  wfh.db.excuses[0] = null
  wfh.db.excuses[1] = 'Imutable!'
  expect(wfh.db.excuses[0]).not.toBe(db.excuses[0]);
  expect(wfh.db.excuses[1]).not.toBe(db.excuses[1]);
  expect(wfh.db.excuses[2].en).toBe(db.excuses[2].en);
});

test('Should use a custom language code', () => {
  const lang = 'pt'
  const wfh = pickExcuse(db, 'pt')
  const arrValid = db.excuses.map(item => item[lang])
  expect(arrValid.includes(wfh.pick())).toBe(true)
});

test('Should return an invalid language code message', () => {
  const lang = 'EN_PT'
  const wfh = pickExcuse(db, lang)
  expect(wfh.pick()).toBe(`Invalid language (${lang})`);
});
