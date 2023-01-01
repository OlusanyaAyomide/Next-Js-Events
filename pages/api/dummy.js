export default async function handler(req, res) {
    console.log(res)
  const response = await fetch("http://127.0.0.1:8000/tester");
  const data = await response.json();
  if(res){
    res.json(data);
  }
  return data

}
