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
import withStyles from 'react-jss'

const ReactJson = dynamic(import('react-json-view'), { ssr: false });
import 'isomorphic-fetch'
const styles = {}
const theme = {
  global: {
    colors: {
      brand: '#123456'
    },
    font: {
      family: 'Roboto'
    }
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quote: '' }
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
    xhr.setRequestHeader('accept', 'application/json')

    xhr.send(data)
  }
  async componentDidMount() {
    await this.getQuote()
    //console.log(this.state.quote)
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
            <Heading margin="small">Office Quotes as a Service</Heading>
            <Heading level={2} margin="small">
              OQaaS
            </Heading>

            <Markdown>{quote}</Markdown>

            <Button
              label="Learn more"
              color="brand"
              margin="large"
              hoverIndicator
              primary
              onClick={() => window.scrollTo(0, window.innerHeight)}
            />
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
              <Markdown>{p2}</Markdown>
            </Box>
            <Box pad="medium" basis="1/3">
              <Markdown>{p3}</Markdown>
            </Box>
          </Box>
          <Box
            pad="medium"
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="full"
          >
            <Box pad="medium" basis="1/2" align="center">
              <Markdown>{example}</Markdown>
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
            <Box pad="medium" basis="1/2" align="center">
              <Markdown>{request}</Markdown>
            </Box>
            <Box pad="medium" basis="1/2" align="center">
              <ReactJson src={this.state.quote} />
            </Box>
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}

const quote = `
> "Bears. Beets. Battlestar Galactica." - Jim Halpert
`
const p1 = `
### Super Duper Fast
**OQaaS** is made with the goal of high stability and near-zero downtime.  
You can rely on us to deliver your Office quotes quickly reliably.
`
const p2 = `
### 100+ Quotes
Over 100 quotes from the office are in **OQaaS**'s database!  
Have a quote that you think should be included? Feel free to submit a request to add one!
`
const p3 = `
### Get quotes by character
You can even get a random quote from a specific character!  
*Just not from Toby*.
`
const example = `
### Check this out:
Its really easy to get started. No fancy-shmacy API keys.  
Wanna see? I bet you do.  
`
const request = `
\`\`\`
curl --request GET \
  --url https://oq.now.sh/api/r
\`\`\`
`

export default withStyles(styles)(App)
