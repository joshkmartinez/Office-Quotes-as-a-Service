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
  Paragraph,
  Anchor
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
class Docs extends React.Component {
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
          <title>OQaaS Docs</title>
        </Head>
        <Grommet theme={theme}>
          <Box
            animation="fadeIn"
            align="center"
            margin="large"
            alignContent="center"
            background="whitesmoke"
          >
            <Heading margin="small">Office Quotes as a Service Docs</Heading>
            <Heading level={2} margin="small">
              OQaaS Docs
            </Heading>

            <Heading level={5} margin="small" textAlign="center">
              {this.state.quote.quote}
            </Heading>
            <Heading level={5} margin="small">
              - {this.state.quote.name}
            </Heading>
          </Box>
          <Box
            direction="row-responsive"
            pad="medium"
            align="center"
            alignContent="center"
            animation="zoomIn"
            basis="full"
          >
            {' '}
            <Box pad="medium" basis="full" align="center" alignContent="center">
              <Anchor href="#endpoints" primary label="Endpoints" />
              <Markdown>{endpoints}</Markdown>
            </Box>
            <Box pad="medium" basis="full" align="center" alignContent="center">
              <Anchor href="#domains" primary label="Aliases" />
              <Markdown>{domains}</Markdown>
            </Box>
          </Box>
        </Grommet>
      </React.Fragment>
    )
  }
}
const endpoints = `
- **/random**
  - Aliases ~ /r, /quote, /q
  - This endpoint returns a random quote from The Office. Plain and simple.
- **/all**
  - Aliases ~ /list, /a, /allQuotes
  - This returns all of the quotes within the database.
- **/ping**
  - Aliases ~ /pong
  - Returns \`"pong"\`.
`
const domains = `
## Here are the domains that this service can be accessed from:
theOffice.now.sh  
oqaas.now.sh  
officeQuotesAPI.now.sh  
oq.now.sh  
OfficeQuotesAsAService.now.sh  
OfficeQuotesAsAServiceAPI.now.sh  
officeAPI.now.sh  
theOfficeAPI.now.sh  
dunderMifflinAPI.now.sh  
michealScottPaperCompany.now.sh  
sabre.now.sh  
officeQuotes.now.sh  
dunderMifflin.now.sh  
jim.now.sh  
dwight.now.sh  
toby.now.sh  
oAPI.now.sh  
oqAPI.now.sh  
officeQuoteAPI.now.sh  
micheal.now.sh  
michealScott.now.sh  
DwightSchrute.now.sh  
schruteFarm.now.sh  
schruteFarms.now.sh  
`
export default Docs
