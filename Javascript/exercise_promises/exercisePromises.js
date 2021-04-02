// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
	promise = new promise(resolve, reject) =>{
		setTimeout(resolve, 4000, 'success');
	}

// #2) Run the above promise and make it console.log "success"
	promise.then(result => console.log(result + 'success')


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
promise.resolve('sucess');

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
	.catch(() => console.log('opps something went wrong'));



// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

promise.all(urls.map(urls => {
	return fetch(urls).then(convert => convert.json)
	.then(result => {
		console.log(result[0])
		console.log(result[1])
		console.log(result[2])
		console.log(result[3])
	}).catch(() => console.log('error detected'))
})) 
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?

const urls2 = [
  'http://swapi.dedv/ap/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

promise.all(urls2.map(url =>{
	return fetch(url2).then(response => response.json())
	.then(result => {
		console.log(result[0])
		console.log(result[1])
		console.log(result[2])
		console.log(result[3])
	}).catch(() => console.log('error found'))
}))
