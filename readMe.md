"height": "202", https://swapi.dev/api/people/4/

"population": "2000000000",https://swapi.dev/api/planets/2


"manufacturer": "Corellian Engineering Corporation", https://swapi.dev/api/starships/10/

the name of the species that C-3PO belongs to (multiple URLs)

"name": "Droid",
https://swapi.dev/api/people, 
https://swapi.dev/api/species/2

the title of each film that Obi-Wan Kenobi is in (multiple URLs)

    "title": "A New Hope",
    "title": "The Empire Strikes Back"
    "title": "Return of the Jedi",
    "title": "The Phantom Menace",
    "title": "Attack of the Clones",
    "title": "Revenge of the Sith",

    https://swapi.dev/api/films/1/,
    https://swapi.dev/api/films/2/,
    https://swapi.dev/api/films/3/,
    https://swapi.dev/api/films/4/,
    https://swapi.dev/api/films/5/,
    https://swapi.dev/api/films/6/,

https://swapi.dev/api/people/10/

use the search query (the how to on the search query is at the bottom of the Getting Started section of the documentation) to get the information about the Millennium Falcon, it’s a starship

https://swapi.dev/api/people/?search=millenium


Part 2

Check if the POST request accept params, queries, and/or a body. Which one(s) and what information is it expecting to be sent?

accepts body text

What data type does the GET request return?
array of objects


What would the URL look like for deleting the post with the id 555? (This post does not exist anymore, but the syntax is the same for existing posts, )

https://practiceapi.devmountain.com/api/posts/?id=555

List the possible response codes from the GET request at ‘/posts/filter’

409 conflict
"Request query is missing required text property."


Create a post whose text is your name, record the URL and body here:

https://practiceapi.devmountain.com/api/posts

{
        "id": 49,
        "text": "Chaltu",
        "date": "13 Jul 2022"
    },


What would the URL and body object be to update the post you just made to contain your faovrite color instead of your name?

(put)

https://practiceapi.devmountain.com/api/posts/?id=49

 {
        "id": 49,
        "text": "Black",
        "date": "13 Jul 2022"
    },

What is the URL to get posts that contain the text “blue”?

    https://practiceapi.devmountain.com/api/posts/filter/?text=blue

 Make a request to GET all the posts. What are the content type and charset of the response? (Hint: look on the Headers)

    content type: application/json; charset=utf-8

 What would cause a PUT request to return a 409 status?

    409 conflict
	Request was missing req.query.id or req.body.text

What happens if you try to send a query in the GET request URL? Why do you get that response?

    you get all posts since they didnt allow to add an id query but  allows text query to be accessed.
