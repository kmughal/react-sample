
export default function getPeopleJson(req, res) {
    let fs = require("fs")
    let path = require("path")
    let peopleJsonFilePath = path.resolve(process.cwd(), "posts", "people.json")
    let contents = fs.readFileSync(peopleJsonFilePath, "utf-8")

    let parseJson = JSON.parse(contents)

    res.status(200).json(parseJson)
}
