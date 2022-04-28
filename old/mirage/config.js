import ENV from 'streampusher-frontend/config/environment';
import { Response } from 'ember-cli-mirage';

export default function () {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = ENV.API_HOST; // make this `http://localhost:8080`, for example, if your API is on a different server
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
    return { radio: { id: 1, default_playlist_id: 1 } };
  });
  this.get('/users/current_user.json', () => {
    return {
      user: {
        id: 11,
        username: 'datafruits',
        email: 'mcfiredrill@gmail.com',
        time_zone: 'Seoul',
        role: 'admin',
        social_identities: [],
      },
    };
  });

  this.get('/djs.json', (schema, request) => {
    const keyword = request.queryParams['search[keyword]'];
    let users = schema.users.all().models.map((user) => {
      return {
        id: user.attrs.id,
        username: user.attrs.username,
        email: user.attrs.email,
        time_zone: 'Seoul',
        role: 'dj',
        social_identities: [],
      };
    });
    if (keyword) {
      users = users.filter((user) => {
        return user.username.includes(keyword);
      });
    }
    return { djs: users };
  });

  this.post('/djs.json', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).user;
    const user = schema.users.create(attrs);
    user.save();
    return {
      user: {
        id: user.attrs.id,
        username: user.attrs.username,
        email: user.attrs.email,
        time_zone: 'Seoul',
        role: 'admin',
        social_identities: [],
      },
    };
  });

  this.put('/djs/:id.json', ({ djs }, request) => {
    let { id, email, username } = request.params;

    return {
      user: {
        id: id,
        username: username,
        email: email,
        time_zone: 'Seoul',
        role: 'admin',
        social_identities: [],
      },
    };
  });

  this.post('/playlists.json', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).playlist;
    const playlist = schema.playlists.create(attrs);
    playlist.save();
    return {
      playlist: {
        id: playlist.attrs.id,
        name: playlist.attrs.name,
      },
    };
  });

  this.get('/playlists/:id', (schema, request) => {
    let playlist = schema.playlists.find(request.params.id.split('.')[0]); // id is "1.json"

    return {
      playlist: {
        id: playlist.attrs.id,
        name: playlist.attrs.name,
      },
    };
  });

  this.get('/tracks.json', () => {
    return {
      tracks: [
        {
          id: 9055,
          audio_file_name:
            'https://streampusher.s3.amazonaws.com/datafruits/oaths-crimebird-boxsocial-1214.mp3',
          display_name: 'oaths-crimebird-boxsocial-121420',
          artist: null,
          title: 'oaths-crimebird-boxsocial-121420',
          album: null,
          created_at: '2020-12-13T08:55:11.575-08:00',
          updated_at: '2021-03-16T18:57:02.520-07:00',
          artwork: {
            basename:
              '_oaths-crimebird-boxsocial-121420__19847af1adb659006f7b42a01a3365d5de5a13a22e0309233ba13e141cd42774.png',
            attachment: 'artworks',
            updated_at: 1615946222,
          },
          artwork_filename:
            '_oaths-crimebird-boxsocial-121420__19847af1adb659006f7b42a01a3365d5de5a13a22e0309233ba13e141cd42774.png',
          mixcloud_upload_status: 'mixcloud_not_uploaded',
          mixcloud_key: null,
          soundcloud_upload_status: 'soundcloud_not_uploaded',
          soundcloud_key: null,
          embed_link:
            'http://datafruits.streampusher.com:3000:3000/tracks/9055/embed',
          cdn_url:
            'https://dongles-dev.streampusher-relay.club/https://streampusher.s3.amazonaws.com/datafruits/oaths-crimebird-boxsocial-1214.mp3?1615946222',
          label_ids: [214, 451, 391],
          uploaded_by: 'oaths',
          scheduled_show_id: 443275,
          formatted_duration: '02:02:02',
        },
        {
          id: 9054,
          audio_file_name:
            'https://streampusher.s3.amazonaws.com/datafruits/datafruits-synkretic-2020-12-12-craft-radio.mp3',
          display_name: 'craft_radio w/ host Synkretic - 12122020',
          artist: '',
          title: 'craft_radio w/ host Synkretic - 12122020',
          album: '',
          created_at: '2020-12-12T20:16:47.986-08:00',
          updated_at: '2020-12-12T21:18:04.102-08:00',
          artwork: {
            basename:
              '_craft_radio-w-host-synkretic-12122020__f5ed7af764e95f1a059a0b2350758598f5a75b6618ab11fd1b2430070a434e63.png',
            attachment: 'artworks',
            updated_at: 1607836683,
          },
          artwork_filename:
            '_craft_radio-w-host-synkretic-12122020__f5ed7af764e95f1a059a0b2350758598f5a75b6618ab11fd1b2430070a434e63.png',
          mixcloud_upload_status: 'mixcloud_not_uploaded',
          mixcloud_key: null,
          soundcloud_upload_status: 'soundcloud_not_uploaded',
          soundcloud_key: null,
          embed_link:
            'http://datafruits.streampusher.com:3000:3000/tracks/9054/embed',
          cdn_url:
            'https://dongles-dev.streampusher-relay.club/https://streampusher.s3.amazonaws.com/datafruits/datafruits-synkretic-2020-12-12-craft-radio.mp3?1607836684',
          label_ids: [135, 19, 140, 24, 77, 137],
          uploaded_by: null,
          scheduled_show_id: 437306,
          formatted_duration: '02:02:36',
        },
        {
          id: 9050,
          audio_file_name:
            'https://streampusher.s3.amazonaws.com/datafruits/dhl_firedrill_xmas_mix_12112020.mp3',
          display_name: 'firedrill - xmas mix for DHL - 12112020',
          artist: '',
          title: 'firedrill - xmas mix for DHL - 12112020',
          album: '',
          created_at: '2020-12-11T05:04:42.165-08:00',
          updated_at: '2020-12-11T17:37:56.755-08:00',
          artwork: null,
          artwork_filename: null,
          mixcloud_upload_status: 'mixcloud_not_uploaded',
          mixcloud_key: null,
          soundcloud_upload_status: 'soundcloud_not_uploaded',
          soundcloud_key: null,
          embed_link:
            'http://datafruits.streampusher.com:3000:3000/tracks/9050/embed',
          cdn_url:
            'https://dongles-dev.streampusher-relay.club/https://streampusher.s3.amazonaws.com/datafruits/dhl_firedrill_xmas_mix_12112020.mp3?1607737076',
          label_ids: [],
          uploaded_by: 'mcfiredrill',
          scheduled_show_id: null,
          formatted_duration: '00:32:49',
        },
      ],
      meta: { page: '1', total_pages: 1 },
    };
  });

  this.get('/labels.json', () => {
    return {
      labels: [
        { id: 1, name: 'disco' },
        { id: 2, name: 'house' },
        { id: 3, name: '140' },
        { id: 4, name: 'grime' },
        { id: 5, name: 'italo' },
        { id: 6, name: 'nightcore' },
        { id: 7, name: 'club' },
        { id: 8, name: 'juke' },
        { id: 9, name: 'footwork' },
        { id: 10, name: 'NRG' },
        { id: 11, name: 'skweee' },
        { id: 12, name: 'techno' },
        { id: 13, name: 'acid' },
      ],
    };
  });

  this.put('/fake_uploads', () => {
    return new Response(204, {}, {});
  });

  this.get('/uploader_signature', () => {
    return {
      endpoint: '/fake_uploads',
    };
  });

  this.logging = true;
}
