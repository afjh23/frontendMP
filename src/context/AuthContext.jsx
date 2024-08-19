import { createContext, useEffect, useState } from "react";

import {useMutation,useQuery} from '@tanstack/react-query'
import { getMe, loginUser, registerUser,updateUser } from "../services/authService";
import { useLocation, useNavigate } from "react-router-dom";
export const AuthContext = createContext()

export const AuthProvider = ({ children}) => {
    const navigate= useNavigate()
    const {pathname} = useLocation
    const rutasIgnoradas = ['/','/register']

    const [user, setUser] = useState(null)

    const loginMutation = useMutation({
        mutationKey: ['login'],
        mutationFn: loginUser,
        onError: data => alert(data.response.data.message),
        onSuccess: ({data}) =>{
            console.log(data)
            localStorage.setItem('tokenLogin', data.token)
            localStorage.setItem('id', data.user.user_id)
            setUser(data.user)
            navigate('/dashboard')
        }
    })

    const registerMutation = useMutation({
        mutationKey: ['register'],
        mutationFn: registerUser,
        onError: data => alert(data.response.data.message),
        onSuccess:({data}) => {
            alert(data.message)
            navigate('/')
        }
    })

    const updateMutation = useMutation({
        mutationKey: ['update'],
        mutationFn: updateUser,
        onError: (error) => {
          if (error.response && error.response.data && error.response.data.message) {
            alert(error.response.data.message);
          } else {
            alert("Ocurrió un error al actualizar.");
          }
        },
        onSuccess: ({ data }) => {
          alert(data.message);
        }
      })

    const {data, isLoading, isError} = useQuery({
        queryKey: ['user'],
        queryFn: getMe,
        enabled: !rutasIgnoradas.includes(pathname)
    })

    const logout = () => {
        localStorage.removeItem('tokenLogin')
        setUser(null)
        navigate('/')
    }

    useEffect(()=>{
        if(data && !isLoading){
            setUser(data)
        }
    }, [data, isLoading])

    return(
        <AuthContext.Provider
        value={{
            user,
            loginMutation,
            registerMutation,
            isLoading,
            updateMutation,
            logout,
            isError
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}