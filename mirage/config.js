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
    return {user:{id:11,username:"datafruits",email:"mcfiredrill@gmail.com",time_zone:"Seoul",role:"admin",social_identities:[]}}
  });

  this.get('/djs.json', (schema, request) => {
    const keyword = request.queryParams["search[keyword]"];
    let users = schema.users.all().models.map((user) => {
      return { id:  user.attrs.id, username: user.attrs.username, email: user.attrs.email, time_zone:"Seoul",role:"dj",social_identities:[] };
    });
    if(keyword){
      users = users.filter((user) => {
        return user.username.includes(keyword);
      })
    }
    return { djs: users };
  });

  this.post('/djs.json', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).user;
    const user = schema.users.create(attrs);
    user.save();
    return {user:{id:user.attrs.id,username:user.attrs.username,email:user.attrs.email,time_zone:"Seoul",role:"admin",social_identities:[]}}
  });

  this.put('/djs/:id.json', ({ djs }, request) => {
    let { id, email, username }  = request.params;

    return {user:{id: id, username: username, email: email,time_zone:"Seoul",role:"admin",social_identities:[]}}
  });

  this.logging = true;
}
