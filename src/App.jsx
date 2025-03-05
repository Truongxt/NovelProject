import './App.css'
import TestUseMemo from "./components/TestUseMemo"
function App() {

  return (
    <>
      {/* <Routes>
          <Route path="/" element = {<Home/>} />

          <Route path="contact" element = {<Contact/>}>
          
              <Route path="child" element = {<ContactChild/>}> 
                    <Route path="about" element = {<About/>} />
              </Route>
              <Route path="child2" element = {<ContactChild2/>}/>

          </Route>
      </Routes> */}
      {/* <TestReducer/> */}
      {/* <TetsEffect/> */}
      <TestUseMemo/>
    </>
  )
}

export default App
