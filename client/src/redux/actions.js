import axios from "axios";
export const GET_GAMES = "GET_GAMES";
export const SET_CURRENT_PAGE_GAMES = "SET_CURRENT_PAGE_GAMES";
export const SET_CURRENT_PAGE_DOCS = "SET_CURRENT_PAGE_DOCS";
export const GET_GAME_DETAIL_FROM_STATE = "GET_GAME_DETAIL_FROM_STATE";
export const FILTER_BY_NAME_GAMES = "FILTER_BY_NAME_GAMES";
export const FILTER_BY_VIEWS_GAMES = "FILTER_BY_VIEWS_GAMES";
export const FILTER_BY_TOPIC_GAMES = "FILTER_BY_TOPIC_GAMES";
export const FILTER_BY_DIFFICULTY_GAMES = "FILTER_BY_DIFFICULTY";
export const GET_NAME_GAMES = "GET_NAME_GAMES";
export const GET_DOCS = "GET_DOCS";
export const GET_NAME_DOCS = "GET_NAME_DOCS";
export const FILTER_BY_TOPIC_DOCS = "FILTER_BY_TOPIC_DOCS";
export const FILTER_BY_NAME_DOCS = "FILTER_BY_NAME_DOCS";
export const FILTER_BY_VIEWS_DOCS = "FILTER_BY_VIEWS_DOCS";
export const GET_USERS = "GET_USERS";
export const GET_TOPIC_GAMES = "GET_TOPIC_GAMES";
export const GET_NAME_USERS = "GET_NAME_USERS";
export const FILTER_BY_NAME_USERS = "FILTER_BY_NAME_USERS";
export const ERROR_GAMES = "ERROR_GAMES";
export const ERROR_DOCS = "ERROR_DOCS";
export const ERROR_USERS = "ERROR_USERS";
export const POST_USERS = "POST_USER";
export const GET_TOPIC_DOCS = "GET_TOPIC_DOCS";
export const GET_DOC_DETAIL_FROM_STATE = "GET_DOC_DETAIL_FROM_STATE";
export const SET_PROFILE = "SET_PROFILE";
export const RESET_PROFILE ="RESET_PROFILE";
export const GET_DONATIONS ="GET_DONATIONS";
export const GET_GAMES_AD = "GET_GAMES_AD";
export const GET_NAME_GAMES_AD="GET_NAME_GAMES_AD";
export const FILTER_BY_VIEWS_GAMES_AD="FILTER_BY_VIEWS_GAMES_AD";
export const GET_USER_DETAIL="GET_USER_DETAIL";
export const GET_GAME_DETAIL_FROM_STATE_AD="GET_GAME_DETAIL_FROM_STATE_AD";
export const GET_DOCS_AD = "GET_DOCS_AD";
export const FILTER_BY_VIEWS_DOCS_AD="FILTER_BY_VIEWS_DOCS_AD";
export const GET_NAME_DOCS_AD = "GET_NAME_DOCS_AD";
export const GET_DOC_DETAIL_FROM_STATE_AD = "GET_DOC_DETAIL_FROM_STATE_AD";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const GET_CONTACT = " GET_CONTACT";


//---------------GAME-------------------------------//

export function getGames() {
  return async function (dispatch) {
    try {
      const apiGames = await axios.get("/game");
      const games = apiGames.data;

      return dispatch({
        type: GET_GAMES,
        payload: games,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_GAMES,
        payload: "games have not loaded",
      });
    }
  };
}

export function getTopicGames() {
  return async function (dispatch) {
    const response = await axios.get("/game");
    const topics = response.data.map((game) => game.game_topic);
    const filterTopics = topics.filter((topic, index) => topics.indexOf(topic) === index);
    return dispatch({
      type: GET_TOPIC_GAMES,
      payload: filterTopics,
    });
  };
}

export function getGamesAd() {
  return async function (dispatch) {
    try{
        const apiGames = await axios.get("/game?admin=true");
       const games = apiGames.data;

    return dispatch({
      type: GET_GAMES_AD,
      payload: games,
    });
  } catch (error) {
    return dispatch({
      type: ERROR_GAMES,
      payload: "games have not loaded",
    })
  }
};
}

export function resetErrorGames() {
  return {
    type: ERROR_GAMES,
    payload: "",
  };
}

export function resetErrorDocs() {
  return {
    type: ERROR_DOCS,
    payload: "",
  };
}

export function getNameGames(game_name) {
  return async function (dispatch) {
    try {
      const apiGames = await axios.get(`/game?name=${game_name}`);
      const games = apiGames.data;

      return dispatch({
        type: GET_NAME_GAMES,
        payload: games,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_GAMES,
        payload: "couldn't find games with that name",
      });
    }
  };
}
export function getNameGamesAd(game_name) {
  return async function (dispatch) {
    try{
      const apiGames = await axios.get(`/game?name=${game_name}&admin=true`);
      const games = apiGames.data;

    return dispatch({
      type: GET_NAME_GAMES_AD,
      payload: games,
    });
  }catch (error) {
    return dispatch({
      type: ERROR_GAMES,
      payload:"couldn't find games with that name",
    });
  }
};
}

export function setCurrentPageGames(payload) {
  return {
    type: SET_CURRENT_PAGE_GAMES,
    payload,
  };
}

export function setCurrentPageDocs(payload) {
  return {
    type: SET_CURRENT_PAGE_DOCS,
    payload,
  };
}

export function getDetailFromState(payload) {
  return {
    type: GET_GAME_DETAIL_FROM_STATE,
    payload,
  };
};
export function getDetailFromStateAd(payload) {
  return {
    type: GET_GAME_DETAIL_FROM_STATE_AD,
    payload,
  };
};

export const filterByNameGames = (payload) => {
  return {
    type: FILTER_BY_NAME_GAMES,
    payload,
  };
};


export const filterByViewsGames = (payload) => {
  return {
    type: FILTER_BY_VIEWS_GAMES,
    payload,
  };
};
export const filterByViewsGamesAd = (payload) => {
  return {
    type: FILTER_BY_VIEWS_GAMES_AD,
    payload,
  };
};

export const filterByTopicGames = (payload) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_TOPIC_GAMES,
      payload,
    });
  };
};

export const filterByDifficultyGames = (payload) => {
  return function (dispatch) {
    dispatch({
      type: FILTER_BY_DIFFICULTY_GAMES,
      payload,
    });
  };
};

export function updateGame(game_id, payload){
  return async function (dispatch) {
  await axios.put(`/game/${game_id}`,payload);
  dispatch(getGames());
  dispatch(getGamesAd())
}
}
export function deleteGame(game_id){
  return async function (dispatch) {
    await axios.delete(`/game/${game_id}`)
    dispatch(getGames())
    dispatch(getGamesAd())
  }
}

export function postGame(payload){
  return async function (dispatch) {
    const response = await axios.post('/game',payload);
    dispatch(getGames())
    dispatch(getGamesAd())
    return response;
}
}

//--------------------DOCS--------------------------//

export function getDocs() {
  return async function (dispatch) {
    try {
      const apiDocs = await axios.get("/doc");
      const Docs = apiDocs.data;
      return dispatch({
        type: GET_DOCS,
        payload: Docs,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_DOCS,
        paylod: "docs have not loaded",
      });
    }
  };
}
export function getDocsAd() {
  return async function (dispatch) {
    try{
      
  const apiDocs = await axios.get("/doc?admin=true");
  const Docs = apiDocs.data;
    return dispatch({
      type: GET_DOCS_AD,
      payload: Docs,
    });
  } catch (error){
    return dispatch({
    type: ERROR_DOCS,
    paylod: "docs have not loaded"
  });
}
};
};


export function getNameDocs(doc_name) {
  return async function (dispatch) {
    try {
      const apiDocs = await axios.get(`/doc?name=${doc_name}`);
      const Docs = apiDocs.data;

      return dispatch({
        type: GET_NAME_DOCS,
        payload: Docs,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_DOCS,
        payload: "couldn't find docs with that name",
      });
    }
  };
}

export function getNameDocsAd(doc_name) {
  return async function (dispatch) {
    try {
  const apiDocs = await axios.get(`/doc?name=${doc_name}&admin=true`);
  const Docs = apiDocs.data;

    return dispatch({
      type: GET_NAME_DOCS_AD,
      payload: Docs,
    });
  } catch(error) {
    return dispatch({
      type: ERROR_DOCS,
      payload: "couldn't find docs with that name",
    });
  }
};
}

export const filterByTopicDocs = (payload) => {
  return async function (dispatch) {
    dispatch({
      type: FILTER_BY_TOPIC_DOCS,
      payload,
    });
  };
};

export const filterByNameDocs = (payload) => {
  return {
    type: FILTER_BY_NAME_DOCS,
    payload,
  };
};

export const filterByViewsDocs = (payload) => {
  return {
    type: FILTER_BY_VIEWS_DOCS,
    payload,
  };
};
export const filterByViewsDocsAd = (payload) => {
  return {
    type: FILTER_BY_VIEWS_DOCS_AD,
    payload,
  };
};

export function updateDoc(doc_id, payload){
  return async function (dispatch) {
  await axios.put(`/doc/${doc_id}`,payload);
  dispatch(getDocs());
  dispatch(getDocsAd())
}
}
export function deleteDoc(doc_id){
  return async function (dispatch) {
    console.log(doc_id)
    await axios.delete(`/doc/${doc_id}`)
    dispatch(getDocs())
    dispatch(getDocsAd())
  }
}
export function postDoc(payload){
  return async function (dispatch) {
    const response = await axios.post('/doc',payload);
    dispatch(getDocs())
    dispatch(getDocsAd())
    return response;
}
}

//---------------------USERS-------------------------//

export function getUsers() {
  return async function (dispatch) {
    try {
      const apiUsers = await axios.get("/users");
      const Users = apiUsers.data;
      console.log(Users)
      return dispatch({
        type: GET_USERS,
        payload: Users,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_USERS,
        paylod: "user not found",
      });
    }
  };
}

export function getUserDetail(internal_id){
  return async function (dispatch) {
    const user = (await axios.get(`/users/search/${internal_id}`)).data
    return dispatch({type:GET_USER_DETAIL, payload : user})
  }
}

export function getNameUsers(user_name) {
  return async function (dispatch) {
    try {
      const apiUsers = await axios.get(`/users?name=${user_name}`);
      const Users = apiUsers.data;
      console.log(Users)
      return dispatch({
        type: GET_NAME_USERS,
        payload: Users,
      });
    } catch (error) {
      return dispatch({
        type: ERROR_USERS,
        payload: "this user doesn't exist",
      });
    }
  };
}

export const filterByNameUsers = (payload) => {
  return {
    type: FILTER_BY_NAME_USERS,
    payload,
  };
};

export function postUser(payload) {
  return async function (dispatch) {
  const response = await axios.post('/user',payload);
  dispatch(getUsers())
  return response;
};

};
export function updateUser(internal_id, payload){
  console.log(payload)
  return async function (dispatch) {
  await axios.put(`/users/${internal_id}`,payload);
  dispatch(getUsers())
}
}
export function deleteUser(internal_id){
  return async function (dispatch) {
    await axios.delete(`/users/${internal_id}`)
    dispatch(getUsers())
  }
}

//----------------------PAYMENT-------------------//
export function payment20 (internal_id,user_name){
  return async function (dispatch) {
    let payload = {
      donation_name:user_name,
      donation_quantity:20,
      internal_id
    }
    const newDonation = (await axios.post("/donation/create", payload)).data
    let donation_id = await newDonation.donation_id
    const response = await axios.get(`/payment/20?donation_id=${donation_id}`);
    const link = response.data.init_point;
    window.location.href = link;
  } 
}


export function payment50(internal_id,user_name){
  return async function (dispatch) {
    let payload = {
      donation_name:user_name,
      donation_quantity:50,
      internal_id
    }
    const newDonation = (await axios.post("/donation/create", payload)).data
    let donation_id = await newDonation.donation_id
    const response = await axios.get(`/payment/50?donation_id=${donation_id}`);
    const link = response.data.init_point;
    window.location.href = link;
  };
}

export function payment100(internal_id,user_name) {
  return async function (dispatch) {
    let payload = {
      donation_name:user_name,
      donation_quantity:100,
      internal_id
    }
    const newDonation = (await axios.post("/donation/create", payload)).data
    let donation_id = await newDonation.donation_id
    const response = await axios.get(`/payment/100?donation_id=${donation_id}`);
    const link = response.data.init_point;
    window.location.href = link;
  }
}

//-------------------------MESSAGE--------------------//

export async function postMessage(input) {
  const response = await axios.post("/message", input);
  return response;
}

//--------------------------VIEWS-----------------------//

export async function countViewsGames(id) {
  const response = await axios.put(`/game/view/${id}`);
  return response;
}

export async function countViewsDocs(id) {
  const response = await axios.put(`/doc/view/${id}`);
  return response;
}

export function getTopicDocs() {
  return async function (dispatch) {
    const response = await axios.get("/doc");
    const topics = response.data.map((doc) => doc.doc_topic);
    const filterTopics = topics.filter((topic, index) => topics.indexOf(topic) === index);
    return dispatch({
      type: GET_TOPIC_DOCS,
      payload: filterTopics,
    });
  };
}

export function getDocDetailFromState(payload) {
  return {
    type: GET_DOC_DETAIL_FROM_STATE,
    payload,
  };
};
export function getDocDetailFromStateAd(payload) {
  return {
    type: GET_DOC_DETAIL_FROM_STATE_AD,
    payload,
  };
};
export async function countViewsDoc (id){
  const response = await axios.put(`/doc/view/${id}`);
  return response;
}
//--------------------------LIKES-----------------------//
export  function addLikeGame(id,internal_id) {
  return  function (dispatch) {
      axios.put(`/game/like/${id}?like_game=true`)
       .then(axios.put(`/users/${internal_id}?like_game=true&game_id=${id}`))
       .then(dispatch(getUserDetail(internal_id)))
       .then(dispatch(getUserDetail(internal_id)))
       
       
  }
}
export function removeLikeGame(id,internal_id) {
  return function (dispatch) {
   axios.put(`/game/like/${id}`)
   .then(axios.put(`/users/${internal_id}?game_id=${id}`)) 
   .then(dispatch(getUserDetail(internal_id)))
   .then(dispatch(getUserDetail(internal_id)))
   
  }
}
export function addLikeDoc(id,internal_id) {
  return function (dispatch) {
    axios.put(`/doc/like/${id}?like_doc=true`)
    .then(axios.put(`/users/${internal_id}?like_doc=true&doc_id=${id}`))
    .then(dispatch(getUserDetail(internal_id)))
    .then(dispatch(getUserDetail(internal_id)))

   }
}
export  function removeLikeDoc(id,internal_id) {
  return  function (dispatch) {
    axios.put(`/doc/like/${id}`)
   .then(axios.put(`/users/${internal_id}?doc_id=${id}`))
   .then(dispatch(getUserDetail(internal_id)))
   .then(dispatch(getUserDetail(internal_id)))
   
}
}

//-------------PROFILE------------------------------------//

export function sendProfile(prof) {
  return async function (dispatch) {
    console.log(prof);
    const response = await axios.post("/profile", prof);
    const profile = response.data;
    console.log(profile, "Back");

    return dispatch({ type: SET_PROFILE, payload: profile });
  };
}
export function editProfile(internal_id){
  return async function (dispatch){
    const response = await axios.get(`/profile?internal_id=${internal_id}`)
    dispatch({type:EDIT_PROFILE, payload:response.data})
  }
} 
export function resetProfile() {
  return async function (dispatch) {
    dispatch({ type: RESET_PROFILE });
  };
}

//---------------------DONATION------------------//

export function getDonations(){
  return async function (dispatch){
    const response = await axios.get("/donation")
    const donations = response.data
    dispatch({type:GET_DONATIONS, payload: donations})
  }
}

//---------------------CONTACT------------------//

export function getContacts(){
  return async function (dispatch){
    const response = await axios.get("/message")
    const allContacts = response.data
    dispatch({type:GET_CONTACT, payload: allContacts})
  }
}

export function answerMessage(message_id){
  return async function (dispatch) {
    await axios.delete(`/message/${message_id}`)
    dispatch(getContacts())
  }
}




