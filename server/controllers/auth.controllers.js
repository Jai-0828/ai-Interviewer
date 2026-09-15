/* frontend data 
create user
token 
cokie*/
import genToken from "../config/token.js";
import User from "../models/user.model.js";


export const googleAuth = async (req, res) => {

try { 
    const{name, email}= req.body
    let user = await User.findOne({ email })
    if(!user){
        user= await User.create({
            name, 
            email
        })
    }

    let token = await genToken(user._id) 
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",       
        maxAge: 7*24*60*60*1000

    })
    res.status(200).json(user)
}
catch(error){
return res.status(500).json({ message: `Error occurred while logging in user ${error}` })
}
}

export const logout = async (req, res) => {
    try {
    await res.clearCookie("token")
    res.status(200).json({ message: "User logged out successfully" })
    }
    catch (error) {
        return res.status(500).json({ message: `Error occurred while logging out user ${error}` })
    }
}