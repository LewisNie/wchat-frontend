import endPoint from './endPoint';
const currentEndPoint = endPoint.development;

const register = (data)=>{
    return new Promise((resolve, rejcet)=>{
        return fetch(`${currentEndPoint}/public/signup`,{
            method:'post',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            resolve(res.json());
        });
    });
};

const Login = (data)=>{
    return new Promise((resolve, rejcet)=>{
        return fetch(`${currentEndPoint}/public/login`,{
            method:'post',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((res)=>{
            resolve(res.json());
        });
    });};

const Logout = ()=>{
    return true;
};

const AuthApi = {
    register:register,
    login:Login,
    logout:Logout
};

export default AuthApi;
