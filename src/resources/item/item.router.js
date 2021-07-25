import { Router } from 'express'

const router = Router()
router.route('/').get((req, res) => {
  res.send('good')
})
router
  .route('/:id')
  .get((req, res) => {
    res.send('from router ITem id')
  })
  .post((req, res) => {
    res.send(req.body)
  })
  .put((req, res) => {
    res.send(req.body)
  })
  .delete((req, res) => {
    res.send(req.body)
  })

export default router
