import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated &&(
            <article class="column">
                {JSON.stringify(user)}
            </article>
        )
    )
}

export default Profile