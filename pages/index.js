import * as React from 'react'
import fetch from 'node-fetch'

const App = () => {
  const [result, setResult] = React.useState('')
  const [text, setText] = React.useState('')
  const handleClick = () => {
    const url = `/api/hash?value=${text}`
    setResult('Generating hash please wait')
    fetch(url)
      .then(r => r.json())
      .then(j => {
        setResult(j)
      })
      .catch(e => console.log(e))
  }
  return (
    <>
      <p>Generate hash for a string value</p>
      String :{' '}
      <input
        type='text'
        onChange={e => {
          const { value } = e.target
          setText(value)
        }}
      />
      {result && <p>{JSON.stringify(result)}</p>}
      <input type='button' value='Click' onClick={handleClick} />
    </>
  )
}

export default App
