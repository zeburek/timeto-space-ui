import axios from 'axios'

const host = window.WORDPRESS_HOST || 'http://localhost/wordpress'

const requests = {
  getPosts: () => axios.get(`${host}/wp-json/wp/v2/posts?_embed`)
}

export default requests
