import * as tokens from '../tokens/client_ids';

function useTokens(): void {

    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id=' + tokens.CLIENT_ID + '&client_secret=' + tokens.CLIENT_SECRET
    })
        .then(res => res.json())
        .then(data => localStorage.setItem("token", "Bearer " + data.access_token))
        .catch(err => console.log(err)
        )
}

export default useTokens;