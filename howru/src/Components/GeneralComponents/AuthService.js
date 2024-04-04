class AuthService {
	
	loginUser = async (userEmailAndPass) => {
		
		return fetch('http://localhost:51234/api/auth/login', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userEmailAndPass)
		}).then(response => response.json()
		).catch(error => console.error('There was some kind of issue!'))
	}
	
	registerUser = async (userData) => {
		return fetch('http://localhost:51234/api/auth/register', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		})
		.then(response => response.json()
		).catch(error => console.error('There was some kind of issue!'))
	}
	
	logoutUser = async (userEmail) => {
		return fetch('http://localhost:51234/api/auth/logout', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userEmail)
		}).then(response => response.json()
		).catch(error => console.error('There was some kind of issue!'))
	}
	
	resetUserPassword = async (userEmail) => {
		return fetch('http://localhost:51234/api/auth/reset', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userEmail)
		})
		.then(response => response.json())
	}
	
}

const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;