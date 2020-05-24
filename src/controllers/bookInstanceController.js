import BookInstance from '../model/bookinstance';
// Display list of all BookInstances.
const bookinstance_list = (req,res) => {
    BookInstance.find()
    .populate('bookinstances')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.send(list_bookinstances)
    });
};

// Display detail page for a specific BookInstance.
const bookinstance_detail = (req,res) =>  {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
const bookinstance_create_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: BookInstance create GET');
};

// Handle BookInstance create on POST.
const bookinstance_create_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: BookInstance create POST');
};

// Display BookInstance delete form on GET.
const bookinstance_delete_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
const bookinstance_delete_post = (req,res) => {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
const bookinstance_update_get = (req,res) =>  {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
const bookinstance_update_post = (req,res) =>  {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};

export default {
    bookinstance_list,
    bookinstance_detail,
    bookinstance_create_get,
    bookinstance_create_post,
    bookinstance_delete_get,
    bookinstance_delete_post,
    bookinstance_update_get,
    bookinstance_update_post 
}