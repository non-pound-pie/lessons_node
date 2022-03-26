const Blog = require('../model/blogs');


const blog_get = (req, res) => {
        Blog.find().sort({ createdAt: -1} )
         .then((result) => {
             res.render('index', { title: 'Blog', blogs: result });
         })
    }


const blog_create_get = (req, res) => {
     res.render('create', {title: 'New blog'}); }


const blog_post = (req, res) => {
    const newBlog = new Blog(req.body);

    newBlog.save()
     .then((result) => {
         res.redirect('/blogs')})
     .catch((err) => {
         console.log(err);
     })
}

const blog_find_by_id = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
     .then((result) => {
        res.render('details', { title: req.params.title, blog: result })
     })
      .catch((err) => {
          res.status(404).render('404', { title: 'Blog not found'});
      })

}

const blog_delite = (req, res) => {

    Blog.findByIdAndDelete(req.params.id)
     .then(result => {
         res.json({
             redirect: '/blogs'
         })
     })
     .catch(err => console.log(err));

}

module.exports = {
    blog_get,
    blog_post,
    blog_find_by_id,
    blog_delite,
    blog_create_get }