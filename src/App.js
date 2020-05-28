import React, { useState, useEffect } from 'react'
import routes from './routes'
import Header from './components/Header'
import axios from 'axios'
import { setInfo } from './redux/reducer'
import { connect } from 'react-redux'

function App({ setInfo }) {
  useEffect(() => {
    axios.get('/api/info').then((res) => {
      setInfo(res.data)
    })
  }, [])
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}



export default connect(null, { setInfo })(App)
