export default {

  // Fetch all channels
  //
  // return: Promise
  fetchChannels() {
    return fetch(process.env.REACT_APP_FEEDCAST_API + '/channels')
           .then(res => res.json())
           .then(data => data.channels);

  },

  // Fetch all channel by uuid
  //
  // params: uuid String
  // return: Promise
  fetchChannelById(uuid) {
    return fetch(process.env.REACT_APP_FEEDCAST_API + `/channels/${uuid}`)
           .then(res => res.json())
  }
};
