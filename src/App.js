import React from 'react'
import 'assets/scss/style.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LandingPage from 'pages/LandingPage'
import DetailPage from 'pages/DetailPage'
import Example from 'pages/Example'
import Checkout from 'pages/Checkout'
import NotFound from 'pages/404'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/properties/:id" component={DetailPage}></Route>
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="*" component={NotFound} />
          <Route path="/example" component={Example}></Route>
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
