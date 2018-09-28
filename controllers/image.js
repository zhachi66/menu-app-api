const clarifai = require('clarifai');

const app = new Clarifai.App({
 apiKey: 'ac079fc191ed4ed4957474d759762e7b'
});

const handleUrlImage =(req,res) =>
{	
app.models
.predict("a403429f2ddf4b49b307e318f00e528b", req.body.UrlImg)
.then(data =>{res.json(data)})
.catch(err => res.status(400).json('unable to work with img api'))
}
const handleImage = (req,res,db)=>{
	  	const {id} = req.body;
       db('users').where('id' , '=', id)
       .increment('entries',1)
       .returning('entries')
       .then(entries =>
       	{
       		res.json(entries[0]);
       	})
       .catch(err=>res.status(400).json('unable to get entries')) 
}
module.exports = 
{
	handleImage: handleImage,
	handleUrlImage : handleUrlImage
}