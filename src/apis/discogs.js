import axios from 'axios'

//const key = 'OSnhRfiWZUEELGOxcLMy';


export default axios.create({
    baseURL: "https://api.discogs.com/artists/7206848/releases",
    
        headers: {
          'Authorization': `Discogs key=OSnhRfiWZUEELGOxcLMy, secret=vlVgwHSdiodkCNPlPCodMxIbOprExTPS` 
        }
    
})