var axios = require('axios');

var helpers = {
        
      
        postForm: function(phone, initialPrice, dateBought, targetPrice){

            axios.post('http://localhost:3001/api/saved', {phone: phone, initialPrice: initialPrice, dateBought: dateBought, targetPrice: targetPrice})
            .then(function(results){

                console.log("Saved in the Database");
                return(results);
            })
        }
      }
  module.exports = helpers;

	
/*
  // Hit server to get saved articles.
  getSaved: () => {
  	return axios.get("http:localhost:3001/api/saved");
  },
  

  saveArticle: (articleTitle, articleDate, articleURL) => {

  	console.log("We have an article title to save in helper code: " + articleTitle);
  	console.log("We have an article date to save in helper code: " + articleDate);

  	return axios.post("/api/saved",
  		{
  			title: articleTitle,
  			date: articleDate,
        url: articleURL
  		}
  	);
  }

}

*/