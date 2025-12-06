// Simple API helper: tries to fetch real API first, otherwise loads local mock (when served via http)
const API = (function(){
  // change this if you run json-server
  const REST_BASE = 'http://localhost:3000';

  async function fetchJson(url){
    const res = await fetch(url);
    if(!res.ok) throw new Error('Fetch failed: ' + url);
    return res.json();
  }

  return {
    // try json-server first (if running), fall back to static backend-mock
    async getBooks(){
      try {
        // try REST first
        return await fetchJson(REST_BASE + '/books');
      } catch(e){
        // fallback to static file (works when served by local http server)
        return (await fetchJson('backend-mock/books.json')).books;
      }
    },
    async getMessages(){
      try {
        return await fetchJson(REST_BASE + '/messages');
      } catch(e){
        return (await fetchJson('backend-mock/messages.json')).messages;
      }
    },
    async fakeLogin(email, password){
      try {
        const res = await fetchJson(REST_BASE + '/users');
        return res.find(u => u.email===email && u.password===password) || null;
      } catch(e){
        const data = await fetchJson('backend-mock/fake-login.json');
        return (data.users || []).find(u => u.email===email && u.password===password) || null;
      }
    }
  }
})();
window.API = API;
