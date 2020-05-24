import Author from '../model/author';

// Display list of all Authors.
const author_list = (req,res) =>  {
    Author.find()
          .populate('author')
          .exec((err, list_authors) => {
            if (err) { return next(err); }
            console.log(req.headers)
            res.type('json')
            res.status(200).send(list_authors);
          })
};

// Display detail page for a specific Author.
const  author_detail = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author create form on GET.
const author_create_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author create on POST.
const author_create_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET.
const author_delete_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
const author_delete_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
const author_update_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
const author_update_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: Author update POST');
};

export default {
   author_list,
   author_detail,
   author_create_get,
   author_create_post,
   author_delete_get,
   author_delete_post,
   author_update_get,
   author_update_post
}