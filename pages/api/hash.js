const bycrpt = require('bcrypt')
export default function createHashForString (req, res) {
  const {
    query: { value }
  } = req
  const r = bycrpt.hashSync(value, 0)
  res.status(200).json({ input: value, hash: r })
}
