import { useState } from "react"
import "./App.css"
import { Container, Navbar, Row, Col } from "react-bootstrap"
import AddBook from "./Components/AddBook"
import BookList from "./Components/BookList"

function App() {
  const [bookId, setBookId] = useState("")

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id)
    setBookId(id)
  }
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Library - Firebase CRUD</Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BookList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
