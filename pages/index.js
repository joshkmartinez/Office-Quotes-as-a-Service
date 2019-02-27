import React from 'react'
import Head from 'next/head'
import { Grommet, Box, Heading, Button, Text, Markdown } from 'grommet'
import withStyles from 'react-jss'

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
  componentDidMount() {}
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
            direction="row"
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
Wanna see?  
\`\`\`
GET oq.now.sh/api
\`\`\`
`
export default withStyles(styles)(App)
