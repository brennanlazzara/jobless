// const mongoose = require('mongoose');
const router = require('express').Router();
// const Articles = mongoose.model('Articles');
const Articles = require('../../models/Articles');

router.post('/', (req, res, next) => {
    const { body } = req;

    if (!body.title) {
        return res.status(422).json({
            errors: {
                title: 'is required',
            },
        });
    }

    if (!body.author) {
        return res.status(422).json({
            errors: {
                author: 'is required',
            },
        });
    }

    if (!body.body) {
        return res.status(422).json({
            errors: {
                body: 'is required',
            },
        });
    }

    const finalArticle = new Articles(body);
    return finalArticle.save()
        .then(() => res.json({ article: finalArticle.toJSON() }))
        .catch(next);
});

router.get('/', async (req, res, next) => {
    const response = await Articles.find();
    console.log(response)
    return res.json(response)
});

router.get('/:id', (req, res, next) => {

    return res.json({
        article: req.article.toJSON()
    });
});

router.patch('/:id', (req, res, next) => {
    const { body } = req;

    if (typeof body.title !== 'undefined') {
        req.article.title = body.title;
    }

    if (typeof body.author !== 'undefined') {
        req.article.author = body.author;
    }

    if (typeof body.body !== 'undefined') {
        req.article.body = body.body;
    }

    return req.article.save()
        .then(() => res.json({ article: req.article.toJSON() }))
        .catch(next);
});

router.delete('/:id', async (req, res) => {
    try {
      const post = await Articles.findById(req.params.id);
      
      await post.remove();
      res.json({ msg: 'Post removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;