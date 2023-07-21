import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Account from "./pages/Account";
import LogIn from "./pages/LogIn";
import HomePicture from "./pages/HomePicture";
import HomePicturePost from "./pages/HomePicturePost";
import GlobalStyle from "./GlobalStyled";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/config/configStore";
import Header from "./components/Header";
const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<GlobalStyle />
					{/* <Header /> */}
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/account' element={<Account />} />
						<Route path='/login' element={<LogIn />} />
						<Route path='/homepicture' element={<HomePicture />} />
						<Route path='/homepicturepost' element={<HomePicturePost />} />
					</Routes>
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
