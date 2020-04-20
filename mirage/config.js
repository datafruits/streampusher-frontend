import ENV from "streampusher-frontend/config/environment";

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = ENV.API_HOST;    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */
  //this.post('/setup.json');
  this.get('/radios.json?me=true', () => {
    return {radio:{id:1,default_playlist_id:1}};
  });
  this.get('/users/current_user.json', () => {
    return {user:{id:1,username:"datafruits",email:"mcfiredrill@gmail.com",time_zone:"Seoul",role:"admin",social_identities:[]}}
  });

  this.get('/djs.json', () => {
    return {djs:[{id:11,username:"firedrill123",email:"mcfiredrill123@gmail.com",time_zone:"Seoul",role:"dj",social_identities:[]}]};
  });

  this.post('/djs.json', () => {
    return {user:{id:2,username:"fruitskiki",email:"fruitskiki@gmail.com",time_zone:"Seoul",role:"admin",social_identities:[]}}
  });

  this.put('/djs/:id.json', ({ djs }, request) => {
    let { id, email, username }  = request.params;

    return {user:{id: id, username: username, email: email,time_zone:"Seoul",role:"admin",social_identities:[]}}
  });

  this.logging = true;
}
