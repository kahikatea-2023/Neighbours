



//./classified
//get, post, update, delete

//./classified/id

router.get('/location/', async (req, res) => {
  try {
    const fruits = await db.get()

    res.json({ fruits: fruits.map((fruit) => fruit.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})