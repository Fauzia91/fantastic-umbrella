const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  
  try{
     const result = await Category.findAll();
     res.json(result)
  } catch (err){
    console.log(err)
  }
  
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try{
    const result = await Category.findOne({
      where: {id: req.params.id}
    });
    res.json(result)
 } catch (err){
   console.log(err)
 }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
 
  try{
    const result = await Category.create({
      category_name:req.body.category_name
    });
    res.json(result)
 } catch (err){
   console.log(err)
 }


});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try{
    const result = await Category.update({
      category_name:req.body.category_name
    },{
      where: {
        id: req.params.id
      }
    });
    res.json(result)
 } catch (err){
   console.log(err)
 }

});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const result = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json(result)
 } catch (err){
   console.log(err)
 }


});

module.exports = router;
