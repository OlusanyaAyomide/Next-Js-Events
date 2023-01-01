export default function handler(apiroute, body) {
  return async()=>{
    async function FetchApi(){
      const res = await fetch(apiroute, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const status = res.status;
      const data = await res.json();
      return { data: data, status: status };
    }
    const response = await FetchApi()
    return response
  }
}
