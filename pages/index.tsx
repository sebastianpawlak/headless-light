export default async (req, res) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 20000);
    })
  
    res.end('Test')
  }
