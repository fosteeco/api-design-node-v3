import { Router } from 'express'

// could also put controller in the methods
const controller = (req, res) => {
  res.send({ message: 'Hello' })
}

const router = Router()
router
  .route('/')
  .get(controller)
  .post((req, res) => {
    res.send(req.body)
  })
router
  .route('/:id')
  .get((req, res) => {
    res.send('from router ITem id')
  })
  .put((req, res) => {
    res.send(req.body)
  })
  .delete((req, res) => {
    res.send(req.body)
  })

export default router
