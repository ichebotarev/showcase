import axios from 'axios'

// const appId = '140190518288718';
// const secret = '6f1dca7b7e83c385511407e31e1a053a';
// const userId = '215282620'
//AQD5jLYxztw5CWGq26vgl8XMIddyBZ1pC3u8jK1AgCBI2qxIa6BKD1JBKLlcXEPGYE3B4inbp8MT4TTaeaKadJrm6dmt7lo5Twp_MpMSgE6FvZavbG-7gJhwLJqQ56W-7WjJe0Fr6s7M8oyDAzPoU6PdXvoeJBXFmVvazbBH_jztZ6SnCvOazlw9Ql8FpjHKYTa_KswUoBdTH_p2S9-S71q_3qvj0KWpywA2ByVGW3Qacw

//GET https://graph.instagram.com/{api-version}/215282620/media
//?access_token={access-token}

export default axios.create({
    baseURL: "https://graph.facebook.com/v12.0/instagram_oembed",
    params : {
        url: 'https://www.instagram.com/p/CUy0hMfrUXv/',
        app_ID: '572106687239816',
    },
    
    
        // headers: {
        //   'Authorization': `Discogs key=OSnhRfiWZUEELGOxcLMy, secret=vlVgwHSdiodkCNPlPCodMxIbOprExTPS` 
        // }
    
})