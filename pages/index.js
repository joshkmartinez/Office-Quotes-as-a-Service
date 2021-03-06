import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Markdown,
  Paragraph
} from 'grommet'
const ReactJson = dynamic(import('react-json-view'), { ssr: false })
import 'isomorphic-fetch'
const theme = {
  global: {
    colors: {
      brand: '#123456'
    },
    font: {
      family: 'Helvetica'
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quote: '', num: '0' }
  }
  getNumQuote = () => {
    var data = null
    var xhr = new XMLHttpRequest()
    let setResponse = r => {
      this.setState({ num: r })
    }
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        setResponse(this.responseText)
      }
    })

    xhr.open('GET', 'https://oq.now.sh/api/n')
    xhr.send(data)
  }
  getQuote = () => {
    var data = null
    var xhr = new XMLHttpRequest()
    let setResponse = r => {
      this.setState({ quote: JSON.parse(r) })
    }
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        setResponse(this.responseText)
      }
    })

    xhr.open('GET', 'https://oq.now.sh/api/r')
    xhr.send(data)
  }

  componentDidMount() {
    this.getQuote()
    this.getNumQuote()
  }
  render() {
    return (
      <React.Fragment>
        <Head>
          <title>OQaaS</title>
        </Head>
        <Grommet theme={theme}>
          <Box
            animation="fadeIn"
            align="center"
            margin="large"
            alignContent="center"
            background="whitesmoke"
          >
            <Heading margin="small" textAlign="center">
              Office Quotes as a Service
            </Heading>
            <Heading level={2} textAlign="center" margin="medium">
              OQaaS
            </Heading>

            <Heading level={5} margin="small" textAlign="center">
              {this.state.quote.quote}
            </Heading>
            <Heading level={5} margin="small">
              - {this.state.quote.name}
            </Heading>
            <Box
              direction="row-responsive"
              pad="medium"
              align="center"
              alignContent="center"
              animation="zoomIn"
              basis="full"
            >
              <Button
                label="Learn more"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                onClick={() => window.scrollTo(0, window.innerHeight)}
              />
              <Button
                label="Documentation"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                href="/docs"
              />
              <Button
                label="Github"
                color="brand"
                margin="medium"
                hoverIndicator
                primary
                href="https://github.com/joshkmartinez/Office-Quotes-as-a-Service"
              />
            </Box>
          </Box>
          <Box
            direction="row-responsive"
            pad="medium"
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="full"
          >
            <Box pad="medium" basis="1/3">
              <Markdown>{p1}</Markdown>
            </Box>
            <Box pad="medium" basis="1/3">
              <Markdown>{p2(this.state.num)}</Markdown>
            </Box>
            <Box pad="medium" basis="1/3">
              <Markdown>{p3}</Markdown>
            </Box>
          </Box>
          <Box
            pad="small"
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="full"
            background="whitesmoke"
          >
            <Box pad="medium" basis="2/3" align="center">
              <Markdown>{example}</Markdown>
            </Box>
          </Box>
          <Box
            direction="row-responsive"
            pad="small"
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="full"
          >
            <Box pad="medium" basis="1/2" align="center">
              <Markdown>{request}</Markdown>
            </Box>
            <Box pad="medium" basis="1/2" align="center">
              <ReactJson src={this.state.quote} />
            </Box>
          </Box>
          <Box
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="1"
            background="whitesmoke"
          >
            <Markdown>{toDocs}</Markdown>
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}
const p1 = `
### Super Duper Fast
**OQaaS** is made with the goal of high stability and near-zero downtime.  
You can rely on us to deliver your Office quotes quickly reliably.
`
let p2 = n => {
  let a =
    `
###  Tons of quotes
There are currently **` +
    n +
    `**
quotes from The Office are in **OQaaS**'s database!  
Have a quote that you think should be included? Feel free to submit a [pull request](https://github.com/joshkmartinez/Office-Quotes-as-a-Service) to add one!
`
  return a
}

const p3 = `
### Who said that?
In addition to a random quote, you also get the name of the character who said it!
`
const example = `
### Check this out!
Its really easy to get started. No fancy-shmacy API keys.
Just send a \`GET\` request to one of [*many domains*](docs#domains).  
**Look at this example in javascript:**  
`
const request = `
\`\`\`
var data = null
var xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', function() {
  if (this.readyState === this.DONE) {
    console.log(this.responseText)
  }
})
xhr.open('GET', 'https://oq.now.sh/api/r')
xhr.send(data)

\`\`\`
`
const toDocs = `
## [Go to the docs](/docs)
`
export default App
