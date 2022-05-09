import { Container } from 'react-bootstrap'

const Header = () => {
  return (
    <Container>
      <div className='pl-5 mt-5'>
        <h3>Sample App</h3>
        <p className='lead'>Lists github organizations, and their repositories</p>
      </div>
    </Container>
  )
}

export default Header
