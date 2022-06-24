import {Router} from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hola mundo')
})

router.post('/', (req, res) => {
  res.send('Lorem')
})

router.delete('/blog', (req, res) => {
  res.send('Lorem')
})

router.put('/blog', (req, res) => {
  res.send('Lorem')
})

export default router