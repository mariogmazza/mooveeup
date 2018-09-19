import React from 'react';
import {Container} from 'semantic-ui-react'
import GetRandomMovie from '../container/GetRandomMovie'

const mapState=(state)=>({
  backGround: state.moviePicked.data
})

const Layout = () => {
  return (
    <Container textAlign={'center'} >
      <GetRandomMovie />
    </Container>
  )
}


export default Layout
