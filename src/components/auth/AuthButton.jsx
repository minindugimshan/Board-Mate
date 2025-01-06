import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function AuthButton() {
  const navigate = useNavigate()

  return (
    <Button
      color="primary"
      variant="outlined"
      onClick={() => navigate('/signin')}
    >
      Sign in
    </Button>
  )
}

export default AuthButton