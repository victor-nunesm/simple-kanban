import { Link, useNavigate, useRouteError } from 'react-router-dom'
import Button from '../../components/atoms/Button'
import Container from '../../components/atoms/Container'

export interface IErrorPageProps {
  title: string
  message: string
}
const ErrorPage: React.FC<IErrorPageProps> = ({ title, message }) => {
  const error = useRouteError() as any
  const navigate = useNavigate()

  return (
    <Container id="error-page">
      <h1>{title}</h1>
      <p>{message}</p>
      <Link to="/">
        <Button variant="contained">Voltar para o início</Button>
      </Link>
    </Container>
  )
}

export default ErrorPage
