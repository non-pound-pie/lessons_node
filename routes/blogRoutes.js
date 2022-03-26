const express = require('express');
const blogController = require('../controllers/blogControllers');

const router = express.Router();


router.get('/', blogController.blog_get);
router.get('/create', blogController.blog_create_get);
router.post('/', blogController.blog_post);
router.get('/:id', blogController.blog_find_by_id);
router.delete('/:id', blogController.blog_delite);


module.exports = router;
