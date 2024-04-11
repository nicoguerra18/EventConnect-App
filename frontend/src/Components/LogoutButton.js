import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated &&(
            <Button
            variant="danger"
            className="mb-3"  
            onClick={()=>logout()}
            margin-left="100px"
            >
                Sign Out
            </Button>
        )
    )
}

export default LogoutButton