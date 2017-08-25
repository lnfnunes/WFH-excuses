const request = require('request')
const db = require('../db.json')

const ajax = (url) => new Promise(resolve => request(url, (err, res, body) => resolve(body)))

test('Should get a random excuse from DB', async () => {
  const result = await ajax(`http://localhost:8000/wfh`)
  expect(typeof result).toBe('string');

  const arrValid = db.excuses.map(item => item.en)
  expect(arrValid.includes(result)).toBe(true)
});

test('Should get a random excuse from DB with custom language', async () => {
  const lang = 'pt'
  const result = await ajax(`http://localhost:8000/wfh?lang=${lang}`)

  const arrValid = db.excuses.map(item => item[lang])
  expect(arrValid.includes(result)).toBe(true)
});
