import { 
  GET_GAMES,
  SET_CURRENT_PAGE, 
  GET_DETAIL_FROM_STATE, 
  FILTER_BY_NAME,
  FILTER_BY_VIEWS, 
  FILTER_BY_TOPIC, 
  FILTER_BY_DIFICULTY, 
} from "./actions";

const initialState = {
  allGames: [{
    name: "Memory Game - Basics",
    image: "data:image/png;base64,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",
    id: 1,
    topic: "Languages",
    dificulty: "easy",
    views: 20,
},
{
  name: "Memory Game - Advanzed",
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAA2FBMVEX///9Ym0KKyXryYmL3z1yMy3yFx3RVmD76/fmGx3XP6clztGG43a9dn0h3t2WExHN+vmzC077q9ejI5MKo15zt7u2hzJaRzIK/x730XV1kpU9oqVOr06L29vb++PjW1tbLzMzi4uL81dXzcHDNlpbtZ2fVra27oKD2oaHDvb331Fz3zlz1tF3yY2LybGHyWmL2vF30nF/zhGD2xFz0o171rV70ll/2ul3ydGHzcmHziF/S5s3h6d/3np7szc3zVFTwfHzx4uLzfGH0kF/YxMTKsrLR3s7l7OTphm8pAAAF5ElEQVR4nO2dYXeaSBSGmwS7sWmCjevWNHU1bZPdgsyII0bM7naL3e7//0cV0QADyNwKx2Hmvt/annvQpw8wyNyZFy8wGAwGg8FgMM3M7/DU8TGuu9A8DeLqv8DV3eTB/4Tm73/qYNB9Cc1vvbj6Dbj6ZfLg9zfAfHmoh8EpLO00A2D1aYrBxzNgbh4GA/4baMfg02hYPQRksGPQEksBA0C1vAxanQuRXLVyGbRMsWrJGVz8IpLLAgZXJyLV78yW5AxOBPKukIFQtSm7B3IxoMoyED4XyHihKgNhD2bWRFUGoh4EzLCXuadD8xmIeuAahjF21GQg6IHP1gxYrgjNZyDmAXWtNQPLI0oyEPPAsY1NpkoyEPIg0mAtwlhJBuUeUEoJizQwrGD9J+UY7PfAcUiwdMc7BIZhj2ergDiOoxKDPR74c++RWesYyYR/YU88N1CHwR4Ppkb626dJuFQZBns8ILNCBOurI9HCg/UzQjGC+ILQfAZ77wvUtfMZeEpdE0vGB/kQUuPF5jMoGR848ywEa5YaMjefQek4cZ5B4KUfH5vPoHScuBsnP2fMDRSbz6DUgywDRz8GY+5cYMoxKD8XGMfAIqoxKPWA8DcGa6oag1IPphkGc6oYgzIP6GrL4HHu2dt7o2oMyjygm2cGi618SpaPm1sEU41B6fUgvC2w+e7ECC+Qtm7XAzKxJi7Z/c/Ts9XENnzFGJR54LizRdJ9SubcL+zNZ1B6X8i+W1JujCT6rq04zWeA81CU8GDPfCSRatk9uLoVSgGDjlDxhdwe4PxEWJSdp4oMjsbg/kYSBm1YuP4FYHU7xeDfj8Dc18Lg6T003cSH+A6ufp88eK939xmWUR0MBvAcVs4dfjgCpgYGR87gDpxjf2QMBoPBYDAYPfL1Ezhf4+rza3ASxx7Aq8/rYPAB3HvufIirD+t775vQ4tZ15gtUwQD8O8Z9isEhvx/0ocWnb2Vh8DAcIoPRCBlkGPzk78pbBoBqeRmYHZGYRQyEqjtyM2hdXYrkNvOOZcOgZZ6IVEdv6iRm8JPvG7cMhN51Xm7e1DWfAf++UXoGZJHbbauTB47LCvrv9fEgsPm5gfp5MLMyk4V188C3s5NENfOAzsJZoizI+zddPFhE04U9nT3wti0UeSLo4QEN2K6rTEcPwnZ7P/Cee2lWC4dyLfiKe+BP596EMTtupbAZY2N3FZAqGMjvwfpekGm+354SYQs+OZyB/B7QnDbTGMOkAgbye7B+RCiEYD3GDw8qe3AWLc5UhkBtDxJNVVzGhFbBoBEe5F8TEutQaODBOiu+1ZRHoAGDLIRxuq1K+XMhzGMagb2iVTFojAf+hDsV3LOqGDTGgyl3LlgzpyoGTfEge3vkLokaeEAz4yT+92X1PXC87VMT250TdlAVg6Z4QKLlOGxvuXDZBoe11M2DxWQzLFqGo+OIAn9jUN+DcCkKttzdCvxZ+BO7bh5M2WSV+O2M+h7j1mlS3wMyJdy4MNDuvlAe9T2okwF6oLoHYvtwFHkgtAeI5AyEdnPJ6XuP5qWZt0Lbucg9JwsUZedoIgNkoAID5wu0fyHF4JC+974Jra6HQe/bt//+gOVzzOD7r+Akjj2EV9fCIMQAbT2PGSiT3hCcY3/k6nPoIgYYDAaDwWDUyvUraJJ7nf8Prn6VOPYdvLqWnu9uW3Dlv+dey9RaYdDqVjtx7P5baHU9z0zHXDNOlmdnZIAMEgwErwUFDMSrpez57gK6tjv5a8qKVhcxOHrP9zH3Ooe8Yzmp8R3LMdeYluVd2zHXGteRAXqAHqAHEQP0AD1ADyIG6AF6gB5EDNAD9AA9iBigB8gAz4WIAXqAHqAHEQP0AD1ADyIG6AF6gB5EDNAD9AA9iBigB+gBehAxQA/QA1UYVL3XuVwMBHfSKGJw2D4cQtV17sNxzL3Oo7l5kGqcp4oMwiCD+hhAm7ar2+u8bwLLa9qz7uk1NKm9zsHVrxPHHsKra+ljOYfnsPLqqjEYDAaDwWAw8PwA97pzZtZ0cQUAAAAASUVORK5CYII=",
  id: 2,
  topic: "Languages",
  dificulty: "medium",
  views: 15,
},
{
  name: "Hangman",
  image: "data:image/png;base64,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",
  id: 3,
  topic: "String Methods",
  dificulty: "medium",
  views: 18,
}],
  games: [],
  topics: ["Languages", "String Methods", "Code"],
  dificulties: ["easy", "medium", "hard"],
  currentPage: 1,
  gameDetail: [{}],
  error: ""
};

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_GAMES:
      if (!action.payload.includes(null)) {    
        return {
         ...state, 
         games: action.payload,
         allGames: action.payload,
         currentPage: 1,
        };
      } else {
        return { 
          ...state,
          error: "Can't get games" 
        };
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case GET_DETAIL_FROM_STATE:
      const games = [...state.allGames];
      const gamesDetail = games.filter(
        (g) => g.id.toString() === action.payload
      );

      return {
        ...state,
        gameDetail: gamesDetail,
      };

    case FILTER_BY_NAME:
      const gamesName = [...state.games];

      const nameFilter = action.payload === "asc" 
      ? gamesName.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (b.name > a.name) {
          return -1;
        }
        return 0;
      }) 
      : gamesName.sort((a, b) => {
        if (a.name > b.name) {
         return -1;
        }
        if (b.name > a.name) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        games: nameFilter,
      };
    
    case FILTER_BY_VIEWS:
      const gamesViews = [...state.games];
  
      const viewsFilter = action.payload === "popular" 
      ? gamesViews.sort((a, b) => {
        if (a.views > b.views) {
          return 1;
        }
        if (b.views > a.views) {
          return -1;
        }
        return 0;
      }) 
      : gamesViews.sort((a, b) => {
        if (a.views > b.views) {
         return -1;
        }
        if (b.views > a.views) {
          return 1;
        }
        return 0;
      });

      return {
        ...state,
        games: viewsFilter,
      };

    case FILTER_BY_TOPIC:
      const gamesFT = [...state.games]
      let gamesByTopic = []
      gamesFT.forEach(game => game.topic === action.payload ? gamesByTopic.push(game.topic) : false)
      return {
          ...state,
          games: gamesByTopic,
          error: gamesByTopic.length > 0 ? false : `There are no games with the "${action.payload}" topic`
      }

    case FILTER_BY_DIFICULTY:
      const gamesFD = [...state.allGames]
      let gamesByDificulty = []
      gamesFD.forEach(game => game.dificulty === action.payload ? gamesByDificulty.push(game.dificulty) : false)
      return {
        ...state,
        games: gamesByDificulty,
        error: gamesByDificulty.length > 0 ? false : `There are no games with ${action.payload} dificulty`
      }

    default: return {...state}
  }
}

export default rootReducer;