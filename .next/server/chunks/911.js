"use strict";
exports.id = 911;
exports.ids = [911];
exports.modules = {

/***/ 45:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L_": () => (/* binding */ WeatherHttpClient),
/* harmony export */   "Qe": () => (/* binding */ IpHttpClient),
/* harmony export */   "Vn": () => (/* binding */ BoredHttpClient),
/* harmony export */   "W3": () => (/* binding */ dogHttpClient),
/* harmony export */   "kA": () => (/* binding */ CatHttpClient)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

//import { DogApiUrl, IpApi, BoredApi, CatApi, WeatherApi } from '../configs/environment';
const dogHttpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://dog.ceo/api/breeds/image/random",
    headers: {
        Accept: "Application/Json"
    }
});
const IpHttpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://ip-api.com/json/195.114.96.148?fields=16413",
    headers: {
        Accept: "Application/Json"
    }
});
const CatHttpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://www.boredapi.com/api/activity",
    headers: {
        Accept: "Application/Json"
    }
});
const BoredHttpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://catfact.ninja/fact?max_length=200",
    headers: {
        Accept: "Application/Json"
    }
});
const WeatherHttpClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather?q=Nadvirna,UA&appid=71325b69dfe3b650195628f87e460d49",
    headers: {
        Accept: "Application/Json"
    }
});


/***/ }),

/***/ 581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Slices_IpSlice),
  "qB": () => (/* binding */ loadIpData)
});

// UNUSED EXPORTS: IpSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/helper/httpClients.ts
var httpClients = __webpack_require__(45);
;// CONCATENATED MODULE: ./src/api/IpApi.ts

const fetchIpData = ()=>httpClients/* IpHttpClient.get */.Qe.get(`${"http://ip-api.com/json/195.114.96.148?fields=16413"}`).then((resp)=>{
        return resp.data;
    });

;// CONCATENATED MODULE: ./src/redux/Slices/IpSlice.ts


const loadIpData = (0,toolkit_.createAsyncThunk)("ip/fetchIp", fetchIpData);
const initialState = {
    status: "",
    country: "",
    countryCode: "",
    region: "",
    regionName: "",
    city: ""
};
const IpSlice = (0,toolkit_.createSlice)({
    name: "ip",
    initialState: {
        data: initialState
    },
    reducers: {},
    extraReducers: {
        [loadIpData.pending.toString()]: (state, action)=>{
            state.data.status = "unsuccess";
        },
        [loadIpData.fulfilled.toString()]: (state, action)=>{
            state.data.status = action.payload.status;
            state.data = action.payload;
        },
        [loadIpData.rejected.toString()]: (state, action)=>{
            state.data.status = "unsuccess";
        }
    }
});
/* harmony default export */ const Slices_IpSlice = (IpSlice.reducer);


/***/ }),

/***/ 151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X8": () => (/* binding */ toggleTheme),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ThemeSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const getInitialTodo = ()=>{
    if (false) {}
};
const initialValue = {
    darkTheme: getInitialTodo()
};
const ThemeSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "theme",
    initialState: initialValue,
    reducers: {
        toggleTheme: (state, action)=>{
            const themeValue = window.localStorage.getItem("theme");
            if (themeValue !== null) {
                var theme = JSON.parse(themeValue);
                theme = !action.payload.theme.darkTheme;
                window.localStorage.setItem("theme", JSON.stringify(theme));
                state.darkTheme = theme;
            }
        }
    }
});
const { toggleTheme  } = ThemeSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeSlice.reducer);


/***/ }),

/***/ 207:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L$": () => (/* binding */ toggleComplete),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "aS": () => (/* binding */ deleteTodo),
/* harmony export */   "p0": () => (/* binding */ pinTodo),
/* harmony export */   "rk": () => (/* binding */ addTodo)
/* harmony export */ });
/* unused harmony export TodoSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const getInitialTodo = ()=>{
    if (false) {}
};
const initialValue = {
    todoList: getInitialTodo()
};
const TodoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "todos",
    initialState: initialValue,
    reducers: {
        addTodo: (state, action)=>{
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
                pinned: false,
                datetime: new Date().toLocaleDateString()
            };
            state.todoList.push(newTodo);
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.push({
                    ...newTodo
                });
                window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
            } else {
                window.localStorage.setItem("todoList", JSON.stringify([
                    {
                        ...newTodo
                    }, 
                ]));
            }
        },
        toggleComplete: (state, action)=>{
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo)=>{
                    if (todo.id === action.payload.id) {
                        todo.completed = action.payload.completed;
                    }
                });
                window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
                state.todoList = [
                    ...todoListArr
                ];
            }
        },
        deleteTodo: (state, action)=>{
            const index = state.todoList.findIndex((todo)=>todo.id === action.payload.id);
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                for (let todo of todoListArr){
                    if (todo.id === action.payload.id) {
                        todoListArr.splice(index, 1);
                    }
                }
                window.localStorage.setItem("todoList", JSON.stringify(todoListArr));
                state.todoList = todoListArr;
            }
        },
        pinTodo: (state, action)=>{
            const todoList = window.localStorage.getItem("todoList");
            if (todoList) {
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((todo)=>{
                    if (todo.id === action.payload.id) {
                        todo.pinned = action.payload.pinned;
                    }
                });
                window.localStorage.setItem("todoList", JSON.stringify(todoListArr.sort((o1)=>{
                    return o1.pinned === true ? -1 : 1;
                })));
                state.todoList = [
                    ...todoListArr
                ];
            }
        }
    }
});
const { addTodo , toggleComplete , deleteTodo , pinTodo  } = TodoSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoSlice.reducer);


/***/ }),

/***/ 645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QV": () => (/* binding */ setAuth),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export AuthSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const getInitialTodo = ()=>{
    const defaultValues = {
        isAuth: false,
        username: ""
    };
    if (false) {}
    return defaultValues;
};
const AuthSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "auth",
    initialState: getInitialTodo(),
    reducers: {
        setAuth: (state, action)=>{
            const isAuthValue = window.localStorage.getItem("isAuth");
            if (isAuthValue !== null) {
                var data = JSON.parse(isAuthValue);
                data = action.payload;
                window.localStorage.setItem("isAuth", JSON.stringify(data));
                state.isAuth = data.isAuth;
                if (data.username != null) state.username = data.username;
            }
        }
    }
});
const { setAuth  } = AuthSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthSlice.reducer);


/***/ }),

/***/ 105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ boredSlice),
  "Yk": () => (/* binding */ loadBoredData)
});

// UNUSED EXPORTS: BoredSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/helper/httpClients.ts
var httpClients = __webpack_require__(45);
;// CONCATENATED MODULE: ./src/api/BoredApi.ts

const fetchBoredData = ()=>httpClients/* BoredHttpClient.get */.Vn.get(`${"http://www.boredapi.com/api/activity"}`).then((resp)=>{
        return resp.data;
    });

;// CONCATENATED MODULE: ./src/redux/Slices/boredSlice.ts


const loadBoredData = (0,toolkit_.createAsyncThunk)("bored/fetchBored", fetchBoredData);
const initialState = {
    status: "",
    activity: "",
    type: "",
    participants: 0,
    price: 0,
    link: "",
    key: "",
    accessibility: 0
};
const BoredSlice = (0,toolkit_.createSlice)({
    name: "bored",
    initialState: {
        data: initialState
    },
    reducers: {},
    extraReducers: {
        [loadBoredData.pending.toString()]: (state)=>{
            state.data.status = "unsuccess";
        },
        [loadBoredData.fulfilled.toString()]: (state, action)=>{
            state.data = action.payload;
            state.data.status = "success";
        },
        [loadBoredData.rejected.toString()]: (state)=>{
            state.data.status = "unsuccess";
        }
    }
});
/* harmony default export */ const boredSlice = (BoredSlice.reducer);


/***/ }),

/***/ 669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ catSlice),
  "ZT": () => (/* binding */ loadCatData)
});

// UNUSED EXPORTS: CatSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/helper/httpClients.ts
var httpClients = __webpack_require__(45);
;// CONCATENATED MODULE: ./src/api/CatApi.ts

const fetchCatData = ()=>httpClients/* CatHttpClient.get */.kA.get(`${"https://catfact.ninja/fact?max_length=200"}`).then((resp)=>{
        return resp.data;
    });

;// CONCATENATED MODULE: ./src/redux/Slices/catSlice.ts


const loadCatData = (0,toolkit_.createAsyncThunk)("cat/fetchcat", fetchCatData);
const initialState = {
    status: "",
    fact: "",
    length: ""
};
const CatSlice = (0,toolkit_.createSlice)({
    name: "cat",
    initialState: {
        data: initialState
    },
    reducers: {},
    extraReducers: {
        [loadCatData.pending.toString()]: (state)=>{
            state.data.status = "unsuccess";
        },
        [loadCatData.fulfilled.toString()]: (state, action)=>{
            state.data.status = "success";
            state.data = action.payload;
        },
        [loadCatData.rejected.toString()]: (state)=>{
            state.data.status = "unsuccess";
        }
    }
});
/* harmony default export */ const catSlice = (CatSlice.reducer);


/***/ }),

/***/ 313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Slices_dogSlice),
  "o5": () => (/* binding */ loadDogData)
});

// UNUSED EXPORTS: dogSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/helper/httpClients.ts
var httpClients = __webpack_require__(45);
;// CONCATENATED MODULE: ./src/api/DogApi.ts

const fetchDogData = ()=>httpClients/* dogHttpClient.get */.W3.get(`${"https://dog.ceo/api/breeds/image/random"}`).then((resp)=>{
        return resp.data;
    });

;// CONCATENATED MODULE: ./src/redux/Slices/dogSlice.ts


const loadDogData = (0,toolkit_.createAsyncThunk)("dog/fetchDog", fetchDogData);
const initialState = {
    message: "",
    status: ""
};
const dogSlice = (0,toolkit_.createSlice)({
    name: "dog",
    initialState: {
        data: initialState
    },
    reducers: {},
    extraReducers: {
        [loadDogData.pending.toString()]: (state)=>{
            state.data.status = "unsuccess";
        },
        [loadDogData.fulfilled.toString()]: (state, action)=>{
            state.data = action.payload;
        },
        [loadDogData.rejected.toString()]: (state)=>{
            state.data.status = "unsuccess";
        }
    }
});
/* harmony default export */ const Slices_dogSlice = (dogSlice.reducer);


/***/ }),

/***/ 653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ weatherSlice),
  "zZ": () => (/* binding */ loadWeatherData)
});

// UNUSED EXPORTS: WeatherSlice

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: ./src/helper/httpClients.ts
var httpClients = __webpack_require__(45);
;// CONCATENATED MODULE: ./src/api/WeatherApi.ts

const fetchWeatherData = ()=>httpClients/* WeatherHttpClient.get */.L_.get(`${"https://api.openweathermap.org/data/2.5/weather?q=Nadvirna,UA&appid=71325b69dfe3b650195628f87e460d49"}`).then((resp)=>{
        return resp.data;
    });

;// CONCATENATED MODULE: ./src/redux/Slices/weatherSlice.ts


const loadWeatherData = (0,toolkit_.createAsyncThunk)("weather/fetchWeather", fetchWeatherData);
const initialState = {
    status: "",
    coord: {
        lon: 0,
        lat: 0
    },
    weather: [
        {
            id: 0,
            main: "",
            description: "",
            icon: ""
        }, 
    ],
    base: "",
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
        sea_level: 0,
        grnd_level: 0
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0
    },
    clouds: {
        all: 0
    },
    dt: 0,
    sys: {
        country: "",
        sunrise: 0,
        sunset: 0
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0
};
const WeatherSlice = (0,toolkit_.createSlice)({
    name: "weather",
    initialState: {
        data: initialState
    },
    reducers: {},
    extraReducers: {
        [loadWeatherData.pending.toString()]: (state)=>{
            state.data.status = "unsuccess";
        },
        [loadWeatherData.fulfilled.toString()]: (state, action)=>{
            state.data.status = action.payload.status;
            state.data = action.payload;
        },
        [loadWeatherData.rejected.toString()]: (state)=>{
            state.data.status = "unsuccess";
        }
    }
});
/* harmony default export */ const weatherSlice = (WeatherSlice.reducer);


/***/ })

};
;