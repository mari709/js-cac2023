module.exports = {
    loginView:  (req, res) => res.send('Login View Route'),
    loginUser:  (req, res) => res.send('Login Route that receive the data when user click login button - validation'),
    registerView:  (req, res) => res.send('Register View Route'),
    registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button - create new user'),
    Logout: (req,res) => res.send("logout")
}